import { TextIcon } from "@molecules";
import { Box, Container, Divider, Flex, Icon, Text } from "@atoms";

const IconTextSocial = () => (
  <Flex sx={{ alignItems: "center" }}>
    <Icon name="discord" />
    <Text variant="footerText" ml={2}>
      Discord
    </Text>
  </Flex>
);

const DividerVertical = () => <Divider mx={3} vertical />;

const Footer = () => {
  return (
    <Box py={3} px={3} bg="secondary">
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Flex sx={{ alignItems: "center" }}>
          <TextIcon text="Copyright 2022" icon="copyright" />
          <Text variant="footerText">Ruby Hotel</Text>
          <Text variant="footerText">Todos los derechos reservados</Text>
        </Flex>

        <Flex sx={{ alignItems: "center" }}>
          <IconTextSocial />
          <DividerVertical />
          <IconTextSocial />
          <DividerVertical />
          <IconTextSocial />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
