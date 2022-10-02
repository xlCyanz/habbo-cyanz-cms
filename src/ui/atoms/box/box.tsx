import React from "react";
import { Box, BoxProps as BoxPropsUI } from "theme-ui";

export type BoxProps = BoxPropsUI;

const BoxWrapper = (props: BoxProps) => {
  return <Box {...props} />;
};

export default BoxWrapper;
