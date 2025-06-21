import { FC } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { useTranslations } from 'next-intl'

const UserTeamCard: FC = () => {
  const t = useTranslations('StakeBond')
  const investmentData = [
    { address: '0x5234...bfcB', bondAmount: 1000, usdtAmount: 1000 },
    { address: '0x5234...bfcA', bondAmount: 1000, usdtAmount: 1000 }
  ]
  return (
    <Table className='bg-[#17202A] rounded-2xl mt-6 lg:mt-10 mb-10'>
      <TableCaption className='caption-top text-center font-[Poppins] text-xl sm:text-2xl text-[#FFFFFF] lg:text-3xl mb-4'>
        {t('Your Team')}
      </TableCaption>
      <TableHeader>
        <TableRow className='border-[#17202A] hover:bg-[rgba(0, 0, 0, 0)] h-15'>
          <TableHead className='text-center font-[Poppins] text-[#0CAEE4] sm:text-xl lg:text-3xl'>Wallet</TableHead>
          <TableHead className='text-center font-[Poppins] text-[#0CAEE4] sm:text-xl lg:text-3xl'>
            {t('Bond Invested')}
          </TableHead>
          <TableHead className='text-center font-[Poppins] text-[#0CAEE4] sm:text-xl lg:text-3xl'>
            {t('USDT Invested')}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {investmentData.map(item => (
          <TableRow key={item.address} className='border-[#17202A] hover:bg-[rgba(0, 0, 0, 0)]'>
            <TableCell className='font-medium text-center font-[Poppins] sm:text-lg text-[#FFFFFF] lg:text-2xl'>
              {item.address}
            </TableCell>
            <TableCell className='font-medium text-center font-[Poppins] sm:text-lg text-[#FFFFFF] lg:text-2xl'>
              {item.bondAmount}
            </TableCell>
            <TableCell className='font-medium text-center font-[Poppins] sm:text-lg text-[#FFFFFF] lg:text-2xl'>
              {item.usdtAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

UserTeamCard.displayName = 'UserTeamCard'
export default UserTeamCard
