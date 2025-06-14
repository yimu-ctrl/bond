import { FC } from 'react'
import { CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { Props } from '@/types'

const MintCardContent: FC = () => {
  const t = useTranslations('Dashboard')
  const renderContent = ({ title, value }: Props) => {
    return (
      <div key={title} className='w-full text-center flex-grow mt-2 sm:w-1/4'>
        <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl lg:text-4xl'>{t(title)}</h2>
        <div>
          <div className='font-[Poppins] text-[#F9FAFB] text-2xl lg:text-4xl mt-3 lg:mt-6'>
            {title === 'Power' ? `${value.toLocaleString()} BOND/Day` : `${value.toLocaleString()} BOND`}
          </div>
          <div className='font-[Poppins] text-[#E1D1D1] text-xl lg:text-2xl mt-2 lg:mt-4 '>
            {title === 'Power'
              ? `≈ ${Math.floor(value / 25).toLocaleString()} USD/Day`
              : `≈ ${Math.floor(value / 25).toLocaleString()} USD`}
          </div>
        </div>
      </div>
    )
  }
  const data = [
    { title: 'Power', value: 300 },
    { title: 'You rewards', value: 1000 }
  ]

  return (
    <CardContent className='flex justify-between flex-wrap mt-2 lg:mt-8'>
      {data.map(item => renderContent(item))}
      <div className='flex flex-col justify-center w-full text-center mt-5 flex-grow sm:w-1/4'>
        <div>
          <Button className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-30 md:w-25 lg:w-30 rounded-3xl px-6 has-[>svg]:px-4'>
            <div className='font-[Poppins] text-xl'>Collect</div>
          </Button>
        </div>
      </div>
    </CardContent>
  )
}
MintCardContent.displayName = 'MintCardContent'

export default MintCardContent
