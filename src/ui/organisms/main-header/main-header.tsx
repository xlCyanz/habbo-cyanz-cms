import React from "react";

import { Box, Button, Container, Divider, Flex, Image } from "@atoms";

import styles from "./main-header.styles";

const image = "https://beeimg.com/images/a89729143661.png";

const MainHeader = () => {
  return (
    <Box>
      <Flex
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "150%",
          backgroundPosition: "center",
          ...styles.headerBoxImage,
        }}
      >
        <Image
          id="logo"
          src="https://i.imgur.com/2mQ5Cbe.png"
          alt="logo"
          variant="header"
        />
        <Box sx={styles.blurBackground} />
      </Flex>

      <Container as={Flex} sx={styles.subHeader}>
        <Flex>Radio</Flex>
        <Flex sx={{ width: ["100%", "50%", "35%"], alignItems: "center" }}>
          <Button>Iniciar Sesion</Button>
          <Divider vertical mx={[2, 3, null, 4]} sx={{ height: "25px" }} />
          <Button variant="secondary">Registrarse</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainHeader;
