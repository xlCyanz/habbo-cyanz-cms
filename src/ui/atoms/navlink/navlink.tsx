import React from "react";
import { Link } from "react-router-dom";
import { NavLink, NavLinkProps as NavLinkPropsUI } from "theme-ui";

import { StylesUtils } from "@utils";

export type NavLinkProps = NavLinkPropsUI & { to: string };

const styles = StylesUtils.create({
  default: {
    mx: [0, 5],
    fontSize: [2, 2],
  },
});

const NavLinkWrapper = ({ sx, ...props }: NavLinkProps) => {
  return (
    <NavLink
      as={Link}
      sx={StylesUtils.compose(sx, styles.default)}
      {...props}
    />
  );
};

export default NavLinkWrapper;
