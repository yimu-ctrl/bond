'use client'

import { abiBurnContract } from '@/types/abi'
import { consts } from '@/types/constants'
import { useEffect } from 'react'
import { erc20Abi, parseUnits } from 'viem'
import { injected, useAccount, useConnect, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'

export function useBurnInvest() {
  const { data: hash, writeContractAsync } = useWriteContract()
  const { isError, isSuccess } = useWaitForTransactionReceipt({
    hash
  })
  const { isConnected } = useAccount()
  const { connect } = useConnect()

  const handleBurn = async (functionName: 'normalBurn' | 'turboBurn') => {
    if (!isConnected) {
      connect({ connector: injected() })
    }
    const amount =
      functionName === 'normalBurn'
        ? parseUnits('100', consts.TESTNET.USDT_DECIMAL)
        : parseUnits('200', consts.TESTNET.USDT_DECIMAL)
    await writeContractAsync({
      address: consts.TESTNET.USDT_MOCK,
      abi: erc20Abi,
      functionName: 'approve',
      args: [consts.TESTNET.BURN_CONTRACT, amount]
    })
    try {
      await writeContractAsync({
        address: consts.TESTNET.BURN_CONTRACT,
        abi: abiBurnContract,
        functionName,
        args: []
      })
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
  return { handleBurn }
}
