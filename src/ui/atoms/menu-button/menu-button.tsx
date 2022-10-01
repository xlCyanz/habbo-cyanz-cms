import React from "react";
import { IconButton, IconButtonProps } from "theme-ui";

import Icon from "../icon";

export type MenuButtonProps = IconButtonProps;

const MenuButton = ({ size, ...props }: MenuButtonProps) => {
  return (
    <IconButton {...props}>
      <Icon name="menu" size={size} />
    </IconButton>
  );
};

export default MenuButton;
