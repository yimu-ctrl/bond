import LangSwitch from '@/components/LangSwitch'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Dashboard')
  return (
    <div className='pl-0 pr-0 pt-0 sm:pl-10 sm:pr-8 sm:pt-8 w-full'>
      <div className='flex flex-wrap-reverse justify-between content-end h-15 mb-10 sm:mb-15'>
        <div className='ml-3'>
          <h2 className='font-[Poppins] text-base sm:text-2xl text-[#F9FAFB] mb-1 sm:mb-3'>Welcome back</h2>
          <div className='font-[Poppins] text-xs sm:text-base text-[#9DA4AE]'>
            Innovate, Build, and Scale in the Web3 Era.
          </div>
        </div>
        <div className='flex pr-4'>
          <div className='pr-2'>
            <LangSwitch />
          </div>
          <div>
            <appkit-button size='sm' balance='hide'></appkit-button>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-between flex-wrap w-full gap-4'>
          <Card className='font-[Poppins] bg-[#17202A] rounded-4xl w-full md:min-w-[240px] min-w-[290px] lg:min-w-[290px] flex-grow  md:w-1/4 pb-2 pt-2 sm:pb-3 lg:pb-10'>
            <CardHeader className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#0CAEE4] lg:mt-6'>
              <CardTitle>{t('My Balances')}</CardTitle>
            </CardHeader>
            <CardContent className='md:mp-2 lg:mt-5'>
              <div className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#F9FAFB] mb-3 sm:mb-5 md:mb-3 lg:mb-5 '>
                1,000,000BOND
              </div>
              <div className='text-center text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#F9FAFB] '>≈$10,000 USD</div>
            </CardContent>
          </Card>
          <Card className='font-[Poppins] bg-[#17202A] rounded-4xl w-full md:min-w-[240px] min-w-[290px] lg:min-w-[290px] flex-grow  md:w-1/4 pb-2 pt-2 sm:pb-3 lg:pb-10'>
            <CardHeader className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#0CAEE4] lg:mt-6'>
              <CardTitle>{t('My Balances')}</CardTitle>
            </CardHeader>
            <CardContent className='md:mp-2 lg:mt-5'>
              <div className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#F9FAFB] mb-3 sm:mb-5 md:mb-3 lg:mb-5 '>
                1,000,000BOND
              </div>
              <div className='text-center text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#F9FAFB] '>≈$10,000 USD</div>
            </CardContent>
          </Card>
          <Card className='font-[Poppins] bg-[#17202A] rounded-4xl w-full md:min-w-[240px] min-w-[290px] lg:min-w-[290px] flex-grow  md:w-1/4 pb-2 pt-2 sm:pb-3 lg:pb-10'>
            <CardHeader className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#0CAEE4] lg:mt-6'>
              <CardTitle>{t('My Balances')}</CardTitle>
            </CardHeader>
            <CardContent className='md:mp-2 lg:mt-5'>
              <div className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#F9FAFB] mb-3 sm:mb-5 md:mb-3 lg:mb-5 '>
                1,000,000BOND
              </div>
              <div className='text-center text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#F9FAFB] '>≈$10,000 USD</div>
            </CardContent>
          </Card>
        </div>
        <Card className='bg-[#17202A] rounded-4xl mt-6 sm:mt-12 md:mt-6 lg:mt-12 '>
          <CardHeader>
            <CardTitle className='text-center text-3xl text-[#F9FBFA] pt-5 sm:pt-10 md:pt-5 lg:pt-10  lg:text-5xl'>
              {t('Genesis Node')}
            </CardTitle>
            <div className='flex justify-center mt-3  lg:mt-6'>
              <Progress value={10} className='w-[50%]'></Progress>
            </div>
          </CardHeader>
          <CardContent className='flex justify-between flex-wrap gap-2 mt-2 lg:mt-8'>
            <div className='w-full text-center flex-grow sm:w-1/4'>
              <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl  lg:text-4xl'>{t('Amount')}</h2>
              <div className='font-[Poppins] text-[#F9FAFB] text-2xl  lg:text-4xl mt-2'>200 USDT</div>
            </div>
            <div className='w-full text-center flex-grow sm:w-1/4'>
              <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl  lg:text-4xl'>{t('You will get')}</h2>
              <div className='font-[Poppins] text-[#F9FAFB] text-2xl  lg:text-4xl mt-2'>5000 BOND & 2 Classic NFT</div>
            </div>
            <div className='w-full text-center flex-grow sm:w-1/4'>
              <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl  lg:text-4xl'>{t('Nodes')}</h2>
              <div className='font-[Poppins] text-[#F9FAFB] text-2xl  lg:text-4xl mt-2'>5000</div>
            </div>
          </CardContent>
          <div className='flex justify-center mt-5 sm:mt-10 md:mt-5 lg:mt-10 pb-5 sm:pb-10 md:pb-5 lg:pb-10'>
            <Button variant='myStyle' size='mySizeLg'>
              {t('Join Now')}
            </Button>
          </div>
        </Card>
        <Card className='bg-[#17202A] rounded-4xl mt-6  lg:mt-12'>
          <CardHeader className='pt-5 sm:pt-10 md:pt-5 lg:pt-10'>
            <CardTitle className='text-center text-3xl text-[#F9FBFA] lg:text-5xl'>{t('Node Mining')}</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between flex-wrap mt-2 lg:mt-8'>
            <div className='w-full text-center flex-grow mt-2 sm:w-1/4'>
              <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl lg:text-4xl'>{t('Power')}</h2>
              <div>
                <div className='font-[Poppins] text-[#F9FAFB] text-2xl lg:text-4xl mt-3 lg:mt-6'>300 BOND/Day</div>
                <div className='font-[Poppins] text-[#E1D1D1] text-xl lg:text-2xl mt-2 lg:mt-4 '>≈ $12 USD/Day</div>
              </div>
            </div>
            <div className='w-full text-center flex-grow mt-2 sm:w-1/4'>
              <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl lg:text-4xl'>{t('You rewards')}</h2>
              <div>
                <div className='font-[Poppins] text-[#F9FAFB] text-2xl lg:text-4xl mt-3 sm:mt-6 md:mt-3 lg:mt-6'>
                  1000 BOND
                </div>
                <div className='font-[Poppins] text-[#E1D1D1] text-xl lg:text-2xl mt-2 lg:mt-4 '>≈ $40 USD</div>
              </div>
            </div>
            <div className='flex flex-col justify-center w-full text-center mt-5 flex-grow sm:w-1/4'>
              <div>
                <Button size='mySizeSm' variant='myStyle'>
                  <div className='font-[Poppins] text-xl'>{t('Collect')}</div>
                </Button>
              </div>
            </div>
          </CardContent>
          <div className='text-center font-[Poppins] text-[#E1D1D1] text-base lg:text-xl mt-5 sm:mt-10 pb-2 sm:pb-8'>
            {t('Mining rewards are released every 24 hours and the activity ends 12 hours before the token is listed')}
          </div>
        </Card>
        <Card className='bg-[#17202A] rounded-4xl mt-6 lg:mt-12 '>
          <CardHeader>
            <CardTitle className='text-center text-3xl text-[#F9FBFA] pt-5 lg:pt-10 lg:text-5xl'>
              {t('Your Node Invite Rewards')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex justify-between flex-wrap gap-2 mt-2 lg:mt-8'>
              <div className='w-full text-center flex-grow sm:w-1/3'>
                <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl  lg:text-4xl'>{t('Total Invite Amount')}</h2>
                <div>
                  <div className='font-[Poppins] text-[#F9FAFB] text-2xl s lg:text-4xl mt-3 sm:mt-6 md:mt-3 lg:mt-6'>
                    10,000 USDT
                  </div>
                </div>
              </div>
              <div className=' w-full text-center flex-grow sm:w-1/3'>
                <h2 className='text-[#0CAEE4] font-[Poppins] text-2xl  lg:text-4xl'>{t('Your Rewards')}</h2>
                <div>
                  <div className='font-[Poppins] text-[#F9FAFB] text-2xl  lg:text-4xl mt-3 sm:mt-6 md:mt-3 lg:mt-6'>
                    2000 USDT
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center flex-wrap gap-2'>
              <div className='text-center md:min-w-[240px] min-w-[290px] flex-grow lg:w-1/3 font-[Poppins] text-[#E1D1D1] text-sm lg:text-2xl mt-3 sm:mt-6 md:mt-3 lg:mt-6'>
                {t('Your Referral Link')}:https://app.bsc.bond/r/xxxxxxxxxxxxxxxxxxx
              </div>
              <div className='text-center md:min-w-[240px] min-w-[290px] flex-grow lg:w-1/3 font-[Poppins] text-[#F9FAFB] text-2xl sm:text-4xl mt-3 sm:mt-6'>
                <div>
                  <Button size='mySizeSm' variant='myStyle'>
                    <div className='text-base'>{t('Copy')}</div>
                  </Button>
                </div>
              </div>
            </div>
            <div className='flex justify-center font-[Poppins] text-[#E1D1D1] text-base lg:text-xl mt-5 sm:mt-10 md:mt-5 lg:mt-10 pb-2 sm:pb-8 md:pb-2 lg:pb-8'>
              {t('*All referral rewards are automatically sent to your wallet!')}
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <div className='text-center text-3xl text-[#F9FBFA]  lg:text-5xl mt-6 sm:mt-12 md:mt-6 lg:mt-12'>
          Protocol Overview
        </div>
        <div className='flex justify-center mt-6'>
          <span className='font-[Poppins] text-[#0CAEE4] text-2xl lg:text-3xl'>Coming Soon</span>
          <img src='/coming.svg' alt='coming' />
        </div>
      </div>
    </div>
  )
}
