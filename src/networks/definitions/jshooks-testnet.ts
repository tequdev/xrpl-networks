import type { Network } from '../../types/Network'

export const jshooksTestnet: Network = {
  networkId: 31338,
  name: 'JS Hooks Testnet',
  rpc: {
    default: {
      websocket: ['wss://jshooks.xahau-test.net'],
      http: ['https://jshooks.xahau-test.net'],
    },
  },
  testnet: true,
}
