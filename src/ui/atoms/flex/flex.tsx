import React from "react";
import { Flex, FlexProps as FlexPropsUI } from "theme-ui";

export type FlexProps = FlexPropsUI;

const FlexWrapper = (props: FlexProps) => {
  return <Flex {...props} />;
};

export default FlexWrapper;
