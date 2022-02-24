import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import { Card, CardBody, Text, Heading, CopyToClipboard } from 'uikit'
import contracts from 'config/contracts'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import {State} from '../../../state/types';

const StyledCard = styled(Card)`
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
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

const Tokenomics = ({currentId}) => {
  const [holders, setHolders] = useState(0)
  const { chainId } = useActiveWeb3React()
  const {currentNetId} = useSelector((state: State) => ({
    currentNetId: state.info.currentNetId,
  }))

  useEffect(() => {
    axios
      .get(`https://api.ethplorer.io/getTokenInfo/0x643239d5d7f05ed6d268c371abf5ef694bc64e5f?apiKey=freekey`)
      .then((res) => {
        console.info('resether',res);
        if (res.data && res.data.holdersCount) {
          setHolders(res.data.holdersCount)
        }
      })
      .catch((err) => {
        console.error('axios fetch error:', err.data)
      })

    axios
      .get(`https://api.covalenthq.com/v1/56/tokens/0xaB8e4649F746dD76F53ee6687072CE10EfdFd427/token_holders/?key=ckey_docs`)
      .then((res) => {
        console.info('res', res);
        if (res.data && res.data.data.items) {
          setHolders(res.data.data.items.length)
        }
      })
      .catch((err) => {
        console.error('axios fetch error:', err.data)
      })


  }, [])
  return (
    <StyledCard>
      <StyledCardBody>
        <Heading scale="lg" mb="24px">
          $FSV DATA
        </Heading>
        <Block>
          <Label>Token Ticker</Label>
          <Text fontSize="18px">FSV</Text>
        </Block>
        <Block>
          <Label>Token Type</Label>
          <Text fontSize="18px">{currentNetId===1?"ERC-20":"BEP-20"} Reflection Token</Text>
        </Block>
        <Block>
          <Label>Buy/Sell Tax</Label>
          <Text fontSize="18px">10%</Text>
        </Block>
        <Block>
          <Label>Total Supply</Label>
          <Text fontSize="18px">1,000,000,000</Text>
        </Block>
        <Block>
          <Label>Holders</Label>
          <Text fontSize="18px">{holders}</Text>
        </Block>
        <Block>
          <Label>Contract</Label>
          <div style={{ display: 'flex' }}>
            {currentNetId === 1 ? (
              <>
                <Text fontSize="18px">0x643239d.....94bc64E5f</Text>
                <CopyToClipboard toCopy="0x643239d5d7F05eD6D268c371aBF5eF694bc64E5f" />
              </>
            ) : (
              <>
                <Text fontSize="18px">0xaB8e464.....0EfdFd427</Text>
                <CopyToClipboard toCopy="0xaB8e4649F746dD76F53ee6687072CE10EfdFd427" />
              </>
            )}
          </div>
        </Block>
      </StyledCardBody>
    </StyledCard>
  )
}

export default Tokenomics
