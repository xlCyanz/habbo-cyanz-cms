import React from "react";
import { Button, ButtonProps as ButtonPropsUI } from "theme-ui";

import { SizeVariant } from "@types";

import { styles, styleSize } from "./button.styles";

export type ButtonProps = ButtonPropsUI & {
  size?: SizeVariant;
};

const ButtonWrapper = ({ size = "medium", ...props }: ButtonProps) => {
  return <Button sx={{ ...styles.default, ...styleSize[size] }} {...props} />;
};

export default ButtonWrapper;
