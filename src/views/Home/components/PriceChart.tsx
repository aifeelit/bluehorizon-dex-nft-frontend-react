import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Duration, format, fromUnixTime } from 'date-fns'
import { Card, CardBody, Text, Box, Heading, Flex, Skeleton } from 'uikit'
// import { useTokenPriceData } from 'hooks/useInfo'
import contracts from 'config/contracts'
// import { formatAmount } from 'utils/formatInforNumbers'
// import CandleChart from './CandelChart'

const StyledCard = styled(Card)`
  min-height: 300px;
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
  // height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

const DEFAULT_TIME_WINDOW: Duration = { weeks: 1 }
const ONE_HOUR_SECONDS = 3600


const PriceChart = () => {
  const [hoverValue, setHoverValue] = useState<number | undefined>()
  const [hoverDate, setHoverDate] = useState<string | undefined>()

  const address: string = contracts.fsvETH; // Replace it with FSV token address
  // const priceData = useTokenPriceData(address.toLowerCase(), ONE_HOUR_SECONDS, DEFAULT_TIME_WINDOW)

  const currentDate = format(new Date(), 'MMM d, yyyy')

  // const getLatestValueDisplay = () => {
    // let valueToDisplay = null
    // if (priceData) valueToDisplay = formatAmount(priceData[priceData.length - 1].open)
    // if (hoverValue) {
    //   valueToDisplay = formatAmount(hoverValue)
    // }

    // return valueToDisplay ? (
      // <Text fontSize="24px" bold>
        // {/* ${valueToDisplay} */}
  //     {/* </Text>
  //   ) : (
  //     <Skeleton height="36px" width="128px" />
  //   )
  // } */}

  return (
    <StyledCard>
      <StyledCardBody>
        <div>
          <Heading scale='lg' mb='4px'>Price Chart</Heading>
          <Label>SMN/USD</Label>
        </div>
        <Flex flexDirection="column" px="24px">
          {/* {getLatestValueDisplay()} */}
          $75.03
          <Text small color="textSubtle">
            {hoverDate || currentDate}
          </Text>
        </Flex>
      </StyledCardBody>
      {/* <Box px="24px" height='250px'>
        <CandleChart data={priceData} setValue={setHoverValue} setLabel={setHoverDate} />
      </Box> */}
    </StyledCard>
  )
}

export default PriceChart