import BondBalanceStatus from '@/components/burnBond/BondBalanceStatus'
import BurnInvestTable from '@/components/burnBond/BurnInvestTable'
import BurnOverview from '@/components/burnBond/BurnOverview'
import UserFinanceOverview from '@/components/burnBond/UserFinanceOverview'
import Header from '@/components/Header'
import { useTranslations } from 'next-intl'

export default function BurnBond() {
  const t = useTranslations('BurnBond')
  return (
    <div className='pl-0 pr-0 pt-0 sm:pl-10 sm:pr-8 sm:pt-8'>
      <Header title='Burn Bond' desc='Invest in Burning Bonds for up to 120% Capital Protected Returns' />
      <BurnOverview />
      <BurnInvestTable />
      <UserFinanceOverview />
      <BondBalanceStatus />
    </div>
  )
}
