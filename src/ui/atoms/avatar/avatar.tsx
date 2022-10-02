import React from "react";
import { Avatar, AvatarProps as AvatarPropsUI } from "theme-ui";

import { SizeVariant } from "@types";
import { StylesUtils } from "@utils";

import { styleSize } from "./avatar.styles";

export type AvatarProps = AvatarPropsUI & {
  src: string;
  size?: SizeVariant;
};

const AvatarWrapper = ({ size = "medium", sx, ...props }: AvatarProps) => {
  return <Avatar {...props} sx={StylesUtils.compose(sx, styleSize[size])} />;
};

export default AvatarWrapper;
