'use client'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'

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
            <img src='/united kingdom.svg' alt='united kingdom' />
          ) : (
            <img src='/hong kong.svg' alt='hong kong' />
          )}
          <p className='text-xl text-[#F9FAFB]'>{t('English')}</p>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleChangeLang('en')}>
          <img src='/united kingdom.svg' alt='hong kong' />
          <p className='text-xl text-[#000000]'>English</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLang('zh')}>
          <img src='/hong kong.svg' alt='kingdom' />
          <p className='text-xl text-[#000000]'>中文</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
