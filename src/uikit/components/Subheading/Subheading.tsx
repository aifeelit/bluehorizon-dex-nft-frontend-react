import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, SubheadingProps } from "./types";

const style = {
  [scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [scales.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
  },
  [scales.XL]: {
    fontSize: "32px",
    fontSizeLg: "40px",
  },
  [scales.XXL]: {
    fontSize: "48px",
    fontSizeLg: "64px",
  },
};

const Subheading = styled(Text).attrs({ bold: true })<SubheadingProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  font-weight: 200;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
  }
`;

Subheading.defaultProps = {
  as: tags.H2,
  color: 'title'
};

export default Subheading;
