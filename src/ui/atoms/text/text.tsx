import React from "react";
import { Text, TextProps as TextPropsUI } from "theme-ui";

export type TextProps = TextPropsUI;

const TextWrapper = (props: TextProps) => {
  return <Text {...props} />;
};

export default TextWrapper;
