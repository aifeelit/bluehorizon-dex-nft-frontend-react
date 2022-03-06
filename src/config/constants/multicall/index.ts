import { ChainId } from 'toolkit/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  // [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  // [ChainId.TESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A',
  [ChainId.MAINNET]: process.env.REACT_APP_MULTICALL,
  [ChainId.TESTNET]: process.env.REACT_APP_MULTICALL,
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
