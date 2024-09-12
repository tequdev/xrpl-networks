import type { Network } from '../../types/Network'

export const devnet: Network = {
  networkId: 2,
  name: 'XRP Ledger Devnet',
  rpc: {
    default: {
      websocket: ['wss://s.devnet.rippletest.net:51233'],
      http: ['https://s.devnet.rippletest.net:51234'],
    },
    clio: {
      websocket: ['wss://s.devnet.rippletest.net:51233'],
      http: ['https://s.devnet.rippletest.net:51234'],
    },
  },
  testnet: true,
}
