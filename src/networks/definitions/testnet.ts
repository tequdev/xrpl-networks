import type { Network } from '../../types/Network'

export const testnet: Network = {
  networkId: 1,
  name: 'XRP Ledger Testnet',
  rpc: {
    default: {
      websocket: ['wss://s.altnet.rippletest.net:51233', 'wss://testnet.xrpl-labs.com'],
      http: ['https://s.altnet.rippletest.net:51234', 'https://testnet.xrpl-labs.com'],
    },
    clio: {
      websocket: ['wss://s.altnet.rippletest.net:51233'],
      http: ['https://s.altnet.rippletest.net:51234"'],
    },
  },
  testnet: true,
}
