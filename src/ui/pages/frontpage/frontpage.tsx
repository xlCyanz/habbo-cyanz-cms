import { useState } from "react";
import { Container } from "theme-ui";

import { TextIcon } from "@molecules";
import { Button, Checkbox, Icon, Input } from "@atoms";

const FrontPage = () => {
  const [name, setName] = useState("");

  return (
    <Container p={4} bg="muted">
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
      <Icon name="arrow-right" size={20} />
      <Icon name="discord" size={20} />
      <Icon name="instagram" size={20} />
      <Icon name="lock" size={20} />
      <Icon name="question-line" size={20} />
      <Icon name="twitter" size={20} />
      <Icon name="user" size={20} />
      <Checkbox label="Hola" defaultChecked={true} />
      <TextIcon text="Hola" icon="question-line" />
    </Container>
  );
};

export default FrontPage;
