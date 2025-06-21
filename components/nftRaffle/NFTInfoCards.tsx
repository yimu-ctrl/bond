import { FC } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import ReferralRewardsContent from '../stakeBond/ReferralRewardsContent'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import Image from 'next/image'
import IMAGES_MAP from '@/public'

const NFTInfoCards: FC = () => {
  const t = useTranslations('NFTRaffle')
  const data = [
    { label: 'Prize Pool Balance', value: '100,000 USDT' },
    { label: 'Amount of prize issued', value: '5000 USDT' },
    { label: 'Number of winners', value: '20' },
    { label: 'Available reward amount', value: '50,000 USDT' }
  ]
  return (
    <div className='mt-8 lg:mt-12 flex flex-wrap justify-around gap-8 lg:px-8 '>
      <Card className='bg-[#17202A] text-center flex-1 min-w-[370px] '>
        <CardHeader>
          <CardTitle className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl'>
            {t('NFT Jackpot')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ReferralRewardsContent data={data} />
        </CardContent>
        <CardFooter className='flex justify-center mt-20'>
          <Button className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-50 rounded-3xl px-6'>
            {t('Claim Reward')}
          </Button>
        </CardFooter>
      </Card>
      <Card className='bg-[#17202A] text-center flex-1 min-w-[370px] lg:px-8 '>
        <CardHeader>
          <CardTitle className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl'>
            {t('Your Master NFT')}
          </CardTitle>
        </CardHeader>
        <CardContent className='flex items-center justify-center mt-10'>
          <Image src={IMAGES_MAP.masterNft} alt={'masterNFT'} width={292} height={412}></Image>
        </CardContent>
        <CardFooter className='flex justify-center mt-10'>
          <Button className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-50 rounded-3xl px-6'>
            {t('Synthesis')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
NFTInfoCards.displayName = 'NFTInfoCard'
export default NFTInfoCards
