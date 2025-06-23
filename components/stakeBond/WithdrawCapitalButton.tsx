'use client'
import { FC, useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
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
import { abiStakingContract } from '@/types/abi'

const WithdrawCapitalButton: FC = () => {
  const t = useTranslations('StakeBond')
  const [txHash, setTxHash] = useState<`0x${string}`>()
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash
  })
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { writeContractAsync } = useWriteContract()
  const userStakeCount = useReadContract({
    address: consts.TESTNET.STAKING_CONTRACT,
    abi: abiStakingContract,
    functionName: 'getUserStakeCount',
    args: address ? [address] : undefined
  })

  const handleWithdrawCapital = async () => {
    if (!isConnected) {
      connect({ connector: injected() })
    }
    try {
      if (isConnected && address) {
        for (let i = 0; i <= Number(userStakeCount.data); i++) {
          const tx = await writeContractAsync({
            address: consts.TESTNET.STAKING_CONTRACT,
            abi: abiStakingContract,
            functionName: 'withdrawStake',
            args: [BigInt(i)]
          })
          setTxHash(tx)
        }
      }
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
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='myStyleInvest' size='mySizeInvest'>
          {t('Withdraw Capital')}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-center font-[Poppins] text-[#F6ECEC] text-3xl mb-2'>
            Caution
          </AlertDialogTitle>
          <AlertDialogDescription>
            <span className='font-[Poppins text-[#F6ECEC] text-xl mb-3 block'>
              Do you want to withdraw the principal early?
            </span>
            <span className='bg-[#FFE9D9] p-3 block'>
              <span className='flex'>
                <Image src={IMAGES_MAP.warning} alt={'Warning'} width={30} height={26} />
                <span className='font-[Poppins] text-[#771505] text-2xl'>Warning</span>
              </span>
              <span className='font-[Poppins] text-[#535862] text-xl block'>
                Early withdrawal of principal will be subject to a 50% interest deduction.
              </span>
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='sm:justify-around'>
          <AlertDialogAction onClick={handleWithdrawCapital} className='bg-[#00000033]'>
            Continue
          </AlertDialogAction>
          <AlertDialogCancel className='bg-[#0CAEE4]'>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

WithdrawCapitalButton.displayName = 'WithdrawCapitalButton'

export default WithdrawCapitalButton
