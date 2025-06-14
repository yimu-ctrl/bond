import { FC } from 'react'
import { Props } from '@/types'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { useTranslations } from 'next-intl'

const AssetOverview: FC = () => {
  const t = useTranslations('Dashboard')
  const renderContent = ({ title, value }: Props) => {
    return (
      <div
        key={title}
        className='w-full md:min-w-[240px] min-w-[290px] lg:min-w-[290px] flex-grow  md:w-1/4 pb-2 pt-2 sm:pb-3 lg:pb-10'
      >
        <Card className='font-[Poppins] bg-[#17202A] rounded-4xl w-full  sm:pb-3 lg:pb-10'>
          <CardHeader className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#0CAEE4] -mt-2.5 lg:mt-2'>
            <CardTitle>{t(title)}</CardTitle>
          </CardHeader>
          {title === 'Treasure' ? (
            <CardContent className=' lg:mt-5'>
              <div className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#F9FAFB] mt-3 sm:mt-5 md:mt-3 lg:mt-5 '>
                {value.toLocaleString()}USDT
              </div>
              <div className='text-center text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#F9FAFB] '>&nbsp;</div>
            </CardContent>
          ) : (
            <CardContent className='md:mp-2 lg:mt-5'>
              <div className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#F9FAFB] mb-3 sm:mb-5 md:mb-3 lg:mb-5 '>
                {value.toLocaleString()}BOND
              </div>
              <div className='text-center text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#F9FAFB] '>
                ≈${Math.floor(value / 100).toLocaleString()} USD
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    )
  }
  const data = [
    { title: 'My Balances', value: 1000000 },
    { title: 'Treasure', value: 1000000 },
    { title: 'Burned', value: 1000000 }
  ]
  return <div className='flex justify-between flex-wrap w-full gap-4'>{data.map(item => renderContent(item))}</div>
}
AssetOverview.displayName = 'AssetOverview'

export default AssetOverview
