import React from "react";
import { IconType } from "react-icons";

import bundle from "./icon.bundle";

export type IconProps = React.ComponentProps<IconType> & {
  name: keyof typeof bundle;
};

const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = name ? bundle[name] : null;
  return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icon;
