import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from "../utils/bigNumber";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const FSV_DECIMAL = 9

export const BASE_SCAN_URL = 'https://etherscan.io/';

export const BASE_NATIVE_CURRENY_NAME = 'ETH';

export const BASE_NATIVE_CURRENY_SYMBOL = 'eth';

export const BASE_NATIVE_CURRENY_DECIMAL = 18;


export const BASE_URL = 'https://farmingservicevault.com/'

export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(FSV_DECIMAL)

export const DEFAULT_GAS_LIMIT = 200000

export const DEFAULT_GAS_PRICE = 5

export const INFO_CLIENT = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2'

export const BLOCKS_CLIENT = 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks'



