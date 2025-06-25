'use client'
import { FC } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import ReferralRewardsContent from './ReferralRewardsContent'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { useAccount, useReadContract } from 'wagmi'
import { consts } from '@/types/constants'
import { abiStakingContract } from '@/types/abi'
import { formatUnits } from 'viem'

const TeamReferralRewards: FC = () => {
  const t = useTranslations('StakeBond')
  const { address, isConnected } = useAccount()
  const teamPerformance = useReadContract({
    address: consts.TESTNET.STAKING_CONTRACT,
    abi: abiStakingContract,
    functionName: 'getTeamPerformance',
    args: address ? [address] : undefined
  })
  const totalPerformance = isConnected
    ? teamPerformance.data
      ? `${Number(formatUnits(teamPerformance.data, consts.TESTNET.USDT_DECIMAL)).toLocaleString}USDT`
      : 'isLoading'
    : 'N/A'
  const data = [
    { label: 'Total Performance', value: totalPerformance },
    { label: 'Total Rewards', value: '100 BOND' },
    { label: 'Withdrawn Rewards', value: '100 BOND' },
    { label: 'Current Withdrawable Rewards', value: '100 BOND' }
  ]
  return (
    <Card className='bg-[#17202A] text-center flex-1 min-w-[310px] max-w-[390px] mt-10 mr-5'>
      <CardHeader>
        <CardTitle className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl'>
          {t('Your Team Rewards')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ReferralRewardsContent data={data} />
      </CardContent>
      <CardFooter className='flex justify-center mt-20'>
        <Button
          disabled
          className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-50 rounded-3xl '
        >
          {t('Claim Team Rewards')}
        </Button>
      </CardFooter>
    </Card>
  )
}
TeamReferralRewards.displayName = 'TeamReferralRewards'
export default TeamReferralRewards
