import { SizeVariant } from "@types";
import { StylesUtils } from "@utils";

export const stylesSize = StylesUtils.create<SizeVariant>({
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
