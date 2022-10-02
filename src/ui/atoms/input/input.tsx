import React from "react";
import { Flex, Input, InputProps as InputPropsUI } from "theme-ui";

import { styles } from "./input.styles";

export type InputProps = InputPropsUI & {
  value: string;
  placeholder: string;
  renderLeft?: React.ReactElement;
  renderRight?: React.ReactElement;
};

const InputWrapper = ({ renderLeft, renderRight, ...props }: InputProps) => {
  const { value } = props;

  return (
    <Flex
      sx={{
        ...styles.inputBox,
        borderColor: value ? "primary" : "transparent",
      }}
    >
      {renderLeft}
      <Input
        sx={{
          ...styles.input,
          ...(renderLeft && { ml: 1 }),
          ...(renderRight && { mr: 1 }),
        }}
        {...props}
      />
      {renderRight}
    </Flex>
  );
};

export default InputWrapper;
