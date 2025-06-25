'use client'
import { FC } from 'react'
import { useTranslations } from 'next-intl'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '../ui/table'
import InvestButton from './InvestButton'
import { useReadContracts } from 'wagmi'
import { consts } from '@/types/constants'
import { abiStakingContract } from '@/types/abi'
import { formatUnits } from 'viem'

const StakeInvestTable: FC = () => {
  const t = useTranslations('StakeBond')

  const results = useReadContracts({
    contracts: [
      {
        address: consts.TESTNET.STAKING_CONTRACT,
        abi: abiStakingContract,
        functionName: 'minUsdtInvestment',
        args: []
      },
      {
        address: consts.TESTNET.STAKING_CONTRACT,
        abi: abiStakingContract,
        functionName: 'maxUsdtInvestment',
        args: []
      },
      {
        address: consts.TESTNET.STAKING_CONTRACT,
        abi: abiStakingContract,
        functionName: 'minBondInvestment',
        args: []
      },
      {
        address: consts.TESTNET.STAKING_CONTRACT,
        abi: abiStakingContract,
        functionName: 'maxBondInvestment',
        args: []
      },
      {
        address: consts.TESTNET.STAKING_CONTRACT,
        abi: abiStakingContract,
        functionName: 'dailyRewardRate',
        args: []
      }
    ]
  })

  const data = [
    { title: 'Type', value1: '90Days(USDT)', value2: '90Days(BOND)' },
    {
      title: 'ROI',
      value1: results.data
        ? results.data[4].result
          ? `${Number(results.data[4].result) / 10}%/day`
          : 'isLoading'
        : 'isLoading',
      value2: results.data
        ? results.data[4].result
          ? `${Number(results.data[4].result) / 10}%/day`
          : 'isLoading'
        : 'isLoading'
    },
    {
      title: 'Min Invest',
      value1: results.data
        ? results.data[0].result
          ? `${Number(formatUnits(results.data[0].result, consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
          : 'isLoading'
        : 'isLoading',
      value2: results.data
        ? results.data[2].result
          ? `${Number(formatUnits(results.data[2].result, consts.TESTNET.BOND_DECIMAL)).toLocaleString()}BOND`
          : 'isLoading'
        : 'isLoading'
    },
    {
      title: 'Max Invest',
      value1: results.data
        ? results.data[1].result
          ? `${Number(formatUnits(results.data[1].result, consts.TESTNET.USDT_DECIMAL)).toLocaleString()}USDT`
          : 'isLoading'
        : 'isLoading',
      value2: results.data
        ? results.data[3].result
          ? `${Number(formatUnits(results.data[3].result, consts.TESTNET.BOND_DECIMAL)).toLocaleString()}BOND`
          : 'isLoading'
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
              className='text-center font-[Poppins] text-[#FFFFFF] text-sm px-0.5 sm:text-base lg:text-2xl'
            >
              {item.value1}
            </TableCell>
          ))}
          <TableCell className='text-center px-1'>
            <InvestButton type={'Invest With USDT'} />
          </TableCell>
        </TableRow>
        <TableRow className='border-[#17202A] h-14 sm:h-20 hover:bg-[rgba(0, 0, 0, 0)]'>
          {data.map(item => (
            <TableCell
              key={item.title}
              className='text-center font-[Poppins] text-[#FFFFFF] text-sm px-0.5 sm:text-base lg:text-2xl'
            >
              {item.value2}
            </TableCell>
          ))}
          <TableCell className='text-center px-1'>
            <InvestButton type={'Invest With BOND'} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
StakeInvestTable.displayName = 'BurnInvestCard'

export default StakeInvestTable
