import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { UnsupportedChainIdError, useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { Card, CardBody, Text, Heading, Input, Flex, Button } from 'uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import CardValue from 'components/CardValue'
import { useFsvBalance, useFsvBNBBalance, useEthBalance, useBNBBalance, useMinAmount, useOwner } from 'state/user/hooks'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getBridgeContract, getFsvContract, getEthFsvAddress, getBscFsvAddress } from '../../../utils/contractHelpers'
import {State} from '../../../state/types';

const StyledCard = styled(Card)`
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
`
const Actions = styled.div`
  margin-top: 24px;
`
const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledInput = styled(Input)`
  background-color: #26241b;
  width: 70%;
  font-size: 30px;
  padding: 0px;
  type: number;
  border: none;
  border-bottom: 1px solid white;
  border-radius: 0px;
  &:focus {
    outline: none;
    box-shadow: none !important;
  }
`
const StyledFlex = styled(Flex)`
  align-items: center;
  gap: 10px;
`

const BridgeCard = ({currentId}) => {
  const { account } = useWeb3React()
  const {currentNetId} = useSelector((state: State) => ({
    currentNetId: state.info.currentNetId,
  }))
  const { chainId, library } = useActiveWeb3React()
  const { balance: fsvBalance } = useFsvBalance(account,'eth')
  const { balance: fsvBNBBalance } = useFsvBNBBalance(account,'bsc')
  const { balance: minAmount } = useMinAmount(currentNetId === 1 ? 'eth' : 'bsc')
  const { balance: owner } = useOwner(currentNetId === 1 ? 'eth' : 'bsc')

  const [amountinETH, setAmountinETH] = useState(0)
  const [amountinBSC, setAmountinBSC] = useState(0)
  const [amountFSV, setAmountFSV] = useState(0)
  const [currentNet, setCurrentNet] = useState('eth')


  useEffect(() => {
    const current = currentNetId === 1 ? 'eth' : 'bsc'
    setCurrentNet(current)
  }, [currentNetId])

  const BridgeContract = getBridgeContract(currentNet, library.getSigner())
  const FSVContract = getFsvContract(currentNet, library.getSigner())

  const handleAmountETH = (e) => {
    setAmountinETH(e.target.value)
    setAmountFSV(e.target.value - minAmount)
  }

  const handleAmountBSC = (e) => {
    setAmountinBSC(e.target.value)
    setAmountFSV(e.target.value - minAmount)
  }

  const swap = async () => {
    try {
      const spender = currentNet === 'eth' ? getEthFsvAddress() : getBscFsvAddress()
      await FSVContract.approve(spender, amountinETH)
      await BridgeContract.startSwap(amountinETH)
      console.info('success')
    } catch (err) {
      console.info(err)
    }
  }

  return (
    <StyledCard>
      <StyledCardBody>
        <Heading scale="lg" mb="24px">
          Bridge
        </Heading>
        <Block>
          <Label style={{ paddingRight: '20px', color: 'rgb(255, 144, 0)' }}>{currentNetId === 1 ? 'Ethereum' : 'Binance Smart Chain'}</Label>
          <StyledFlex>
            <Label>FSV Balance : </Label>
            <CardValue value={currentNetId ===1? fsvBalance : fsvBNBBalance} decimals={0} fontSize="24px" lineHeight="36px" />
          </StyledFlex>
          <br />
          {!account ? (
            <Text color="textDisabled" style={{ lineHeight: '54px' }}>
              Locked
            </Text>
          ) : (
            <>
              {currentNetId === 1 ? (
                <>
                  <StyledInput type="number" value={amountinETH} onChange={handleAmountETH} />
                </>
              ) : (
                <>
                  <StyledInput type="number" value={amountinBSC} onChange={handleAmountBSC} />
                </>
              )}
            </>
          )}
        </Block>
        <br/><br/>
        <Block>
          <Label style={{ paddingRight: '20px', color: 'rgb(255, 144, 0)' }}>{currentNetId === 1 ? 'Binance Smart Chain' : 'Ethereum'}</Label>
          <StyledFlex>
            <Label>FSV Balance : </Label>
            <CardValue value={currentNetId ===1? fsvBNBBalance : fsvBalance} decimals={0} fontSize="24px" lineHeight="36px" />
          </StyledFlex>
          <br />
          {!account ? (
            <Text color="textDisabled" style={{ lineHeight: '54px' }}>
              Locked
            </Text>
          ) : (
            <>
              {currentNetId === 1 ? (
                <>
                  <StyledInput type="number" value={amountFSV} disabled />
                </>
              ) : (
                <>
                  <StyledInput type="number" value={amountFSV} disabled />
                </>
              )}
            </>
          )}
        </Block>
        {account && (
          <Button onClick={() => swap()} disabled style={{border: '1px solid #ff9000'}} >
            Swap
          </Button>
        )}
        <Actions>{!account && <ConnectWalletButton width="100%" />}</Actions>
      </StyledCardBody>
    </StyledCard>
  )
}

export default BridgeCard
