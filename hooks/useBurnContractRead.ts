import { useReadContract } from 'wagmi'
import { consts } from '@/types/constants'
import { abiBurnContract } from '@/types/abi'
import { ETHType } from '@/types'

export function useBurnContractRead(
  functionName:
    | 'getInvestmentLimits'
    | 'getReturnRates'
    | 'getUserInvestmentStats'
    | 'getUserInvestmentStats'
    | 'getUserInvestmentCount',
  args: [] | [ETHType] | undefined
) {
  const { data } = useReadContract({
    address: consts.TESTNET.BURN_CONTRACT,
    abi: abiBurnContract,
    functionName,
    args
  })
  return { data }
}
