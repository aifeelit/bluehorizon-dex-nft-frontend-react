import React from "react";
import { Box, BoxProps} from "uikit/components/Box";

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box maxWidth="1200px" mx='auto' {...props}>
    {children}
  </Box>
)

export default  Container