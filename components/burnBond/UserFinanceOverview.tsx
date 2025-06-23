'use client'
import { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useTranslations } from 'next-intl'
import { Props } from '@/types'
import UserWithdrawCard from './UserWithdrawCard'
import { useAccount, useReadContract } from 'wagmi'
import { consts } from '@/types/constants'
import { abiBurnContract } from '@/types/abi'
import { formatUnits } from 'viem'

const UserFinanceOverview: FC = () => {
  const t = useTranslations('BurnBond')
  const { address } = useAccount()
  const userInvestmentStats = useReadContract({
    address: consts.TESTNET.BURN_CONTRACT,
    abi: abiBurnContract,
    functionName: 'getUserInvestmentStats',
    args: address ? [address] : undefined
  })

  const data = [
    {
      title: 'Classic',
      value: address
        ? userInvestmentStats.data
          ? `${Number(formatUnits(userInvestmentStats.data[0], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
          : 'isLoading'
        : 'N/A'
    },
    {
      title: 'Turbo',
      value: address
        ? userInvestmentStats.data
          ? `${Number(formatUnits(userInvestmentStats.data[1], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
          : 'isLoading'
        : 'N/A'
    },
    {
      title: 'Expected Returns',
      value: address
        ? userInvestmentStats.data
          ? `${Number(formatUnits(userInvestmentStats.data[2], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
          : 'isLoading'
        : 'N/A'
    },
    {
      title: 'Total Received',
      value: address
        ? userInvestmentStats.data
          ? `${Number(formatUnits(userInvestmentStats.data[3], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
          : 'isLoading'
        : 'N/A'
    }
  ]
  const renderContent = ({ title, value }: Props) => {
    return (
      <div key={title} className='font-[Poppins] text-[#FFFFFF] text-sm sm:text-sm lg:text-xl mt-2 lg:mt-5'>
        <span>{t(title)}:</span>
        <span className='ml-1.5 sm:ml-3.5'>{value}</span>
      </div>
    )
  }
  return (
    <div className='flex flex-wrap gap-2 mt-6 lg:mt-10'>
      <Card className='w-1/3 min-w-[200px] flex-grow bg-[#17202A]'>
        <CardHeader>
          <CardTitle className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl'>
            {t('Your Investment')}
          </CardTitle>
        </CardHeader>
        <CardContent className='mb-1 text-center lg:mb-2 -mt-2'>{data.map(item => renderContent(item))}</CardContent>
      </Card>
      <UserWithdrawCard />
    </div>
  )
}

UserFinanceOverview.displayName = 'UserFinanceOverview'
export default UserFinanceOverview
