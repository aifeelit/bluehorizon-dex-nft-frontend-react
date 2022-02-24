import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'
import { UserState } from "./user/types";
import { InfoState } from './info/types'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>

export interface State {
  user: UserState,
  info: InfoState,
}