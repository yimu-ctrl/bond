import { FC } from 'react'
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
import { useStakeUserWithdraw } from '@/hooks/useStakeUserWithdraw'

const WithdrawCapitalButton: FC = () => {
  const t = useTranslations('StakeBond')
  const { handleWithdraw } = useStakeUserWithdraw()
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
          <AlertDialogAction onClick={() => handleWithdraw('withdrawStake')} className='bg-[#00000033]'>
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
