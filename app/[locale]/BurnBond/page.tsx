import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

export default function BurnBond() {
  const t = useTranslations('BurnBond')
  return (
    <div className='pl-0 pr-0 pt-0 sm:pl-10 sm:pr-8 sm:pt-8 w-full'>
      <div className='flex flex-wrap-reverse justify-between content-end h-15 mb-10 sm:mb-15'>
        <div className='ml-3'>
          <h2 className='font-[Poppins] text-base sm:text-2xl text-[#F9FAFB] mb-1 sm:mb-3'>Burn Bond</h2>
          <div className='font-[Poppins] text-xs sm:text-base text-[#9DA4AE]'>
            Invest in Burning Bonds for up to 120% Capital Protected Returns
          </div>
        </div>
        <div className='pr-4'>
          <appkit-button size='sm' balance='hide' />
        </div>
      </div>
      <div>
        <div>
          <h2 className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl text-center'>
            {t('Burn Bond Overview')}
          </h2>
          <div className='flex flex-wrap justify-between gap-3 sm:gap-5 lg:gap-7 mt-3 sm:mt-5 lg:mt-8'>
            <div className='bg-[#17202A] rounded-2xl w-1/4 min-w-[200px] flex-grow text-center'>
              <h2 className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl mt-1 mb-1 lg:mt-4 lg:mb-4'>
                {t('Total Invested')}
              </h2>
              <div className='font-[Poppins] text-[#FFFFFF] text-base sm:text-lg mb-2 lg:text-2xl lg:mb-5'>
                $10,000,000USD
              </div>
            </div>
            <div className='bg-[#17202A] rounded-2xl w-1/4 min-w-[200px] flex-grow text-center'>
              <h2 className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl mt-1 mb-1 lg:mt-4 lg:mb-4'>
                {t('Burned')}
              </h2>
              <div className='font-[Poppins] text-[#FFFFFF] text-base sm:text-lg mb-2 lg:text-2xl lg:mb-5'>
                $10,000,000USD
              </div>
            </div>
            <div className='bg-[#17202A] rounded-2xl w-1/4 min-w-[200px] flex-grow text-center'>
              <h2 className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl mt-1 mb-1 lg:mt-4 lg:mb-4'>
                {t('Investors')}
              </h2>
              <div className='font-[Poppins] text-[#FFFFFF] text-base sm:text-lg mb-2 lg:text-2xl lg:mb-5'>
                $10,000,000USD
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#17202A] rounded-2xl flex justify-between mt-6 lg:mt-10'>
          <div className=' w-1/6 flex-frow text-center mt-5 lg:mt-10 lg:mb-10 '>
            <h2 className='font-[Poppins] text-[#0CAEE4] text-xs sm:text-base lg:text-2xl'>{t('Type')}</h2>
            <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-base lg:text-2xl mt-3 lg:mt-6'>
              {t('Classic')}
            </div>
            <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-base lg:text-2xl mt-3 lg:mt-6'>
              {t('Turbo')}
            </div>
          </div>
          <div className=' w-1/6 flex-frow text-center mt-5 lg:mt-10 lg:mb-10 '>
            <h2 className='font-[Poppins] text-[#0CAEE4] text-xs sm:text-base lg:text-2xl'>{t('ROI')}</h2>
            <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-base lg:text-2xl mt-3 lg:mt-6'>110%</div>
            <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-base lg:text-2xl mt-3 lg:mt-6'>120%</div>
          </div>
          <div className=' w-1/3 flex-frow text-center mt-5 lg:mt-10 lg:mb-10 '>
            <h2 className='font-[Poppins] text-[#0CAEE4] text-xs sm:text-base lg:text-2xl'>{t('Limit')}</h2>
            <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-base lg:text-2xl mt-3 lg:mt-6'>10,0 USDT</div>
            <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-base lg:text-2xl mt-3 lg:mt-6'>200 USDT</div>
          </div>
          <div className=' w-1/2 flex-frow flex justify-between mt-5 lg:mt-10 lg:mb-10 '>
            <div className='text-center mb-5'>
              <h2 className='font-[Poppins] text-[#0CAEE4] text-xs sm:text-base lg:text-2xl'>{t('Remaining')}</h2>
              <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-base lg:text-2xl mt-3 lg:mt-6'>
                10,000 USDT
              </div>
              <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-base lg:text-2xl mt-3 lg:mt-6'>
                10,000 USDT
              </div>
            </div>
            <div className='flex flex-col justify-end mr-3.5 mb-3.5 lg:mr-7'>
              <div>
                <Button variant='myStyleInvest' size='mySizeInvest'>
                  Invest
                </Button>
              </div>
              <div className='mt-1.5 lg:mt-4'>
                <Button variant='myStyleInvest' size='mySizeInvest'>
                  Invest
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-2 mt-6 lg:mt-10'>
          <Card className='w-1/3 flex-grow bg-[#17202A]'>
            <CardHeader>
              <CardTitle className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl'>
                {t('Your Investment')}
              </CardTitle>
            </CardHeader>
            <CardContent className='mb-1 lg:mb-2 -mt-2 xl:text-center'>
              <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-sm lg:text-xl'>
                <span>{t('Classic')}:</span>
                <span className='ml-1.5 sm:ml-3.5'>10000USDT</span>
              </div>
              <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-sm lg:text-xl mt-2 lg:mt-5'>
                <span>{t('Turbo')}:</span>
                <span className='ml-1.5 sm:ml-3.5'>10000USDT</span>
              </div>
              <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-sm lg:text-xl mt-2 lg:mt-5'>
                <span>{t('Expected Returns')}:</span>
                <span className='ml-1.5 sm:ml-3.5'>10000USDT</span>
              </div>
              <div className='font-[Poppins] text-[#FFFFFF] text-xs sm:text-sm lg:text-xl mt-2 lg:mt-5'>
                <span>{t('Total Received')}:</span>
                <span className='ml-1.5 sm:ml-3.5'>10000USDT</span>
              </div>
            </CardContent>
          </Card>
          <Card className='w-1/3 flex-grow bg-[#17202A]'>
            <CardHeader>
              <CardTitle className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl'>
                {t('Your Bonus')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='font-[Poppins] text-[#FFFFFF] text-lg sm:text-xl lg:text-2xl text-center'>
                10,000 USDT
              </div>
              <div className='font-[Poppins] text-[#D2BFBF] text-sm sm:text-base lg:text-2xl text-center mt-1 lg:mt-2'>
                *Available to Withdraw
              </div>
              <div className='text-center mt-9 lg:mt-14'>
                <Button variant='myStyleInvest' size='mySizeInvest'>
                  {t('Withdraw')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='w-full bg-[#17202A] rounded-2xl mt-6 lg:mt-10'>
          <div className='flex justify-around items-center pt-5 lg:pt-10'>
            <div className='font-[Poppins] text-[#0CAEE4] text-base lg:text-2xl'>{t('Your BOND')}</div>
            <div className='font-[Poppins] text-[#FFFFFF] text-base lg:text-2xl'>1000 BOND</div>
            <div>
              <Button variant='myStyleInvest' size='mySizeInvest'>
                {t('Unlock')}
              </Button>
            </div>
          </div>
          <div className='font-[Poppins] text-[#D2BFBF] text-xs lg:text-base text-center'>
            *Amount of BOND currently locked
          </div>
        </div>
      </div>
    </div>
  )
}
