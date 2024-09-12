import type { Network } from '../../types/Network'

export const mainnet: Network = {
  networkId: 0,
  name: 'XRP Ledger',
  rpc: {
    default: {
      websocket: ['wss://xrplcluster.com', 'wss://s1.ripple.com', 'wss://s2.ripple.com'],
      http: ['https://xrplcluster.com', 'https://s1.ripple.com:51234', 'https://s2.ripple.com:51234'],
    },
    clio: {
      websocket: ['wss://s1.ripple.com', 'wss://s2.ripple.com'],
      http: ['https://s1.ripple.com:51234', 'https://s2.ripple.com:51234'],
    },
  },
  testnet: false,
}
