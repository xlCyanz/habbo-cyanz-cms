import tw from "twin.macro";

const Wrapper = tw.section`flex w-full`;
const Column = tw.div`w-1/2`;

const App = () => {
  return (
    <Wrapper>
      <Column>
        <h1>Greetings Earthling</h1>
        <p>Welcome to your Create-React-App / TailwindCSS / Styled Components template</p>
        <h2>Resources / Documentation</h2>
      </Column>
      <Column>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/create-a-new-react-app.html">ReactJS</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/">TailwindCSS</a>
          </li>
          <li>
            <a href="https://styled-components.com/">Styled Components</a>
          </li>
        </ul>
      </Column>
    </Wrapper>
  );
};

export default App;
