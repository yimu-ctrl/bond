import { FC, ReactNode } from 'react'
import { useTranslations } from 'next-intl'

type Props = {
  data: Array<{ label: string; value: string }>
}

const ReferralRewardsContent: FC<Props> = ({ data }) => {
  const t = useTranslations('StakeBond')
  return (
    <>
      {data.map(item => (
        <div key={item.label} className='mt-8'>
          <div className='font-[Poppins] text-[#0CAEE4] text-base sm:text-xl lg:text-2xl mb-2'>{t(item.label)}</div>
          <div className='font-[Poppins] text-[#FFFFFF] text-base sm:text-xl lg:text-2xl '>10,000 USDT</div>
        </div>
      ))}
    </>
  )
}

ReferralRewardsContent.displayName = 'UserReferralRewards'

export default ReferralRewardsContent
