import { useMemo } from 'react'
import { ethers } from 'ethers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import addresses from 'config/contracts'
import fsvAbi from 'config/abis/fsvToken.json'
import bridgeAbi from 'config/abis/bridge.json'
import { simpleRpcProvider, BSCProvider } from './provider'

export const getEthFsvAddress = () => {
  return addresses.fsvETH
}
export const getBscFsvAddress = () => {
  return addresses.fsvBNB
}
export const getbridgeETHAddress = () => {
  return addresses.bridgeETH
}
export const getbridgeBNBAddress = () => {
  return addresses.bridgeBNB
}

const getContract = (
  abi: any,
  address: string,
  network: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  let signerOrProvider
  if (signer) signerOrProvider = signer
  if(!signer) {
    if (network === 'eth') signerOrProvider = simpleRpcProvider
    else signerOrProvider = BSCProvider
  }
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getFsvContract = (network = 'eth', signer?: ethers.Signer | ethers.providers.Provider) => {
  const FSVAddress = network === 'eth' ? getEthFsvAddress() : getBscFsvAddress()
  return getContract(fsvAbi, FSVAddress, network, signer)
}

export const getBridgeContract = (network = 'eth', signer?: ethers.Signer | ethers.providers.Provider) => {
  const bridgeAddress = network === 'eth' ? getbridgeETHAddress() : getbridgeBNBAddress()
  return getContract(bridgeAbi, bridgeAddress, network, signer)
}

export const useLeosContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getFsvContract('eth', library.getSigner()), [library])
}
