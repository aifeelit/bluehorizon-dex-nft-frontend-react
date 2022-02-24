import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from 'uikit'
import Page from 'components/Layout/Page'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  return (
    <Page>
      <StyledNotFound>
        <Heading scale="xxl" mb="20px">Oops.. 404 error Page not found</Heading>
        {/* <Heading scale="xxl">404</Heading>
        <Text mb="16px">{t('Oops, page not found.')}</Text> */}
        <Button as="a" href="/" scale="sm">
          Back Home
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
