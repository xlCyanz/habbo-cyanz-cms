import { ReactElement } from "react";
import { Flex, Input, InputProps, ThemeUIStyleObject } from "theme-ui";

export interface IInputProps extends InputProps {
  value: string;
  placeholder: string;
  renderLeft?: ReactElement;
  renderRight?: ReactElement;
}

const styles: { [key: string]: ThemeUIStyleObject } = {
  inputBox: {
    borderRadius: 3,
    px: 2,
    color: "inputText",
    backgroundColor: "white",
    boxShadow: "none",
    alignItems: "center",
  },
  inputBoxBorderPrimary: {
    borderWidth: 1,
    borderColor: "primary",
    borderStyle: "solid",
  },
  input: {
    border: "none",
    borderRadius: 0,
    outline: 0,
    fontFamily: "medium",
    mx: 2,
  },
};

const InputWrapper = ({ renderLeft, renderRight, ...props }: IInputProps) => {
  const { value } = props;

  return (
    <Flex
      sx={{
        ...styles.inputBox,
        ...(value && styles.inputBoxBorderPrimary),
      }}
    >
      {renderLeft}
      <Input sx={styles.input} {...props} />
      {renderRight}
    </Flex>
  );
};

export default InputWrapper;
