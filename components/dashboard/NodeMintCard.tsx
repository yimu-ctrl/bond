import { FC } from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'

import MintCardContent from './MintCardContent'
import { useTranslations } from 'next-intl'

const NodeMintCard: FC = () => {
  const t = useTranslations('Dashboard')
  return (
    <Card className='bg-[#17202A] rounded-4xl mt-6  lg:mt-12'>
      <CardHeader className='pt-5 sm:pt-10 md:pt-5 lg:pt-10'>
        <CardTitle className='text-center text-3xl text-[#F9FBFA] lg:text-5xl'>{t('Node Mining')}</CardTitle>
      </CardHeader>
      <MintCardContent />
      <div className='text-center font-[Poppins] text-[#E1D1D1] text-base lg:text-xl mt-5 sm:mt-10 pb-2 sm:pb-8'>
        {t('Mining rewards are released every 24 hours and the activity ends 12 hours before the token is listed')}
      </div>
    </Card>
  )
}

NodeMintCard.displayName = 'NodeMintCard'
export default NodeMintCard
