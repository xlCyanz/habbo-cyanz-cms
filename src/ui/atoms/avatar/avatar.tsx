import { Avatar, AvatarProps, ThemeUIStyleObject } from "theme-ui";

import { SizeVariant } from "@types";

export interface IAvatarProps extends AvatarProps {
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

const AvatarWrapper = ({ size = "medium", ...props }: IAvatarProps) => {
  return (
    <Avatar variant="avatarBorder" sx={{ ...styleSize[size] }} {...props} />
  );
};

export default AvatarWrapper;
