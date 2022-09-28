import React from "react";
import { Box, BoxProps } from "theme-ui";

export type IBoxProps = BoxProps;

const BoxWrapper = (props: IBoxProps) => {
  return <Box {...props} />;
};

export default BoxWrapper;
