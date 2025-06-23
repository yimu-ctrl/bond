'use client'
import { FC } from 'react'
import { ETHType, Props } from '@/types'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { useTranslations } from 'next-intl'
import { useAccount, useBalance, useReadContract } from 'wagmi'
import { consts } from '@/types/constants'
import { formatUnits } from 'viem'
import { abiTreasuryContract } from '@/types/abi'

const AssetOverview: FC = () => {
  const t = useTranslations('Dashboard')
  const { address } = useAccount()
  const UserBond = useBalance({
    address: address,
    token: consts.TESTNET.BOND_TOKEN
  })
  const balanceBond = UserBond.data ? Number(formatUnits(UserBond.data.value, consts.TESTNET.BOND_DECIMAL)) : 0

  const useTreasuryBalance = (address: ETHType, decimal: number) => {
    const result = useReadContract({
      address: consts.TESTNET.TREASURY_CONTRACT,
      abi: abiTreasuryContract,
      functionName: 'getAssetBalance',
      args: [address]
    })
    const balance = result.data ? Number(formatUnits(result.data, decimal)) : 0
    return balance
  }
  const BondTreasury = useTreasuryBalance(consts.TESTNET.BOND_TOKEN, consts.TESTNET.BOND_DECIMAL)
  const USDTTreasury = useTreasuryBalance(consts.TESTNET.USDT_MOCK, consts.TESTNET.USDT_DECIMAL)
  const balanceTreasury = BondTreasury * 0.05 + USDTTreasury

  const burnedBalance = useBalance({
    address: consts.TESTNET.DEAD_ADDRESS,
    token: consts.TESTNET.BOND_TOKEN
  })

  const burnedBond =
    burnedBalance.isSuccess && burnedBalance.data ? Number(formatUnits(burnedBalance.data.value, 18)) : 0

  const amounts = [
    { title: 'My Balances', value: balanceBond },
    { title: 'Treasure', value: balanceTreasury },
    { title: 'Burned', value: burnedBond }
  ]
  const renderContent = ({ title, value }: { title: string; value: number }) => {
    return (
      <div
        key={title}
        className='w-full md:min-w-[240px] min-w-[290px] lg:min-w-[290px] flex-grow  md:w-1/4 pb-2 pt-2 sm:pb-3 lg:pb-10'
      >
        <Card className='font-[Poppins] bg-[#17202A] rounded-4xl w-full  sm:pb-3 lg:pb-10'>
          <CardHeader className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#0CAEE4] -mt-2.5 lg:mt-2'>
            <CardTitle>{t(title)}</CardTitle>
          </CardHeader>
          {title === 'Treasure' ? (
            <CardContent className=' lg:mt-5'>
              <div className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#F9FAFB] mt-3 sm:mt-5 md:mt-3 lg:mt-5 '>
                {value.toLocaleString()}USDT
              </div>
              <div className='text-center text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#F9FAFB] '>&nbsp;</div>
            </CardContent>
          ) : (
            <CardContent className='md:mp-2 lg:mt-5'>
              <div className='text-center text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-[#F9FAFB] mb-3 sm:mb-5 md:mb-3 lg:mb-5 '>
                {value.toLocaleString()}BOND
              </div>
              <div className='text-center text-xl sm:text-2xl md:text-xl lg:text-2xl text-[#F9FAFB] '>
                {value === 0 ? `N/A` : `≈$${Math.floor(value / 100).toLocaleString()} USD`}
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    )
  }
  return <div className='flex justify-between flex-wrap w-full gap-4'>{amounts.map(item => renderContent(item))}</div>
}
AssetOverview.displayName = 'AssetOverview'

export default AssetOverview
