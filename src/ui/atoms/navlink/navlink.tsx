import React from "react";
import { Link } from "react-router-dom";
import { NavLink, NavLinkProps } from "theme-ui";

import { StylesUtils } from "@utils";

export type INavLinkProps = { to: string } & NavLinkProps;

const styles = StylesUtils.create({
  default: {
    mx: [0, 5],
    fontSize: [2, 2],
  },
});

const NavLinkWrapper = ({ sx, ...props }: INavLinkProps) => {
  return (
    <NavLink
      as={Link}
      sx={StylesUtils.compose(styles.default, sx)}
      {...props}
    />
  );
};

export default NavLinkWrapper;
