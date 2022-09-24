import { Box, Container } from "theme-ui";

import { Button, Input } from "@atoms";
import { useState } from "react";

const FrontPage = () => {
  const [name, setName] = useState("");

  return (
    <Container p={4} bg="muted">
      Hola
      <div>
        <h1>Greetings Earthling</h1>
        <p>
          Welcome to your Create-React-App / TailwindCSS / Styled Components
          template
        </p>
        <h2>Resources / Documentation</h2>

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
      </div>
    </Container>
  );
};

export default FrontPage;
