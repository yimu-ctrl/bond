import { FC } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import ReferralRewardsContent from './ReferralRewardsContent'
import { useTranslations } from 'next-intl'

const UserReferralRewards: FC = () => {
  const t = useTranslations('StakeBond')
  const data = [
    { label: 'Invite Performance', value: '10,000 USDT' },
    { label: 'Total BOND Rewards', value: '100 BOND' },
    { label: 'Total USDT Rewards', value: '100 USDT' }
  ]
  return (
    <Card className='bg-[#17202A] text-center mr-5 flex-1 min-w-[310px] max-w-[390px] mt-10 '>
      <CardHeader>
        <CardTitle className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl'>
          {t('Your Referral Rewards')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='font-[Poppins] text-[#0CAEE4] text-xl sm:text-2xl lg:text-3xl'>Role</div>
        <div className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl'>Gold</div>
        <ReferralRewardsContent data={data} />
        <div className='font-[Poppins] text-[#0CAEE4] text-base sm:text-xl lg:text-2xl mb-2'>
          {t('Your Referral Link')}
        </div>
        <div className='font-[Poppins] text-[#FFFFFF] text-sm'>https://app.bsc.bond/r/xxxxxxxxxxxxxxxxxxx</div>
      </CardContent>
      <CardFooter className='flex justify-center mt-1'>
        <Button className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-50 rounded-3xl px-6 mt-8'>
          {t('Copy Link')}
        </Button>
      </CardFooter>
    </Card>
  )
}

UserReferralRewards.displayName = 'UserReferralRewards'
export default UserReferralRewards
