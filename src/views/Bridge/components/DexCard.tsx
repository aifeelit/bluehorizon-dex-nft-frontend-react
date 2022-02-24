import React from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Card, CardBody, Text, Heading, CopyToClipboard, Input } from 'uikit'
import {useEthBalance} from 'utils/getBalance'
import CardValue from 'components/CardValue'


const StyledCard = styled(Card)`
  min-height: 200px;
`

const Block = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const BlockWrapper = styled.div`
  margin-top: 10px;
  padding-left: 20px;
`
const AmountInput = styled(Input)`
  margin-top: 10px;
  padding-left: 20px;
  height: 100px;
  width: 30%;
  font-size: 40px; 
`
const DexCard = () => {
  return (
    <StyledCard>
      <StyledCardBody>
        <AmountInput/>
        
      </StyledCardBody>
    </StyledCard>
  )
}

export default DexCard