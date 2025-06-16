import { FC } from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '../ui/table'

const StakeInvestTable: FC = () => {
  const t = useTranslations('StakeBond')

  const data = [
    { title: 'Type', value1: '90Days(USDT)', value2: '90Days(BOND)' },
    { title: 'ROI', value1: '0.5%/day', value2: '0.5%/day' },
    { title: 'Min Invest', value1: '100USDT', value2: '100BOND' },
    { title: 'Max Invest', value1: '10,000USDT', value2: '5000BOND' }
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
            <Button variant='myStyleInvest' size='mySizeInvest'>
              {t('Invest')}
            </Button>
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
            <Button variant='myStyleInvest' size='mySizeInvest'>
              {t('Invest')}
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
StakeInvestTable.displayName = 'BurnInvestCard'

export default StakeInvestTable
