'use client'
import { FC } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import ReferralRewardsContent from './ReferralRewardsContent'
import { useTranslations } from 'next-intl'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { useAccount, useReadContract } from 'wagmi'
import { consts } from '@/types/constants'
import { abiStakingContract } from '@/types/abi'
import { formatUnits } from 'viem'

const UserReferralRewards: FC = () => {
  const t = useTranslations('StakeBond')
  const { address, isConnected } = useAccount()
  const UserSummary = useReadContract({
    address: consts.TESTNET.STAKING_CONTRACT,
    abi: abiStakingContract,
    functionName: 'getUserSummary',
    args: address ? [address] : undefined
  })
  const rewardsUSDT = isConnected
    ? UserSummary.data
      ? `${(
          Number(formatUnits(UserSummary.data.claimableRewardUsdt, consts.TESTNET.USDT_DECIMAL)) +
          Number(formatUnits(UserSummary.data.totalRewardsUsdt, consts.TESTNET.USDT_DECIMAL))
        ).toLocaleString()}USDT`
      : 'isLoading'
    : 'N/A'
  const rewardsBOND = isConnected
    ? UserSummary.data
      ? `${(
          Number(formatUnits(UserSummary.data.claimableRewardBond, consts.TESTNET.USDT_DECIMAL)) +
          Number(formatUnits(UserSummary.data.totalRewardsBond, consts.TESTNET.USDT_DECIMAL))
        ).toLocaleString()}USDT`
      : 'isLoading'
    : 'N/A'
  const data = [
    { label: 'Invite Performance', value: '10,000 USDT' },
    { label: 'Total BOND Rewards', value: rewardsBOND },
    { label: 'Total USDT Rewards', value: rewardsUSDT }
  ]
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://app.bsc.bond/r/${address}`)
  }
  return (
    <Card className='bg-[#17202A] text-center mr-5 flex-1 min-w-[310px] max-w-[390px] mt-10 '>
      <CardHeader>
        <CardTitle className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl'>
          {t('Your Referral Rewards')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='font-[Poppins] text-[#0CAEE4] text-xl sm:text-2xl lg:text-3xl'>Role</div>
        <div className='font-[Poppins] text-[#FFFFFF] text-xl sm:text-2xl lg:text-3xl'>Gold</div>
        <ReferralRewardsContent data={data} />
        <div className='font-[Poppins] text-[#0CAEE4] text-base sm:text-xl lg:text-2xl mb-2'>
          {t('Your Referral Link')}
        </div>
        <div className='font-[Poppins] text-[#FFFFFF] text-base break-words'>{`https://app.bsc.bond/r/${address}`}</div>
      </CardContent>
      <CardFooter className='flex justify-center mt-1'>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={handleCopyLink}
              className='bg-[#0CAEE4] font-[Poppins] sm:text-2xl cursor-pointer hover:bg-[#34A5B3] h-10 sm:h-12 sm:w-50 rounded-3xl px-6 mt-8'
            >
              {t('Copy Link')}
            </Button>
          </DialogTrigger>
          <DialogContent className='bg-[#111927]'>
            <DialogTitle className='text-center font-[Poppins] text-[#FEF6F6] text-lg'>Link Copied！</DialogTitle>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

UserReferralRewards.displayName = 'UserReferralRewards'
export default UserReferralRewards
