'use client'

import { consts } from '@/types/constants'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { formatUnits } from 'viem'
import { useBalance } from 'wagmi'

const BurnOverview: FC = () => {
  const t = useTranslations('BurnBond')
  const burnedBalance = useBalance({
    address: consts.TESTNET.DEAD_ADDRESS,
    token: consts.TESTNET.BOND_TOKEN
  })
  const burnedBond =
    burnedBalance.isSuccess && burnedBalance.data ? Number(formatUnits(burnedBalance.data.value, 18)) : 0

  const data = [
    { title: 'Total Invested', value: `$10,000,000USD` },
    { title: 'Burned', value: `$${burnedBond.toLocaleString()}USD` },
    { title: 'Investors', value: '250' }
  ]
  const renderOverviewCard = ({ title, value }: { title: string; value: string }) => {
    return (
      <div key={title} className='bg-[#17202A] rounded-2xl w-1/4 min-w-[200px] flex-grow text-center'>
        <h2 className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl mt-1 mb-1 lg:mt-4 lg:mb-4'>
          {t(title)}
        </h2>
        <div className='font-[Poppins] text-[#FFFFFF] text-base sm:text-lg mb-2 lg:text-2xl lg:mb-5'>{value}</div>
      </div>
    )
  }
  return (
    <>
      <h2 className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl text-center'>
        {t('Burn Bond Overview')}
      </h2>
      <div className='flex flex-wrap justify-between gap-3 sm:gap-5 lg:gap-7 mt-3 sm:mt-5 lg:mt-8'>
        {data.map(item => {
          return renderOverviewCard(item)
        })}
      </div>
    </>
  )
}

BurnOverview.displayName = 'BurnOverview'

export default BurnOverview
