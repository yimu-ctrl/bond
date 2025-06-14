import { FC } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import RewardsCardContent from './RewardsCardContent'

const InviteRewardsCard: FC = () => {
  return (
    <Card className='bg-[#17202A] rounded-4xl mt-6 lg:mt-12 '>
      <CardHeader>
        <CardTitle className='text-center text-3xl text-[#F9FBFA] pt-5 lg:pt-10 lg:text-5xl'>
          Your Node Invite Rewards
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RewardsCardContent />
        <div className='flex justify-center font-[Poppins] text-[#E1D1D1] text-base lg:text-xl mt-5 sm:mt-10 md:mt-5 lg:mt-10 pb-2 sm:pb-8 md:pb-2 lg:pb-8'>
          *All referral rewards are automatically sent to your wallet!
        </div>
      </CardContent>
    </Card>
  )
}

InviteRewardsCard.displayName = 'InviteRewardsCard'

export default InviteRewardsCard
