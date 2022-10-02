import React from "react";
import { faker } from "@faker-js/faker";

import { withLayout } from "@hocs";
import { MainLayout } from "@templates";
import { LastRegisterCard, TextIcon } from "@molecules";
import {
  Box,
  Card,
  Icon,
  Text,
  Input,
  Avatar,
  Button,
  Tooltip,
  Checkbox,
  Container,
} from "@atoms";

const avatar = faker.image.avatar();

const avatarHabbo =
  "https://imager.rubyhotel.city/?figure=sh-5823-90.ch-3059-110.fa-5065-72.lg-710-90.wa-3263-64-91.ha-1013-90.hr-828-49.hd-180-1379.ea-3226-110&direction=2&head_direction=2&size=m&headonly=1";

const FrontPage = () => {
  const [name, setName] = React.useState("");

  return (
    <>
      <Container>
        Hola
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" size="small" mt={2}>
          Secondary
        </Button>
        <Button variant="secondary" size="medium" my={2}>
          Secondary
        </Button>
        <Button variant="secondary" size="large">
          Secondary
        </Button>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
        <Box my={5}>
          <Tooltip content={<Text>Lorem Ipsum</Text>} direction="top">
            <Text>Hola</Text>
          </Tooltip>
        </Box>
        <LastRegisterCard avatar={avatarHabbo} username="xlCyanz" />
        <Icon name="arrow-right" size={20} />
        <Icon name="discord" size={20} />
        <Icon name="instagram" size={20} />
        <Icon name="lock" size={20} />
        <Icon name="question-line" size={20} />
        <Icon name="twitter" size={20} />
        <Icon name="user" size={20} />
        <Checkbox label="Hola" defaultChecked={true} />
        <TextIcon text="Hola" iconName="question-line" />
        <Avatar src={avatar} size="small" />
        <Avatar src={avatar} size="medium" mx={2} />
        <Avatar src={avatar} size="large" />
        <Card>
          <Avatar src={avatar} size="small" />
        </Card>
      </Container>
    </>
  );
};

export default withLayout(FrontPage, MainLayout);
