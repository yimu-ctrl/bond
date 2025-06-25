'use client'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { FC, useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from '../ui/Label'
import { Input } from '../ui/input'
import {
  injected,
  useAccount,
  useConnect,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract
} from 'wagmi'
import { consts } from '@/types/constants'
import { abiBondPresale, abiReferralSystem } from '@/types/abi'
import { ETHType } from '@/types'

const GenesisNodeButton: FC = () => {
  const [open, setOpen] = useState(false)
  const { data: hash, writeContractAsync } = useWriteContract()
  const { isError, isSuccess } = useWaitForTransactionReceipt({
    hash
  })
  const t = useTranslations('Dashboard')
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { data } = useReadContract({
    address: consts.TESTNET.BOND_PRESALE,
    abi: abiBondPresale,
    functionName: 'paused'
  })

  const handleClick = () => {
    if (!isConnected) {
      connect({ connector: injected() })
    }
    setOpen(true)
  }

  const resultReferrer = useReadContract({
    address: consts.TESTNET.REFERRAL_SYSTEM,
    abi: abiReferralSystem,
    functionName: 'getReferrer',
    args: address ? [address] : undefined
  })

  const defaultValue = resultReferrer.data ? resultReferrer.data : ''
  console.log(defaultValue)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const referrerInput = formData.get('name') as string
    let referrerAddress: ETHType = '0x0000000000000000000000000000000000000000'

    if (referrerInput && referrerInput.trim() !== '') {
      if (!/^0x[a-fA-F0-9]{40}$/.test(referrerInput)) {
        alert(t('Invalid Ethereum address'))
        return
      }
      referrerAddress = referrerInput as ETHType
    }
    await writeContractAsync({
      address: consts.TESTNET.BOND_PRESALE,
      abi: abiBondPresale,
      functionName: 'purchaseTokens',
      args: [referrerAddress]
    })
  }
  useEffect(() => {
    if (isSuccess) {
      alert('Transaction succeeded!')
    } else if (isError) {
      alert('Transaction failed!')
    }
  }, [isSuccess, isError])
  return (
    <div className='flex justify-center mt-5 sm:mt-10 md:mt-5 lg:mt-10 pb-5 sm:pb-10 md:pb-5 lg:pb-10'>
      <Button
        disabled={data}
        onClick={handleClick}
        className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-50 rounded-3xl px-6'
      >
        {t('Join Now')}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='sm:max-w-[425px]'>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className='font-[Poppins] text-[#FFFFFF] text-xl'>
                You will get 5000 BOND and 2 NFTs, make sure you have 200 USDT in your wallet.Thanks for your
                participation!
              </DialogTitle>
            </DialogHeader>
            <div className='grid gap-4'>
              <div className='grid gap-3'>
                <Label className='font-[Poppins] text-[#FFFFFF] text-base' htmlFor='name-1'>
                  Referrer Address
                </Label>
                <Input
                  id='name-1'
                  name='name'
                  placeholder="Enter Referrer's address(optional)"
                  defaultValue={defaultValue}
                />
              </div>
            </div>
            <DialogFooter className='mt-3'>
              <Button className='bg-[#0CAEE4]' type='submit'>
                Continue
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
GenesisNodeButton.displayName = 'GenesisNodeButton'
export default GenesisNodeButton
