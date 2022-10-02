import React from "react";
import { Button, ButtonProps as ButtonPropsUI } from "theme-ui";

import { SizeVariant } from "@types";
import { StylesUtils } from "@utils";

import { styles, styleSize } from "./button.styles";

export type ButtonProps = ButtonPropsUI & {
  size?: SizeVariant;
};

const ButtonWrapper = ({ size = "medium", sx, ...props }: ButtonProps) => {
  return (
    <Button
      sx={StylesUtils.compose(sx, { ...styles.default, ...styleSize[size] })}
      {...props}
    />
  );
};

export default ButtonWrapper;
