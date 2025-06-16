import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator
} from '@/components/ui/sidebar'
import IMAGES_MAP from '@/public'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const AppSidebar: FC = () => {
  const t = useTranslations('Sidebar')

  const items = [
    {
      title: t('Dashboard'),
      url: '/',
      icon: <Image width={14} height={14} src={IMAGES_MAP.dashboard} alt='Dashboard' className='' />
    },
    {
      title: t('Burn Bond'),
      url: '/burn',
      icon: <Image width={14} height={14} src={IMAGES_MAP.burn} alt='Burn Bond' />
    },
    {
      title: t('Stake Bond'),
      url: '/stake',
      icon: <Image width={14} height={14} src={IMAGES_MAP.stake} alt='Stake Bond' />
    },
    {
      title: t('NFT Raffle'),
      url: '/nft',
      icon: <Image width={14} height={14} src={IMAGES_MAP.nftRaffle} alt='NFT Raffle' />
    },
    {
      title: t('Swap'),
      url: '#',
      icon: <Image width={14} height={14} src={IMAGES_MAP.swap} alt='Swap' />
    }
  ]
  const itemsBelow = [
    {
      title: t('Community'),
      url: '/',
      icon: <Image width={14} height={14} src={IMAGES_MAP.community} alt='Community' />
    },
    {
      title: t('Whitepaper'),
      url: '#',
      icon: <Image width={14} height={14} src={IMAGES_MAP.WhitePaper} alt='Whitepaper' />
    },
    {
      title: t('Twitter'),
      url: '#',
      icon: <Image width={14} height={14} src={IMAGES_MAP.twitter} alt='Twitter' />
    }
  ]
  return (
    <Sidebar className='w-[14rem] lg:w-[16rem]'>
      <SidebarHeader className='pl-5 pt-7 text-[#FFFFFF]'>
        <SidebarMenu>
          <SidebarMenuItem className='pb-3'>
            <Link href='/'>
              <Image className='h-auto max-w-[150px]' width={150} height={40} src={IMAGES_MAP.logob2} alt='logo' />
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className='text-xs pb-2'>BOND Price: $0.01USD</SidebarMenuItem>
          <SidebarMenuItem className='text-xs'>Treasure: $10,000,000USD</SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className='pl-3'>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem className='pb-4' key={item.title}>
                  <SidebarMenuButton asChild isActive>
                    <Link className='flex' href={item.url}>
                      <div>{item.icon}</div>
                      <span className='text-sm font-[Poppins] text-[#F9FAFB] hover:text-[#0CAEE4]'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className='bg-[#FFFFFF] ml-0 ' />
        <SidebarGroup className='pl-3'>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsBelow.map(item => (
                <SidebarMenuItem className='pb-4' key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link className='hover:text-[#0CAEE4]' href={item.url}>
                      {item.icon}
                      <span className='text-sm font-[Poppins] text-[#F9FAFB] hover:text-[#0CAEE4]'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

AppSidebar.displayName = 'AppSidebar'

export default AppSidebar
