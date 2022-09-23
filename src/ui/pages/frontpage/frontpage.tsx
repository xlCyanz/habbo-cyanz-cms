import { Button } from "@atoms";
import { Container } from "theme-ui";

const FrontPage = () => {
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
      </div>
    </Container>
  );
};

export default FrontPage;
