'use client'
import { FC, useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import ReferralRewardsContent from '../stakeBond/ReferralRewardsContent'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import Image from 'next/image'
import IMAGES_MAP from '@/public'
import {
  injected,
  useAccount,
  useConnect,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract
} from 'wagmi'
import { consts } from '@/types/constants'
import { abiCardDistributor, abiCardNFT, abiLottery } from '@/types/abi'
import { formatUnits } from 'viem'

const NFTInfoCards: FC = () => {
  const t = useTranslations('NFTRaffle')
  const [txHash, setTxHash] = useState<`0x${string}`>()
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash
  })
  const { isConnected, address } = useAccount()
  const { connect } = useConnect()
  const { writeContractAsync } = useWriteContract()

  // const userClaimDetails = useReadContract({
  //   address: consts.TESTNET.LOTTERY,
  //   abi: abiLottery,
  //   functionName: 'getUserClaimDetails',
  //   args: address ? [address] : undefined
  // })
  // const masterCardIds = userClaimDetails.data ? userClaimDetails.data[3] : []

  const lotteryInfo = useReadContract({
    address: consts.TESTNET.LOTTERY,
    abi: abiLottery,
    functionName: 'getLotteryInfo'
  })
  const result = useReadContract({
    address: consts.TESTNET.CARD_NFT,
    abi: abiCardNFT,
    functionName: 'hasCompleteSet',
    args: address ? [address] : undefined
  })
  const hasCompleteSet = result.data ? result.data : false
  const totalPool = lotteryInfo.data
    ? `${Number(formatUnits(lotteryInfo.data[0], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
    : 'isLoading'
  const totalClaimed = lotteryInfo.data
    ? `${Number(formatUnits(lotteryInfo.data[1], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
    : 'isLoading'
  const winnerCount = lotteryInfo.data
    ? `${Number(formatUnits(lotteryInfo.data[2], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}`
    : 'isLoading'
  const availablePrize = lotteryInfo.data
    ? `${Number(formatUnits(lotteryInfo.data[3], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
    : 'isLoading'

  const handleRewards = async () => {
    if (!isConnected) {
      connect({ connector: injected() })
    }
    // try {
    //   masterCardIds.forEach(async item => {
    //     const tx = await writeContractAsync({
    //       address: consts.TESTNET.LOTTERY,
    //       abi: abiLottery,
    //       functionName: 'claimPrize',
    //       args: [item]
    //     })
    //     const txReceipt = useWaitForTransactionReceipt({ hash: tx })
    //     if (txReceipt.isSuccess) {
    //       alert('success')
    //     }
    //   })
    // } catch (error: any) {
    //   if (error.message.includes('User rejected the request')) {
    //     alert('The user cancelled the transaction, please try again')
    //   } else {
    //     alert(`Failed to collect, please check the console log`)
    //   }
    // }
  }
  const handleCraftMasterCard = async () => {
    if (!isConnected) {
      connect({ connector: injected() })
    }
    try {
      const tx = await writeContractAsync({
        address: consts.TESTNET.CARD_DISTRIBUTOR,
        abi: abiCardDistributor,
        functionName: 'craftMasterCard'
      })
      setTxHash(tx)
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('User rejected the request')) {
        alert('The user cancelled the transaction, please try again')
      }
    }
  }
  useEffect(() => {
    if (isSuccess) {
      alert('Transaction succeeded!')
    } else if (!isLoading && txHash) {
      alert('Transaction failed!')
    }
  }, [isSuccess, isLoading, txHash])
  const data = [
    { label: 'Prize Pool Balance', value: totalPool },
    { label: 'Amount of prize issued', value: totalClaimed },
    { label: 'Number of winners', value: winnerCount },
    { label: 'Available reward amount', value: availablePrize }
  ]
  return (
    <div className='mt-8 lg:mt-12 flex flex-wrap justify-around gap-8 lg:px-8 '>
      <Card className='bg-[#17202A] text-center flex-1 min-w-[370px] '>
        <CardHeader>
          <CardTitle className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl'>
            {t('NFT Jackpot')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ReferralRewardsContent data={data} />
        </CardContent>
        <CardFooter className='flex justify-center mt-20'>
          <Button
            onClick={handleRewards}
            className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-50 rounded-3xl px-6'
          >
            {t('Claim Reward')}
          </Button>
        </CardFooter>
      </Card>
      <Card className='bg-[#17202A] text-center flex-1 min-w-[370px] lg:px-8 '>
        <CardHeader>
          <CardTitle className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl'>
            {t('Your Master NFT')}
          </CardTitle>
        </CardHeader>
        <CardContent className='flex items-center justify-center mt-10'>
          <Image src={IMAGES_MAP.masterNft} alt={'masterNFT'} width={292} height={412}></Image>
        </CardContent>
        <CardFooter className='flex justify-center mt-10'>
          <Button
            disabled={!hasCompleteSet}
            onClick={handleCraftMasterCard}
            className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-50 rounded-3xl px-6'
          >
            {t('Synthesis')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
NFTInfoCards.displayName = 'NFTInfoCard'
export default NFTInfoCards
