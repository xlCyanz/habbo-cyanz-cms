import { RootNavigation } from "@core";

import { ThemeContextProvider } from "@contexts";

import GlobalStyles from "./global-styles";

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <RootNavigation />
    </ThemeContextProvider>
  );
};

export default App;
