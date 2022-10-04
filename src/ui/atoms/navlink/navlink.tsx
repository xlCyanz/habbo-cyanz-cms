import React from "react";
import { Link } from "react-router-dom";
import { NavLink, NavLinkProps as NavLinkPropsUI } from "theme-ui";

import Text from "../text";
import { styles } from "./navlink.styles";

export type NavLinkProps = NavLinkPropsUI & {
  to: string;
  title: string;
  active?: boolean;
};

const NavLinkWrapper = ({ title, active, ...props }: NavLinkProps) => {
  return (
    <NavLink as={Link} {...props}>
      <Text variant="navLinkText" sx={active ? styles.navLinkActive : {}}>
        {title}
      </Text>
    </NavLink>
  );
};

export default NavLinkWrapper;
