import { FC } from 'react'
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '../ui/table'
import { useTranslations } from 'next-intl'

const WinningRecordsCard: FC = () => {
  const t = useTranslations('NFTRaffle')

  const winners = [{ hash: '0x0c14...9031', date: '2025-05-07 19:55:59', amount: '5000 USDT' }]

  const renderTableBody = () => {
    return (
      <TableBody>
        {winners.map(item => (
          <TableRow className='border-[#17202A] hover:bg-[rgba(0, 0, 0, 0)]' key={item.hash}>
            <TableCell className='text-center font-[Poppins] text-[#FFFFFF] sm:text-2xl'>{item.hash}</TableCell>
            <TableCell className='text-center font-[Poppins] text-[#FFFFFF] sm:text-2xl'>{item.date}</TableCell>
            <TableCell className='text-center font-[Poppins] text-[#FFFFFF] sm:text-2xl'>{item.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
  }
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
        {renderTableBody()}
      </Table>
    </div>
  )
}

WinningRecordsCard.displayName = 'WinningRecordsCard'
export default WinningRecordsCard
