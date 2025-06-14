'use client'
import { FC } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { useTranslations } from 'next-intl'

const UserWithdrawCard: FC = () => {
  const t = useTranslations('BurnBond')
  const handleWithdraw = () => {}
  return (
    <Card className='w-1/3 min-w-[200px] flex-grow bg-[#17202A]'>
      <CardHeader>
        <CardTitle className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl'>
          {t('Your Bonus')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='font-[Poppins] text-[#FFFFFF] text-lg sm:text-xl lg:text-2xl text-center'>10,000 USDT</div>
        <div className='font-[Poppins] text-[#D2BFBF] text-sm sm:text-base lg:text-2xl text-center mt-1 lg:mt-2'>
          *Available to Withdraw
        </div>
        <div className='text-center mt-9 lg:mt-14'>
          <Button onClick={handleWithdraw} variant='myStyleInvest' size='mySizeInvest'>
            {t('Withdraw')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
UserWithdrawCard.displayName = 'UserWithdrawCard'

export default UserWithdrawCard
