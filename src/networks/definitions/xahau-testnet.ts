import type { Network } from '../../types/Network'

export const xahauTestnet: Network = {
  networkId: 21338,
  name: 'Xahau Network Testnet',
  rpc: {
    default: {
      websocket: ['wss://xahau-test.net'],
      http: ['https://xahau-test.net'],
    },
  },
  testnet: true,
}
