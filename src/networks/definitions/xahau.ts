import type { Network } from '../../types/Network'

export const xahau: Network = {
  networkId: 21337,
  name: 'Xahau Network',
  rpc: {
    default: {
      websocket: ['wss://xahau.org'],
      http: ['https://xahau.org'],
    },
  },
  testnet: false,
}
