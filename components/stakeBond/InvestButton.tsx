'use client'
import { FC, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '../ui/Label'
import { useTranslations } from 'next-intl'
import { injected, useAccount, useConnect, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { consts } from '@/types/constants'
import { abiStakingContract } from '@/types/abi'
import { ETHType } from '@/types'
import { erc20Abi, parseUnits } from 'viem'

const InvestButton: FC<{ type: string }> = ({ type }) => {
  const t = useTranslations('StakeBond')
  const { data: hash, writeContractAsync } = useWriteContract()
  const { isError, isSuccess } = useWaitForTransactionReceipt({
    hash
  })
  const { isConnected } = useAccount()
  const { connect } = useConnect()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const amount = Number(formData.get('amount'))
    const amountInWei = parseUnits(amount.toString(), consts.TESTNET.BOND_DECIMAL)
    const referrer = formData.get('referrer')?.toString() || ''
    if (!isConnected) {
      connect({ connector: injected() })
    }
    await writeContractAsync({
      address: consts.TESTNET.BOND_TOKEN,
      abi: erc20Abi,
      functionName: 'approve',
      args: [consts.TESTNET.STAKING_CONTRACT, amountInWei]
    })
    try {
      const isValidReferrer = /^0x[a-fA-F0-9]{0,40}$/.test(referrer)
      const referrerAddress = isValidReferrer ? (referrer as ETHType) : '0x0000000000000000000000000000000000000000'
      const functionName = type === 'Invest With USDT' ? 'stakeUSDT' : 'stakeBOND'
      await writeContractAsync({
        address: consts.TESTNET.STAKING_CONTRACT,
        abi: abiStakingContract,
        functionName,
        args: [amountInWei, referrerAddress]
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
