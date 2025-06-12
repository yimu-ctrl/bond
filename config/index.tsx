// config/index.tsx

import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import { cookieStorage, createStorage } from 'wagmi'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, arbitrum]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig
