import React from "react";
import styled from "styled-components";
import { Box } from "uikit";
import Container from "components/Layout/Container";

const Outer = styled(Box)<{background?: string}>`
  background: ${({ theme, background }) => background || theme.colors.gradients.cardHeader};
`

const Inner = styled(Container)`
`
 
const PageHeader: React.FC<{background?: string}> = ({background, children, ...props}) => (
  <Outer background={background} {...props}>
    <Inner>
      {children}
    </Inner>
  </Outer>
)

export default PageHeader