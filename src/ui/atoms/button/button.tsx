import { Button, ButtonProps } from "theme-ui";

import { SizeVariant } from "@types";
import { StylesUtils } from "@utils";

export interface IButtonProps extends ButtonProps {
  size?: SizeVariant;
}

const styleSize = StylesUtils.create<SizeVariant>({
  small: {
    py: 1,
  },
  medium: {
    py: 2,
  },
  large: {
    py: 3,
  },
});

const styles = StylesUtils.create({
  default: {
    width: "100%",
    fontFamily: "semiBold",
    borderRadius: 3,
    cursor: "pointer",
  },
});

const ButtonWrapper = ({ size = "medium", ...props }: IButtonProps) => {
  return <Button sx={{ ...styles.default, ...styleSize[size] }} {...props} />;
};

export default ButtonWrapper;
