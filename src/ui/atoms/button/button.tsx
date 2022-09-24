import { SizeVariant } from "@types";
import { Button, ButtonProps, ThemeUIStyleObject } from "theme-ui";

export interface IButtonProps extends ButtonProps {
  size?: SizeVariant;
}

const styleSize: { [key in SizeVariant]: ThemeUIStyleObject } = {
  small: {
    py: 1,
  },
  medium: {
    py: 2,
  },
  large: {
    py: 3,
  },
};

const styleDefault: ThemeUIStyleObject = {
  width: "100%",
  fontFamily: "semiBold",
  borderRadius: 3,
  cursor: "pointer",
};

const ButtonWrapper = ({ size = "medium", ...props }: IButtonProps) => {
  return <Button sx={{ ...styleDefault, ...styleSize[size] }} {...props} />;
};

export default ButtonWrapper;
