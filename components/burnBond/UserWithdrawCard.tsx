'use client'
import { FC } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { useTranslations } from 'next-intl'
import { injected, useAccount, useConnect, useWriteContract } from 'wagmi'
import { consts } from '@/types/constants'
import { abiBurnContract } from '@/types/abi'
import { formatUnits } from 'viem'
import { useBurnContractRead } from '@/hooks/useBurnContractRead'

const UserWithdrawCard: FC = () => {
  const t = useTranslations('BurnBond')
  const { writeContractAsync } = useWriteContract()
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()

  const userInvestmentStats = useBurnContractRead('getUserInvestmentStats', address ? [address] : undefined)

  const userInvestmentCount = useBurnContractRead('getUserInvestmentCount', address ? [address] : undefined)

  const handleWithdraw = async () => {
    if (!isConnected) {
      connect({ connector: injected() })
    }
    try {
      if (isConnected && address) {
        for (let i = 0; i <= Number(userInvestmentCount.data); i++) {
          await writeContractAsync({
            address: consts.TESTNET.BURN_CONTRACT,
            abi: abiBurnContract,
            functionName: 'claimReward',
            args: [BigInt(i)]
          })
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('User rejected the request')) {
        alert('The user cancelled the transaction, please try again')
      }
    }
  }
  return (
    <Card className='w-1/3 min-w-[200px] flex-grow bg-[#17202A]'>
      <CardHeader>
        <CardTitle className='font-[Poppins] text-[#0CAEE4] text-base sm:text-lg lg:text-2xl'>
          {t('Your Bonus')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='font-[Poppins] text-[#FFFFFF] text-lg sm:text-xl lg:text-2xl text-center'>
          {address
            ? userInvestmentStats.data
              ? userInvestmentStats.data[4]
                ? `${Number(
                    formatUnits(userInvestmentStats.data[4], consts.TESTNET.USDT_DECIMAL)
                  ).toLocaleString()}USDT`
                : 'isLoading'
              : 'isLoading'
            : 'N/A'}
        </div>
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
