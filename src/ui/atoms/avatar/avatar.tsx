import { ThemeUIStyleObject } from "theme-ui";

import { SizeVariant } from "@types";

import Image, { IImageProps } from "../image";

export interface IAvatarProps extends IImageProps {
  src: string;
  size?: SizeVariant;
}

const styleSize: { [key in SizeVariant]: ThemeUIStyleObject } = {
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
};

const Avatar = ({ size = "medium", ...props }: IAvatarProps) => {
  return (
    <Image variant="avatarBorder" sx={{ ...styleSize[size] }} {...props} />
  );
};

export default Avatar;
