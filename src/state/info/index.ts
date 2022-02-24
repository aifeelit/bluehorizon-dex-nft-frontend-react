import { createSlice } from "@reduxjs/toolkit";
import { InfoState } from "./types";




const initialState: InfoState = {
  fsvPrice: 0,
  ethPrice: 0,
  bnbPrice: 0,
  currentNetId: 1,
}

export const InfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getFSVPrice: (state, action) => {
      const balance: number = action.payload
      state.fsvPrice = balance
    },
    getETHPrice: (state, action) => {
      const balance: number = action.payload
      state.ethPrice = balance
    },
    getBNBPrice: (state, action) => {
      const balance: number = action.payload
      state.bnbPrice = balance
    },
    setCurrentNetId: (state, action) => {
      const currentNetId: number = action.payload
      state.currentNetId = currentNetId
    },
    getCurrentNetId: (state, action) => {
      const currentNetId: number = action.payload
      state.currentNetId = currentNetId
    },
  }
})

export const {
  getFSVPrice,
  getETHPrice,
  getBNBPrice,
  getCurrentNetId,
  setCurrentNetId
} = InfoSlice.actions

export default InfoSlice.reducer