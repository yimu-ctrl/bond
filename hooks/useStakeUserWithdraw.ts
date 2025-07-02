import { abiStakingContract } from '@/types/abi'
import { consts } from '@/types/constants'
import { useEffect } from 'react'
import {
  injected,
  useAccount,
  useConnect,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract
} from 'wagmi'

export function useStakeUserWithdraw() {
  const { data: hash, writeContractAsync } = useWriteContract()
  const { isError, isSuccess } = useWaitForTransactionReceipt({
    hash
  })
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const userStakeCount = useReadContract({
    address: consts.TESTNET.STAKING_CONTRACT,
    abi: abiStakingContract,
    functionName: 'getUserStakeCount',
    args: address ? [address] : undefined
  })
  const handleWithdraw = async (functionName: 'claimReward' | 'withdrawStake') => {
    if (!isConnected) {
      connect({ connector: injected() })
    }
    try {
      if (isConnected && address) {
        for (let i = 0; i <= Number(userStakeCount.data); i++) {
          await writeContractAsync({
            address: consts.TESTNET.STAKING_CONTRACT,
            abi: abiStakingContract,
            functionName,
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
  useEffect(() => {
    if (isSuccess) {
      alert('Transaction succeeded!')
    } else if (isError) {
      alert('Transaction failed!')
    }
  }, [isSuccess, isError])

  return { handleWithdraw }
}
