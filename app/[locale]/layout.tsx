// app/layout.tsx
import type { Metadata } from 'next'
import '@/app/globals.css'

import { headers } from 'next/headers' // added
import ContextProvider from '@/context'
import { Providers } from '@/components/providers'
import { hasLocale, NextIntlClientProvider } from 'next-intl'

import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar'

export const metadata: Metadata = {
  title: 'AppKit Example App',
  description: 'Powered by WalletConnect'
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const cookies = (await headers()).get('cookie')
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Providers>
            <ContextProvider cookies={cookies}>
              <SidebarProvider>
                <AppSidebar />
                <main className='w-full'>
                  <SidebarTrigger className='md:hidden' />
                  {children}
                </main>
              </SidebarProvider>
            </ContextProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
