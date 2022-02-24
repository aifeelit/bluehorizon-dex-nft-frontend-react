import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import { useDispatch } from 'react-redux'
import userReducer from './user'
import infoReducer from './info'

const PERSISTED_KEYS: string[] = ['user']

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    user: userReducer,
    info: infoReducer
  },
  middleware: [...getDefaultMiddleware({thunk:true}), save({ states: PERSISTED_KEYS })],
  preloadedState: load({states: PERSISTED_KEYS})
})

export type AppDispatch = typeof  store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()

export default store