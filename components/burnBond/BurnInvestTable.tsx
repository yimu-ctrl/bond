import { FC } from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const BurnInvestTable: FC = () => {
  const t = useTranslations('BurnBond')
  const data = [
    { title: 'Type', value1: 'Classic', value2: 'Turbo' },
    { title: 'ROI', value1: '110', value2: '120' },
    { title: 'Limit', value1: '100 USDT', value2: '200 USDT' },
    { title: 'Remaining', value1: '10,000 USDT', value2: '10,000 USDT' }
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
            <Button variant='myStyleInvest' size='mySizeInvest'>
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
            <Button variant='myStyleInvest' size='mySizeInvest'>
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
