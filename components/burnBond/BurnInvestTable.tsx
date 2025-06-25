'use client'
import { FC } from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { consts } from '@/types/constants'
import { formatUnits } from 'viem'
import { useBurnInvest } from '@/hooks/useBurnInvest'
import { useBurnContractRead } from '@/hooks/useBurnContractRead'

const BurnInvestTable: FC = () => {
  const t = useTranslations('BurnBond')
  const { handleBurn } = useBurnInvest()
  const investmentLimits = useBurnContractRead('getInvestmentLimits', [])
  const ReturnRates = useBurnContractRead('getReturnRates', [])

  const data = [
    { title: 'Type', value1: 'Classic', value2: 'Turbo' },
    {
      title: 'ROI',
      value1: ReturnRates.data ? `${Number(ReturnRates.data[0]).toLocaleString()}%` : 'Loading',
      value2: ReturnRates.data ? `${Number(ReturnRates.data[1]).toLocaleString()}%` : 'Loading'
    },
    {
      title: 'Limit',
      value1: investmentLimits.data
        ? `${Number(formatUnits(investmentLimits.data[0], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
        : 'Loading',
      value2: investmentLimits.data
        ? `${Number(formatUnits(investmentLimits.data[1], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
        : 'Loading'
    },
    {
      title: 'Remaining',
      value1: investmentLimits.data
        ? investmentLimits.data[4]
          ? `${Number(formatUnits(investmentLimits.data[4], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
          : 'Loading'
        : 'isLoading',
      value2: investmentLimits.data
        ? investmentLimits.data[4]
          ? `${Number(formatUnits(investmentLimits.data[4], consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
          : 'Loading'
        : 'isLoading'
    }
  ]
  return (
    <Table className='bg-[#17202A] rounded-2xl mt-6 lg:mt-10'>
      <TableHeader>
        <TableRow className='h-10 lg:h-20 border-[#17202A] hover:bg-[rgba(0, 0, 0, 0)]'>
          {data.map(item => (
            <TableHead
              key={item.title}
              className='text-center font-[Poppins] text-[#0CAEE4] text-sm sm:text-base lg:text-2xl'
            >
              {t(item.title)}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className='border-[#17202A] hover:bg-[rgba(0, 0, 0, 0)]'>
          {data.map(item => (
            <TableCell
              key={item.title}
              className='text-center font-[Poppins] text-[#FFFFFF] text-sm px-1 sm:text-base lg:text-2xl'
            >
              {item.value1 === 'Classic' ? t(item.value1) : item.value1}
            </TableCell>
          ))}
          <TableCell className='text-center'>
            <Button onClick={() => handleBurn('normalBurn')} variant='myStyleInvest' size='mySizeInvest'>
              {t('Invest')}
            </Button>
          </TableCell>
        </TableRow>
        <TableRow className='border-[#17202A] h-14 sm:h-20 hover:bg-[rgba(0, 0, 0, 0)]'>
          {data.map(item => (
            <TableCell
              key={item.title}
              className='text-center font-[Poppins] text-[#FFFFFF] text-sm px-1 sm:text-base lg:text-2xl'
            >
              {item.value2 === 'Turbo' ? t(item.value2) : item.value2}
            </TableCell>
          ))}
          <TableCell className='text-center'>
            <Button onClick={() => handleBurn('turboBurn')} variant='myStyleInvest' size='mySizeInvest'>
              {t('Invest')}
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
BurnInvestTable.displayName = 'BurnInvestCard'

export default BurnInvestTable
