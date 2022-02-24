import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { State } from 'state/types'
import useRefresh from 'hooks/useRefresh'

import { fetchFSVBalance, fetchFSVBNBBalance, fetchETHBalance, fetchBNBBalance, fetchMinAmount, fetchOwner } from '.'

export const useFsvBalance = (account, network): { balance: number } => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchFSVBalance(account, network))
    }
  }, [account, dispatch, fastRefresh, network])
  const { balance } = useSelector((state: State) => ({
    balance: state.user.fsvBalance,
  }))
  return { balance }
}

export const useFsvBNBBalance = (account, network): { balance: number } => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchFSVBNBBalance(account, network))
    }
  }, [account, dispatch, fastRefresh, network])
  const { balance } = useSelector((state: State) => ({
    balance: state.user.fsvBNBBalance,
  }))
  return { balance }
}

export const useEthBalance = (account): { balance: number } => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchETHBalance(account))
    }
  }, [account, dispatch, fastRefresh])
  const { balance } = useSelector((state: State) => ({
    balance: state.user.ethBalance,
  }))
  return { balance }
}

export const useBNBBalance = (account): { balance: number } => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchBNBBalance(account))
    }
  }, [account, dispatch, fastRefresh])
  const { balance } = useSelector((state: State) => ({
    balance: state.user.bnbBalance,
  }))
  return { balance }
}

export const useMinAmount = (network: string): { balance: number } => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchMinAmount(network))
  }, [dispatch, fastRefresh, network])
  const { balance } = useSelector((state: State) => ({
    balance: state.user.minAmount,
  }))
  return { balance }
}

export const useOwner = (network: string): { balance: string } => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
      dispatch(fetchOwner(network))
  }, [dispatch, fastRefresh, network])
  const { balance } = useSelector((state: State) => ({
    balance: state.user.owner,
  }))
  return { balance }
}

