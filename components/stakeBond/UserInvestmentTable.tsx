'use client'
import { FC } from 'react'
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table, TableFooter } from '../ui/table'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import WithdrawCapitalButton from './WithdrawCapitalButton'
import { useAccount, useReadContract } from 'wagmi'
import { consts } from '@/types/constants'
import { abiStakingContract } from '@/types/abi'
import { formatUnits } from 'viem'
import { useStakeUserWithdraw } from '@/hooks/useStakeUserWithdraw'

const UserInvestmentTable: FC = () => {
  const t = useTranslations('StakeBond')
  const { address, isConnected } = useAccount()
  const { handleWithdraw } = useStakeUserWithdraw()
  const UserSummary = useReadContract({
    address: consts.TESTNET.STAKING_CONTRACT,
    abi: abiStakingContract,
    functionName: 'getUserSummary',
    args: address ? [address] : undefined
  })
  const amount = isConnected
    ? UserSummary.data
      ? `${(
          Number(formatUnits(UserSummary.data?.totalInvestedUsdt, consts.TESTNET.USDT_DECIMAL)) +
          Number(formatUnits(UserSummary.data?.totalInvestedBond, consts.TESTNET.BOND_DECIMAL)) * 0.04
        ).toLocaleString()}USDT`
      : 'isLoading'
    : 'N/A'
  const withdrawableInterest = isConnected
    ? UserSummary.data
      ? `${(
          Number(formatUnits(UserSummary.data?.claimableRewardUsdt, consts.TESTNET.USDT_DECIMAL)) / 0.04 +
          Number(formatUnits(UserSummary.data?.claimableRewardBond, consts.TESTNET.BOND_DECIMAL))
        ).toLocaleString()}BOND`
      : 'isLoading'
    : 'N/A'
  const data = [
    { title: 'Type', value: '900Days(USDT)' },
    { title: 'Amount', value: amount },
    { title: 'Withdrawable interest', value: withdrawableInterest },
    { title: 'Withdrawable date', value: '2025-09-01 12:00:50' }
  ]
  return (
    <div className='bg-[#17202A] rounded-2xl mt-6 lg:mt-10'>
      <Table className='rounded-2xl'>
        <TableCaption className='caption-top font-[Poppins] text-[#F7FCFE] text-xl lg:text-3xl mt-8'>
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className='h-10 lg:h-20 border-[#17202A] hover:bg-[rgba(0, 0, 0, 0)]'>
            {data.map(item => (
              <TableHead
                key={item.title}
                className='text-center font-[Poppins] text-[#0CAEE4] text-sm lg:text-2xl px-0.5'
              >
                {t(item.title)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className='border-[#17202A] hover:bg-[rgba(0, 0, 0, 0)] '>
            {data.map(item => (
              <TableCell
                key={item.title}
                className='text-center font-[Poppins] text-[#FFFFFF] text-sm lg:text-2xl px-0 '
              >
                {item.value}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
        <TableFooter className='bg-[rgba(0, 0, 0, 0)] rounded-2xl border-[#17202A]'>
          <TableRow className='h-10 lg:h-30  hover:bg-[rgba(0, 0, 0, 0)]'>
            <TableCell className='text-center px-0' colSpan={2}>
              <WithdrawCapitalButton />
            </TableCell>
            <TableCell className='text-center px-0' colSpan={2}>
              <Button onClick={() => handleWithdraw('claimReward')} variant='myStyleInvest' size='mySizeInvest'>
                {t('Claim Interest')}
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

UserInvestmentTable.displayName = 'UserInvestmentTable'

export default UserInvestmentTable
