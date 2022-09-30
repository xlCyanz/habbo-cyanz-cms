import React from "react";

import { Routes } from "@core";
import { Flex, NavLink } from "@atoms";

const Navbar = () => {
  return (
    <Flex as="nav" sx={{ justifyContent: "center" }} bg="secondary">
      <NavLink variant="navActive" to="#!">
        Inicio
      </NavLink>
      <NavLink to="#!">Comunidad</NavLink>
      <NavLink to={Routes.FRONT_PAGE}>FrontPage</NavLink>
      <NavLink to={Routes.HOME_PAGE}>Home</NavLink>
      <NavLink to={Routes.REGISTER_PAGE}>Register</NavLink>
    </Flex>
  );
};

export default Navbar;
