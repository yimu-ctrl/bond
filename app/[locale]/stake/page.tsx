import Header from '@/components/Header'
import InvestmentOverview from '@/components/stakeBond/InvestmentOverview'
import StakeInvestTable from '@/components/stakeBond/StakeInvestTable'
import TeamReferralRewards from '@/components/stakeBond/TeamReferralRewards'
import UserInvestmentTable from '@/components/stakeBond/UserInvestmentTable'
import UserReferralRewards from '@/components/stakeBond/UserReferralRewards'
import UserTeamCard from '@/components/stakeBond/UserTeamTable'
import { useTranslations } from 'next-intl'

export default function StakeBond() {
  const t = useTranslations('StakeBond')
  return (
    <div className='pl-0 pr-0 pt-0 sm:pl-8 sm:pr-8 sm:pt-8'>
      <Header title='Stake Bond' desc='Get up to 365% annual returns by staking your USDT or BOND!' />
      <InvestmentOverview />
      <StakeInvestTable />
      <UserInvestmentTable />
      <div className='mt-6 lg:mt-10'>
        <h2 className='text-center font-[Poppins] text-[#FFFFFF] text-4xl'>{t('Your Information')}</h2>
        <div className='flex flex-wrap justify-around px-5 lg:px-10'>
          <UserReferralRewards />
          <TeamReferralRewards />
        </div>
      </div>
      <UserTeamCard />
    </div>
  )
}
