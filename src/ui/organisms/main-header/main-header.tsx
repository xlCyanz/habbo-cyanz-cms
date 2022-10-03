import React from "react";

import { Navbar } from "@molecules";
import { Box, Button, Container, Divider, Flex, Image } from "@atoms";

import styles from "./main-header.styles";

const routes = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Comunidad",
    path: "/community",
  },
  {
    name: "Noticia",
    path: "/news",
  },
  {
    name: "Dev",
    path: "/dev",
  },
];

const image =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d8ccfa9-0c40-488c-8689-f397b4fbdb19/dcu3xrc-4a5c4133-41a9-4f4b-96a2-5070b4270b9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkOGNjZmE5LTBjNDAtNDg4Yy04Njg5LWYzOTdiNGZiZGIxOVwvZGN1M3hyYy00YTVjNDEzMy00MWE5LTRmNGItOTZhMi01MDcwYjQyNzBiOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lzxOE0J8_F4EGKmdSdSI-w0MXxpxBIUeZdOzkP83ZBM";

const MainHeader = () => {
  return (
    <Box>
      <Navbar routes={routes} />

      <Flex
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          ...styles.headerBoxImage,
        }}
      >
        <Image
          id="logo-habboi"
          src="https://i.imgur.com/2mQ5Cbe.png"
          alt="Habboi"
          sx={styles.headerImage}
        />
        <Box sx={styles.blurBackground} />
      </Flex>

      <Container sx={styles.subHeaderContainer}>
        <Flex id="subNavbar" sx={styles.subHeader}>
          <Flex>Radio</Flex>
          <Flex sx={{ width: ["100%", "50%", "40%"], alignItems: "center" }}>
            <Button>Iniciar Sesion</Button>
            <Divider vertical mx={[2, 3, null, 4]} sx={{ height: "25px" }} />
            <Button variant="secondary">Registrarse</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainHeader;
