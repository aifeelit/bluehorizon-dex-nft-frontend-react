import { ethers } from 'ethers'
import { createSlice } from '@reduxjs/toolkit'
import { BSCProvider, simpleRpcProvider } from 'utils/provider'
import { FSV_DECIMAL } from 'config'
import { getBridgeContract, getFsvContract } from '../../utils/contractHelpers'
import { UserState } from './types'
import { AppThunk } from '../types'

// const {chainId} = useActiveWeb3React();

export const fetchFSVBalance =
  (account: string, currentNet: string): AppThunk =>
  async (dispatch) => {
    const FSVContract = getFsvContract(currentNet)
    const data = await FSVContract.balanceOf(account)
    dispatch(getFSVBalance(ethers.utils.formatUnits(data, FSV_DECIMAL)))
  }

export const fetchFSVBNBBalance =
  (account: string, currentNet: string): AppThunk =>
  async (dispatch) => {
    const FSVContract = getFsvContract(currentNet)
    const data = await FSVContract.balanceOf(account)
    dispatch(getFSVBNBBalance(ethers.utils.formatUnits(data, FSV_DECIMAL)))
  }

export const fetchETHBalance =
  (account: string): AppThunk =>
  async (dispatch) => {
    const data = await simpleRpcProvider.getBalance(account)
    dispatch(getETHBalance(ethers.utils.formatEther(data)))
  }

export const fetchBNBBalance =
  (account: string): AppThunk =>
  async (dispatch) => {
    const data = await BSCProvider.getBalance(account)
    dispatch(getBNBBalance(ethers.utils.formatEther(data)))
  }

export const fetchMinAmount =
  (network: string): AppThunk =>
  async (dispatch) => {
    const BridgeContract = getBridgeContract(network)
    const data = await BridgeContract.minAmount()
    
    dispatch(getMinAmount(ethers.utils.formatEther(data)))
  }
  export const fetchOwner =
  (network: string): AppThunk =>
  async (dispatch) => {
    const BridgeContract = getBridgeContract(network)
    const data = await BridgeContract.owner()
    dispatch(getOwner(data))
  }

const initialState: UserState = {
  fsvBalance: 0,
  fsvBNBBalance: 0,
  ethBalance: 0,
  bnbBalance: 0,
  minAmount: 0,
  owner: '',
  swapResult: '',
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getFSVBalance: (state, action) => {
      const balance: number = action.payload
      state.fsvBalance = balance
    },
    getFSVBNBBalance: (state, action) => {
      const balance: number = action.payload
      state.fsvBNBBalance = balance
    },
    getETHBalance: (state, action) => {
      const balance: number = action.payload
      state.ethBalance = balance
    },
    getBNBBalance: (state, action) => {
      const balance: number = action.payload
      state.bnbBalance = balance
    },
    getMinAmount: (state, action) => {
      const balance: number = action.payload
      state.minAmount = balance
    },
    getOwner: (state, action) => {
      const balance: string = action.payload
      state.owner = balance
    },
    getSwapResult: (state, action) => {
      const balance: string = action.payload
      state.swapResult = balance
    },
  },
})

export const { getFSVBalance,getFSVBNBBalance, getETHBalance, getBNBBalance, getMinAmount, getOwner, getSwapResult } = UserSlice.actions

export default UserSlice.reducer
