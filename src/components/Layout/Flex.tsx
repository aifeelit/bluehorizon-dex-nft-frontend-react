import styled from "styled-components";

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 280px;
    max-width: 35%;
    margin: 0 8px 32px 8px;
  }
`

export default FlexLayout