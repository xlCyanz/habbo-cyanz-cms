import React from "react";
import { IconType } from "react-icons";

import bundle from "./icon.bundle";

export interface IIconProps extends React.ComponentProps<IconType> {
  name: keyof typeof bundle;
}

const Icon = ({ name, ...props }: IIconProps) => {
  const IconComponent = name ? bundle[name] : null;
  return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icon;
