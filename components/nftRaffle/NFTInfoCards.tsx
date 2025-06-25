'use client'
import { FC, useEffect } from 'react'
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
  const { data: hash, writeContractAsync } = useWriteContract()
  const { isError, isSuccess } = useWaitForTransactionReceipt({
    hash
  })
  const { isConnected, address } = useAccount()
  const { connect } = useConnect()

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

  const handleRewards = () => {}

  const handleCraftMasterCard = async () => {
    if (!isConnected) {
      connect({ connector: injected() })
    }
    try {
      await writeContractAsync({
        address: consts.TESTNET.CARD_DISTRIBUTOR,
        abi: abiCardDistributor,
        functionName: 'craftMasterCard'
      })
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('User rejected the request')) {
        alert('The user cancelled the transaction, please try again')
      }
    }
  }
  useEffect(() => {
    if (isSuccess) {
      alert('Transaction succeeded!')
    } else if (isError) {
      alert('Transaction failed!')
    }
  }, [isSuccess, isError])
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
