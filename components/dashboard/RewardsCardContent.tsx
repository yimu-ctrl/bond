import { FC } from 'react'
import { Button } from '../ui/button'
import { Props } from '@/types'
import { useTranslations } from 'next-intl'

const RewardsCardContent: FC = () => {
  const t = useTranslations('Dashboard')
  const renderContent = ({ title, value }: Props) => {
    return (
      <div key={title} className='w-full text-center flex-grow sm:w-1/3'>
        <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl  lg:text-4xl'>{t(title)}</h2>
        <div>
          <div className='font-[Poppins] text-[#F9FAFB] text-2xl s lg:text-4xl mt-3 sm:mt-6 md:mt-3 lg:mt-6'>
            {`${value.toLocaleString()}USDT`}
          </div>
        </div>
      </div>
    )
  }
  const data = [
    { title: 'Total Invite Amount', value: 10000 },
    { title: 'Your Rewards', value: 2000 }
  ]
  return (
    <>
      <div className='flex justify-between flex-wrap gap-2 mt-2 lg:mt-8'>{data.map(item => renderContent(item))}</div>
      <div className='flex justify-between items-center flex-wrap gap-2'>
        <div className='text-center md:min-w-[240px] min-w-[290px] flex-grow lg:w-1/3 font-[Poppins] text-[#E1D1D1] text-sm lg:text-lg mt-3 sm:mt-6 md:mt-3 lg:mt-6'>
          {t('Your Referral Link')}:https://app.bsc.bond/r/xxxxxxxxxxxxxxxxxxx
        </div>
        <div className='text-center md:min-w-[240px] min-w-[290px] flex-grow lg:w-1/3 font-[Poppins] text-[#F9FAFB] text-2xl sm:text-4xl mt-3 sm:mt-6'>
          <Button className='bg-[#0CAEE4] font-[Poppins] text-base sm:text-xl lg:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-30 md:w-25 lg:w-30 rounded-3xl px-6 has-[>svg]:px-4'>
            {t('Copy')}
          </Button>
        </div>
      </div>
    </>
  )
}

RewardsCardContent.displayName = 'RewardsCardContent'

export default RewardsCardContent
