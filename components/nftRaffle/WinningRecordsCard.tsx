'use client'
import { FC } from 'react'
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '../ui/table'
import { useTranslations } from 'next-intl'
import { useAccount, useReadContract } from 'wagmi'
import { consts } from '@/types/constants'
import { abiLottery } from '@/types/abi'
import { formatUnits } from 'viem'

const WinningRecordsCard: FC = () => {
  const t = useTranslations('NFTRaffle')
  const { isConnected, address } = useAccount()
  const userClaimHistory = useReadContract({
    address: consts.TESTNET.LOTTERY,
    abi: abiLottery,
    functionName: 'getUserClaimHistory',
    args: address ? [address] : undefined
  })
  const userClaimCount = useReadContract({
    address: consts.TESTNET.LOTTERY,
    abi: abiLottery,
    functionName: 'getUserClaimCount',
    args: address ? [address] : undefined
  })
  const count = userClaimCount.data ? Number(userClaimCount.data) : 0
  function formatTimestamp(timestamp: any) {
    const date = new Date(Number(timestamp) * 1000)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }
  const rewards = userClaimHistory.data?.map((item, index) => {
    return {
      hash: userClaimHistory.data[index].claimHash.toString(),
      date: formatTimestamp(userClaimHistory.data[index].claimTime),
      amount: `${
        Number(formatUnits(userClaimHistory.data[index].claimAmount, consts.TESTNET.USDT_DECIMAL)).toLocaleString
      }USDT`
    }
  }) || [{ hash: '', date: '', amount: '' }]

  return (
    <div className='bg-[#17202A] mt-6 lg:mt-10 rounded-2xl mb-4'>
      <Table className=' bg-[#17202A] rounded-2xl mb-5'>
        <TableCaption className='caption-top font-[Poppins] text-[#FFFFFF] sm:text-2xl'>
          {t('Winning Records')}
        </TableCaption>
        <TableHeader>
          <TableRow className='border-[#17202A] hover:bg-[rgba(0, 0, 0, 0)]'>
            <TableHead className='text-center font-[Poppins] text-[#0CAEE4] sm:text-2xl h-15'>{t('Hash')}</TableHead>
            <TableHead className='text-center font-[Poppins] text-[#0CAEE4] sm:text-2xl h-15'>{t('Date')}</TableHead>
            <TableHead className='text-center font-[Poppins] text-[#0CAEE4] sm:text-2xl h-15'>{t('Amount')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rewards.map(item => (
            <TableRow className='border-[#17202A] hover:bg-[rgba(0, 0, 0, 0)]' key={item.hash}>
              <TableCell className='text-center font-[Poppins] text-[#FFFFFF] sm:text-2xl'>{item.hash}</TableCell>
              <TableCell className='text-center font-[Poppins] text-[#FFFFFF] sm:text-2xl'>{item.date}</TableCell>
              <TableCell className='text-center font-[Poppins] text-[#FFFFFF] sm:text-2xl'>{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

WinningRecordsCard.displayName = 'WinningRecordsCard'
export default WinningRecordsCard
