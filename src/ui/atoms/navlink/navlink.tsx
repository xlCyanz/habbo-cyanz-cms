import React from "react";
import { Link } from "react-router-dom";
import { NavLink, NavLinkProps as NavLinkPropsUI } from "theme-ui";

import { StylesUtils } from "@utils";

import Text from "../text";
import { styles } from "./navlink.styles";

export type NavLinkProps = NavLinkPropsUI & {
  to: string;
  title: string;
  active?: boolean;
};

const NavLinkWrapper = ({ sx, title, active, ...props }: NavLinkProps) => {
  return (
    <NavLink as={Link} sx={StylesUtils.compose(styles.navlink, sx)} {...props}>
      <Text
        sx={StylesUtils.compose(
          active ? styles.navLinkTextActive : {},
          styles.navLinkText,
        )}
      >
        {title}
      </Text>
    </NavLink>
  );
};

export default NavLinkWrapper;
