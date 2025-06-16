import { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useTranslations } from 'next-intl'

const InvestmentOverview: FC = () => {
  const t = useTranslations('StakeBond')
  const renderCardContent = ({
    title,
    label1,
    value1,
    label2,
    value2
  }: {
    title: string
    label1: string
    value1: string
    label2: string
    value2: string
  }) => {
    return (
      <Card key={title} className='flex-1 mt-5 bg-[#17202A]'>
        <CardHeader>
          <CardTitle className='font-[Poppins] text-[#0CAEE4] text-2xl sm:text-3xl text-center'>{t(title)}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-center font-[Poppins] text-[#FFFFFF] text-base sm:text-xl'>{t(label1)}</p>
          <p className='text-center font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl'>{value1}</p>
          <p className='text-center font-[Poppins] text-[#FFFFFF] text-base sm:text-xl mt-5'>{t(label2)}</p>
          <p className='text-center font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl'>{value2}</p>
        </CardContent>
      </Card>
    )
  }
  const data = [
    {
      title: 'Overview',
      label1: 'Total Investors',
      value1: '250',
      label2: 'Total Withdrawn',
      value2: '100,000,000 USDT'
    },
    {
      title: 'Metrics',
      label1: 'Balance',
      value1: '2,000,000 BOND',
      label2: 'Current Investable Balance',
      value2: '60,000 USDT'
    }
  ]
  return <div className='flex justify-between gap-5 flex-wrap'>{data.map(item => renderCardContent(item))}</div>
}

InvestmentOverview.displayName = 'InvestmentOverview'
export default InvestmentOverview
