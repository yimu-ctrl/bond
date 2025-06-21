import { FC } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import GenesisCardContent from './GenesisCardContent'
import GenesisNodeButton from './GenesisNodeButton'
import GenesisNodeProgress from './GenesisNodeProgress'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import IMAGES_MAP from '@/public'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { Button } from '../ui/button'

const GenesisNodeCard: FC = () => {
  const t = useTranslations('Dashboard')
  return (
    <Card className='bg-[#17202A] rounded-4xl mt-6 sm:mt-12 md:mt-6 lg:mt-12 '>
      <CardHeader>
        <CardTitle className='flex justify-center text-center text-3xl text-[#F9FBFA] pt-5 sm:pt-10 md:pt-5 lg:pt-10 lg:text-5xl '>
          <div>{t('Genesis Node')}</div>
          <Dialog>
            <DialogTrigger>
              <Image src={IMAGES_MAP.Subtract} alt={'Subtract'} width={30} height={30} className='cursor-pointer' />
            </DialogTrigger>
            <DialogContent className='bg-[#111927] border-[#111927]'>
              <DialogHeader>
                <DialogTitle className='text-center font-[Poppins] text-[#0CAEE4] text-2xl'>
                  Genesis Node Rule
                </DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <p className='font-[Inter] text-[#F8F5FF] text-center text-xl'>1. Invest up to 200 USDT per wallet; </p>
                <p className='font-[Inter] text-[#F8F5FF] text-center text-xl'>
                  2. You can get 5000 BOND and 2 classic NFTs;
                </p>
              </DialogDescription>
              <DialogFooter className='sm:justify-center'>
                <DialogClose asChild>
                  <Button className='bg-[#0CAEE4] rounded-xl font-[Poppins] text-lg'>Thanks</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardTitle>
        <GenesisNodeProgress />
      </CardHeader>
      <CardContent>
        <GenesisCardContent />
      </CardContent>
      <GenesisNodeButton />
    </Card>
  )
}
GenesisNodeCard.displayName = 'GenesisNodeCard'

export default GenesisNodeCard
