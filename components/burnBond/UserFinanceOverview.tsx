import { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { Props } from '@/types'
import UserWithdrawCard from './UserWithdrawCard'

const UserFinanceOverview: FC = () => {
  const t = useTranslations('BurnBond')
  const renderContent = ({ title, value }: Props) => {
    return (
      <div key={title} className='font-[Poppins] text-[#FFFFFF] text-sm sm:text-sm lg:text-xl mt-2 lg:mt-5'>
        <span>{t(title)}:</span>
        <span className='ml-1.5 sm:ml-3.5'>{`${value.toLocaleString()}USDT`}</span>
      </div>
    )
  }
  const data = [
    { title: 'Classic', value: 10000 },
    { title: 'Turbo', value: 10000 },
    { title: 'Expected Returns', value: 10000 },
    { title: 'Total Received', value: 10000 }
  ]
  return (
    <div className='flex flex-wrap gap-2 mt-6 lg:mt-10'>
      <Card className='w-1/3 min-w-[200px] flex-grow bg-[#17202A]'>
        <CardHeader>
          <CardTitle className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl'>
            {t('Your Investment')}
          </CardTitle>
        </CardHeader>
        <CardContent className='mb-1 text-center lg:mb-2 -mt-2'>{data.map(item => renderContent(item))}</CardContent>
      </Card>
      <UserWithdrawCard />
    </div>
  )
}

UserFinanceOverview.displayName = 'UserFinanceOverview'
export default UserFinanceOverview
