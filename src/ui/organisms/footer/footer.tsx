import React from "react";

import { TextIcon } from "@molecules";
import { Container, Divider, Flex, Icon, Text } from "@atoms";

import { styles } from "./footer.styles";

const IconTextSocial = () => (
  <Flex sx={{ alignItems: "center" }}>
    <Icon name="discord" />
    <Text variant="footerText" ml={2}>
      Discord
    </Text>
  </Flex>
);

const DividerVertical = () => (
  <Divider mx={[2, 3]} vertical sx={{ height: 0 }} />
);

const Footer = () => {
  return (
    <Container as={Flex} py={3} variant="footer">
      <Flex sx={styles.footerCopyright}>
        <Flex mr={1}>
          <TextIcon text="Copyright 2022" iconName="copyright" />
          <Text variant="footerText" ml={1}>
            Ruby Hotel.
          </Text>
        </Flex>

        <Text>Todos los derechos reservados</Text>
      </Flex>

      <Flex sx={styles.footerSocial}>
        <IconTextSocial />
        <DividerVertical />
        <IconTextSocial />
        <DividerVertical />
        <IconTextSocial />
      </Flex>
    </Container>
  );
};

export default Footer;
