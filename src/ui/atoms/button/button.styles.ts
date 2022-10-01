import { SizeVariant } from "@types";
import { StylesUtils } from "@utils";

export const styleSize = StylesUtils.create<SizeVariant>({
  small: {
    py: 1,
    fontSize: 1,
  },
  medium: {
    py: 2,
    fontSize: 1,
  },
  large: {
    py: 3,
    fontSize: 2,
  },
});

export const styles = StylesUtils.create({
  default: {
    width: "100%",
    fontFamily: "semiBold",
    borderRadius: 3,
    cursor: "pointer",
  },
});
