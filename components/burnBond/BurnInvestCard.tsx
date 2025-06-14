import { FC } from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

const BurnInvestCard: FC = () => {
  const t = useTranslations('BurnBond')
  const renderInvestCardContent = ({ title, value1, value2 }: { title: string; value1: string; value2: string }) => {
    return (
      <div key={title} className='  flex-frow text-center mt-5 lg:mt-10 mb-5 lg:mb-10 '>
        <h2 className='font-[Poppins] text-[#0CAEE4] text-sm sm:text-base lg:text-2xl'>{t(title)}</h2>
        <div className='font-[Poppins] text-[#FFFFFF] text-sm sm:text-base lg:text-2xl mt-3 lg:mt-6'>
          {value1 === 'Classic' ? t(value1) : value1}
        </div>
        <div className='font-[Poppins] text-[#FFFFFF] text-sm sm:text-base lg:text-2xl mt-3 lg:mt-6'>
          {value2 === 'Turbo' ? t(value2) : value2}
        </div>
      </div>
    )
  }
  const data = [
    { title: 'Type', value1: 'Classic', value2: 'Turbo' },
    { title: 'ROI', value1: '110', value2: '120' },
    { title: 'Limit', value1: '100 USDT', value2: '200 USDT' },
    { title: 'Remaining', value1: '10,000 USDT', value2: '10,000 USDT' }
  ]
  return (
    <div className='bg-[#17202A] rounded-2xl flex justify-around mt-6 lg:mt-10'>
      {data.map(item => {
        return renderInvestCardContent(item)
      })}
      <div className=' flex-frow flex flex-col justify-end mb-4 md:mb-5 lg:mb-10 '>
        <Button variant='myStyleInvest' size='mySizeInvest'>
          Invest
        </Button>
        <Button className='mt-1.5 lg:mt-4' variant='myStyleInvest' size='mySizeInvest'>
          Invest
        </Button>
      </div>
    </div>
  )
}
BurnInvestCard.displayName = 'BurnInvestCard'

export default BurnInvestCard
