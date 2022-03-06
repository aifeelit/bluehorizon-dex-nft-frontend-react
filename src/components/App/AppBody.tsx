import React from 'react'
import styled from 'styled-components'
import { Card } from 'toolkit/uikit'

export const BodyWrapper = styled(Card)`
  margin-top: 50px;
  border-radius: 16px;
  max-width: 450px;
  padding: 10px;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.input};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}