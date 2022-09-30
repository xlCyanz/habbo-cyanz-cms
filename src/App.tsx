import React from "react";
import { RootNavigation } from "@core";

import { AuthContextProvider, ThemeContextProvider } from "@contexts";

import GlobalStyles from "./global-styles";

const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <GlobalStyles />
        <RootNavigation />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
