import { ThemeProvider } from "theme-ui";

import { RootNavigation, theme } from "@core";

import GlobalStyles from "./global-styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;
