import { SizeVariant } from "@types";
import { StylesUtils } from "@utils";

export const styleSize = StylesUtils.create<SizeVariant>({
  small: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 72,
    height: 72,
  },
  large: {
    width: 96,
    height: 96,
  },
});
