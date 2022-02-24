export enum ResponseState {
  ERROR = 'error',
  PENDING = 'pending',
  SUCCESS = 'success'
}
export interface UserState {
  fsvBalance: number
  fsvBNBBalance: number
  ethBalance: number
  bnbBalance: number
  minAmount: number
  owner: string
  swapResult: any
}
