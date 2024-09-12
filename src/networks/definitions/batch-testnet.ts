import type { Network } from '../../types/Network'

export const batchTestnet: Network = {
  networkId: 21336,
  name: 'XRP Ledger Batch Testnet',
  rpc: {
    default: {
      websocket: ['wss://batch.nerdnest.xyz'],
      http: ['https://batch.rpc.nerdnest.xyz'],
    },
  },
  testnet: true,
}
