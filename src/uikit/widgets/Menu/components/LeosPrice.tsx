import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  leosPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const LeosPrice: React.FC<Props> = ({ leosPriceUsd }) => {
  return leosPriceUsd ? (
    <PriceLink
      href={`${window.location.origin}/swap?outputCurrency=${process.env.REACT_APP_LEOSTOKEN}`}
      target="_blank"
    >
      {/* <PancakeRoundIcon width="24px" mr="8px" /> */}
      <img src={`/images/tokens/${process.env.REACT_APP_LEOSTOKEN}.svg`} width="24px" alt='' style={{paddingRight:'5px'}} />
      <Text color="textSubtle" bold>{`$${leosPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(LeosPrice);
