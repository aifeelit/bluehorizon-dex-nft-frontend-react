import sample from 'lodash/sample'

export const nodes = [process.env.REACT_APP_NODE]

export const BSCnodes = [process.env.REACT_APP_BSCNODE]

export const getETHUrl = () => {
  return sample(nodes)
}
export const getBSCUrl = () => {
  return sample(BSCnodes)
}

