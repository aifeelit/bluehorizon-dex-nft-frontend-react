import { ethers } from 'ethers'
import { getETHUrl, getBSCUrl } from "./getRpcUrl";

const RPC_URL = getETHUrl()
const BSC_URL = getBSCUrl()
// const {chainId} = signer.getChainId();
// const {chainId} = providers.getNetwork().chainId;

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

export const BSCProvider = new ethers.providers.JsonRpcProvider(BSC_URL)

export default null
