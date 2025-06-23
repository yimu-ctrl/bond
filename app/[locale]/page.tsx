import AssetOverview from '@/components/dashboard/AssetOverview'
import GenesisNodeCard from '@/components/dashboard/GenesisNodeCard'
import HeaderLeft from '@/components/dashboard/HeaderLeft'
import InviteRewardsCard from '@/components/dashboard/InviteRewardsCard'
import NodeMintCard from '@/components/dashboard/NodeMintCard'
import LangSwitch from '@/components/LangSwitch'
import IMAGES_MAP from '@/public'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('Dashboard')
  return (
    <div className='sm:pl-10 sm:pr-8 sm:pt-8 w-full'>
      <div className='flex flex-wrap-reverse justify-between content-end h-15 mb-10 sm:mb-15'>
        <HeaderLeft />
        <div className='flex pr-4'>
          <div className='pr-2'>
            <LangSwitch />
          </div>
          <div>
            <appkit-button size='sm' balance='hide' />
          </div>
        </div>
      </div>
      <div>
        <AssetOverview />
        <GenesisNodeCard />
        <NodeMintCard />
        <InviteRewardsCard />
      </div>
      <div>
        <div className='text-center text-3xl text-[#F9FBFA]  lg:text-5xl mt-6 sm:mt-12 md:mt-6 lg:mt-12'>
          Protocol Overview
        </div>
        <div className='flex justify-center mt-6'>
          <span className='font-[Poppins] text-[#0CAEE4] text-2xl lg:text-3xl'>Coming Soon</span>
          <Image width={40} height={40} src={IMAGES_MAP.coming} alt='coming' />
        </div>
      </div>
    </div>
  )
}
