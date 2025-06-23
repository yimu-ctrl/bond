'use client'
import { FC, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '../ui/Label'
import { useTranslations } from 'next-intl'
import { injected, useAccount, useConnect, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { consts } from '@/types/constants'
import { abiStakingContract } from '@/types/abi'
import { ETHType } from '@/types'

const InvestButton: FC<{ type: string }> = ({ type }) => {
  const t = useTranslations('StakeBond')
  const [txHash, setTxHash] = useState<`0x${string}`>()
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash
  })
  const { isConnected } = useAccount()
  const { connect } = useConnect()
  const { writeContractAsync } = useWriteContract()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const amount = Number(formData.get('amount'))
    const referrer = formData.get('referrer')?.toString() || ''
    if (!isConnected) {
      connect({ connector: injected() })
    }
    try {
      if (/^0x[a-fA-F0-9]{0,40}$/.test(referrer)) {
        if (type === 'Invest With USDT') {
          const tx = await writeContractAsync({
            address: consts.TESTNET.STAKING_CONTRACT,
            abi: abiStakingContract,
            functionName: 'stakeUSDT',
            args: [BigInt(amount), referrer as ETHType]
          })
          setTxHash(tx)
        } else {
          const tx = await writeContractAsync({
            address: consts.TESTNET.STAKING_CONTRACT,
            abi: abiStakingContract,
            functionName: 'stakeBOND',
            args: [BigInt(amount), referrer as ETHType]
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='myStyleInvest' size='mySizeInvest'>
          {t('Invest')}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-[#111927]'>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className='text-center font-[Poppins] text-[#FAF0F0] text-2xl'>{type}</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4'>
            <div className='grid gap-3'>
              <Label className='flex justify-center font-[Poppins] text-[#FAF0F0] text-xl ' htmlFor='amount'>
                Invest Amount
              </Label>
              <Input
                className='bg-white font-[Poppins] text-[#ACACAC]'
                id='amount'
                name='amount'
                type='number'
                placeholder='Enter amount(200-10000)'
              />
            </div>
            <div className='grid gap-3'>
              <Label className='flex justify-center font-[Poppins] text-[#FAF0F0] text-xl ' htmlFor='referrer'>
                Referrer Address
              </Label>
              <Input
                className='bg-white font-[Poppins] text-[#ACACAC]'
                id='referrer'
                name='referrer'
                placeholder="Enter Referrer's address(optional)"
                pattern='^0x[a-fA-F0-9]{40}$'
                title='请输入有效的以太坊地址（0x开头 + 40位十六进制字符）'
              />
            </div>
          </div>
          <DialogFooter className='sm:justify-center mt-5'>
            <Button className='bg-[#0CAEE4] hover:bg-[#34A5B3]' type='submit'>
              Continue
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

InvestButton.displayName = 'InvestButton'

export default InvestButton
