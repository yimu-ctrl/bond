import { FC } from 'react'
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table, TableFooter } from '../ui/table'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'

const UserInvestmentTable: FC = () => {
  const t = useTranslations('StakeBond')
  const data = [
    { title: 'Type', value: '900Days(USDT)' },
    { title: 'Amount', value: '500 USDT' },
    { title: 'Withdrawable interest', value: '10 BOND' },
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
              <Button variant='myStyleInvest' size='mySizeInvest'>
                {t('Invest')}
              </Button>
            </TableCell>
            <TableCell className='text-center px-0' colSpan={2}>
              <Button variant='myStyleInvest' size='mySizeInvest'>
                {t('Invest')}
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
