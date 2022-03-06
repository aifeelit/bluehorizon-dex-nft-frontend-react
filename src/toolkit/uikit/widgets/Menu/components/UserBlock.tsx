import React from 'react'
import block from 'state/block'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'
import { useWalletModal } from '../../WalletModal'
import { Login } from '../../WalletModal/types'

interface Props {
  account?: string
  login: Login
  logout: () => void
  custom?: boolean
  bottomBlock? : boolean
}


const Custom = styled.div<{bottomBlock: boolean}>`
  margin-top:  ${({ bottomBlock }) => bottomBlock?"20px":"inherit"};
  button {
    width: ${({ bottomBlock }) => bottomBlock?"100%":"inherit"}
  }
`

const UserBlock: React.FC<Props> = ({ account, login, logout, bottomBlock=false }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  return (
    <Custom bottomBlock={bottomBlock}>
      {account ? (
        <Button
          scale="sm"
          variant="text"
          onClick={() => {
            onPresentAccountModal()
          }}
          style={{ padding:10 }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal()
          }}
          variant="text"
          style={{padding: 10}}
        >
          Connect
        </Button>
      )}
    </Custom>
  )
}

export default React.memo(
  UserBlock,
  (prevProps, nextProps) =>
    prevProps.account === nextProps.account &&
    prevProps.login === nextProps.login &&
    prevProps.logout === nextProps.logout,
)
