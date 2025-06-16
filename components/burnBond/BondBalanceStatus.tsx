import { FC } from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

const BondBalanceStatus: FC = () => {
  const t = useTranslations('BurnBond')
  return (
    <div className='w-full bg-[#17202A] rounded-2xl mt-6 lg:mt-10 mb-10'>
      <div className='flex justify-around items-center pt-5 lg:pt-10'>
        <div className='font-[Poppins] text-[#0CAEE4] text-base lg:text-2xl'>{t('Your BOND')}</div>
        <div className='font-[Poppins] text-[#FFFFFF] text-base lg:text-2xl'>1000 BOND</div>
        <div>
          <Button variant='myStyleInvest' size='mySizeInvest'>
            {t('Unlock')}
          </Button>
        </div>
      </div>
      <div className='font-[Poppins] text-[#D2BFBF] text-sm lg:text-base text-center'>
        *Amount of BOND currently locked
      </div>
    </div>
  )
}

BondBalanceStatus.displayName = 'BondBalanceStatus'

export default BondBalanceStatus
