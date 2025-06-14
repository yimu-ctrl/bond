'use client'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { FC } from 'react'

const GenesisNodeButton: FC = () => {
  const t = useTranslations('Dashboard')
  const handleClick = () => {}
  return (
    <div className='flex justify-center mt-5 sm:mt-10 md:mt-5 lg:mt-10 pb-5 sm:pb-10 md:pb-5 lg:pb-10'>
      <Button
        onClick={handleClick}
        className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-50 rounded-3xl px-6'
      >
        {t('Join Now')}
      </Button>
    </div>
  )
}
GenesisNodeButton.displayName = 'GenesisNodeButton'
export default GenesisNodeButton
