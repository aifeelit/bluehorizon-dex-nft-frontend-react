import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})


export type SerializedBigNumber = string

export const BIG_ZERO = new BigNumber(0)
export const BIG_ONE = new BigNumber(1)
export const BIG_NINE = new BigNumber(9)
export const BIG_TEN = new BigNumber(10)

export const ethersToSerializedBigNumber = (value: ethers.BigNumber): SerializedBigNumber =>
  ethersToBigNumber(value).toJSON()

export const ethersToBigNumber = (ethersBn: ethers.BigNumber): BigNumber => new BigNumber(ethersBn.toString())


