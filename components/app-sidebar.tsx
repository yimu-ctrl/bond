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
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function AppSidebar() {
  const t = useTranslations('Sidebar')

  const items = [
    {
      title: t('Dashboard'),
      url: '/',
      icon: <img src='/dashboard.svg' alt='Dashboard' />
    },
    {
      title: t('Burn Bond'),
      url: '#',
      icon: <img src='/burn.svg' alt='Burn Bond' />
    },
    {
      title: t('Stake Bond'),
      url: '#',
      icon: <img src='/stake.svg' alt='Stake Bond' />
    },
    {
      title: t('NFT Raffle'),
      url: '#',
      icon: <img src='/NFT_Raffle.svg' alt='NFT Raffle' />
    },
    {
      title: t('Swap'),
      url: '#',
      icon: <img src='/swap.svg' alt='Swap' />
    }
  ]
  const itemsBelow = [
    {
      title: t('Community'),
      url: '/',
      icon: <img src='/Community.svg' alt='Community' />
    },
    {
      title: t('Whitepaper'),
      url: '#',
      icon: <img src='/Whitepaper.svg' alt='Whitepaper' />
    },
    {
      title: t('Twitter'),
      url: '#',
      icon: <img src='/x-twitter.svg' alt='Twitter' />
    }
  ]
  return (
    <Sidebar>
      <SidebarHeader className='pl-5 pt-7 text-[#FFFFFF]'>
        <SidebarMenu>
          <SidebarMenuItem className='pb-3'>
            <Link href='/'>
              <img src='./logob 2.svg' alt='logo' />
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
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {item.icon}
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
                    <Link href={item.url}>
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
