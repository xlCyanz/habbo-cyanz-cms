import { useState } from "react";

import { LastRegisterCard, TextIcon } from "@molecules";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Icon,
  Input,
  Container,
  Tooltip,
  Text,
  Box,
} from "@atoms";

const avatar =
  "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg";

const avatarHabbo =
  "https://imager.rubyhotel.city/?&figure=sh-5823-90.ch-3059-110.fa-5065-72.lg-710-90.wa-3263-64-91.ha-1013-90.hr-828-49.hd-180-1379.ea-3226-110&direction=2&head_direction=2&size=m&headonly=1";

const FrontPage = () => {
  const [name, setName] = useState("");

  return (
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
      <TextIcon text="Hola" icon="question-line" />
      <TextIcon text="Hola" icon="question-line" reverted />
      <Avatar src={avatar} size="small" />
      <Avatar src={avatar} size="medium" mx={2} />
      <Avatar src={avatar} size="large" />
      <Card>
        <Avatar src={avatar} size="small" />
      </Card>
    </Container>
  );
};

export default FrontPage;
