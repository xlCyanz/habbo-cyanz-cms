import React from "react";

import { Container, Flex, NavLink, MenuButton, Text, Box } from "@atoms";

import { styles } from "./navbar.styles";

interface IRoute {
  path: string;
  name: string;
}

export type NavbarProps = {
  routes: Array<IRoute>;
};

const Navbar = ({ routes }: NavbarProps) => {
  const [showMenuMobile, setShowMenuMobile] = React.useState(false);

  return (
    <Container sx={styles.navbarContainer}>
      <Flex as="nav" sx={styles.navbar}>
        <MenuButton
          aria-label="Toggle Menu"
          size={24}
          onClick={() => setShowMenuMobile((prev) => !prev)}
          sx={{
            bg: showMenuMobile && "background",
            display: ["block", "none"],
          }}
        />

        <Box sx={{ display: ["none", "flex"] }}>
          {routes.map((route, index) => (
            <NavLink key={`${route.name} ${index}`} to={route.path}>
              {route.name}
            </NavLink>
          ))}
        </Box>
      </Flex>

      {showMenuMobile && (
        <Flex sx={styles.navbarMobile}>
          <Text sx={styles.navbarMobileText}>Navegacion</Text>

          {routes.map((route) => (
            <NavLink
              key={`${route.name}-Mobile`}
              to={route.path}
              sx={styles.navLinkMobile}
            >
              {route.name}
            </NavLink>
          ))}
        </Flex>
      )}
    </Container>
  );
};

export default Navbar;
