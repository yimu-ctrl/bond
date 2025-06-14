'use client'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

export default function LangSwitch() {
  const t = useTranslations('Dashboard')
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const handleChangeLang = (lang: string) => {
    router.replace(pathname, { locale: lang })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          {locale === 'en' ? (
            <Image width={30} height={30} src='/unitedKingdom.svg' alt='united kingdom' />
          ) : (
            <Image width={30} height={30} src='/hongKong.svg' alt='hong kong' />
          )}
          <p className='text-xl text-[#F9FAFB]'>{t('English')}</p>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleChangeLang('en')}>
          <Image width={30} height={30} src='/unitedKingdom.svg' alt='hong kong' />
          <p className='text-xl text-[#000000]'>English</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLang('zh')}>
          <Image width={30} height={30} src='/hongKong.svg' alt='kingdom' />
          <p className='text-xl text-[#000000]'>中文</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
