export interface Network {
  networkId: number
  name: string
  rpc: {
    default: {
      websocket: string[]
      http: string[]
    }
    clio?: {
      websocket: string[]
      http: string[]
    }
  }
  testnet: boolean
}
