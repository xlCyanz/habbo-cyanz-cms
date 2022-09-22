import { Button, ButtonProps, ThemeUIStyleObject } from "theme-ui";

export interface IButtonProps extends ButtonProps {
  size?: number;
}

const styleDefault: ThemeUIStyleObject = {
  width: "100%",
  py: 2,
  fontFamily: "semiBold",
  borderRadius: 2,
  cursor: "pointer",
};

const ButtonWrapper = (props: IButtonProps) => {
  return <Button sx={styleDefault} {...props} />;
};

export default ButtonWrapper;
