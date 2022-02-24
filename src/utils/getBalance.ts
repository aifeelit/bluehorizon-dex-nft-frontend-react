import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { getFsvContract } from 'utils/contractHelpers';
import { simpleRpcProvider } from "utils/provider";
import { useAppDispatch } from "state";
import useRefresh from 'hooks/useRefresh'


export const useEthBalance = (account): { balance: number } => {
  const { fastRefresh } = useRefresh()
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    const fetch = async () => {
      if (account) {
        const data =await simpleRpcProvider.getBalance(account)
        setBalance(Number(ethers.utils.formatEther(data)))
      }
    }
    fetch();
  }, [account, fastRefresh])
  return { balance }
}
