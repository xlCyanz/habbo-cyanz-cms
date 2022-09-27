import React from "react";
import { Avatar, AvatarProps } from "theme-ui";

import { SizeVariant } from "@types";
import { StylesUtils } from "@utils";

export interface IAvatarProps extends AvatarProps {
  src: string;
  size?: SizeVariant;
}

const styleSize = StylesUtils.create<SizeVariant>({
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

const AvatarWrapper = ({ size = "medium", ...props }: IAvatarProps) => {
  return (
    <Avatar variant="avatarBorder" sx={{ ...styleSize[size] }} {...props} />
  );
};

export default AvatarWrapper;
