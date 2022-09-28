import React from "react";
import { Text, TextProps } from "theme-ui";

export type ITextProps = TextProps;

const TextWrapper = (props: ITextProps) => {
  return <Text {...props} />;
};

export default TextWrapper;
