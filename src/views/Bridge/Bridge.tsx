import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button } from 'uikit'
import { Flex } from 'uikit/components/Box'
import Page from 'components/Layout/Page'
import DexCard from './components/DexCard'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 6;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 12;
    }
  }
`

const Bridge: React.FC = () => {
  return (
    <>
      <Page>
        <Hero>
          <Heading as="h1" scale="xl" mb="24px" color="text">
            FSV Bridge
          </Heading>
        </Hero>
        <Cards>
          <DexCard />
        </Cards>
      </Page>
    </>
  )
}

export default Bridge
