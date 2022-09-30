import React from "react";

import { Navbar } from "@molecules";
import { Box, Button, Container, Divider, Flex, Image } from "@atoms";

import styles from "./main-header.styles";

const MainHeader = () => {
  return (
    <Box>
      <Navbar />

      <Flex sx={styles.headerBoxImage}>
        <Image
          id="logo"
          src="https://i.imgur.com/2mQ5Cbe.png"
          alt="Habboi"
          sx={styles.headerImage}
        />
        <Box sx={styles.blurBackground} />
      </Flex>

      <Container sx={styles.subNavbarContainer}>
        <Flex id="subNavbar" sx={styles.subNavbar}>
          <Flex>Radio</Flex>
          <Flex sx={{ width: "40%", alignItems: "center" }}>
            <Button>Iniciar Sesion</Button>
            <Divider vertical mx={3} />
            <Button variant="tertiary">Registrarse</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainHeader;
