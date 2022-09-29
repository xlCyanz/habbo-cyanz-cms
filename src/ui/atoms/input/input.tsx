import React, { ReactElement } from "react";
import { Flex, Input, InputProps } from "theme-ui";

import { styles } from "./input.styles";

export interface IInputProps extends InputProps {
  value: string;
  placeholder: string;
  renderLeft?: ReactElement;
  renderRight?: ReactElement;
}

const InputWrapper = ({ renderLeft, renderRight, ...props }: IInputProps) => {
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
