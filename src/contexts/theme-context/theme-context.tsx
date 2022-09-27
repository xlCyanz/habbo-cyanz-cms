import React from "react";
import { theme } from "@core";
import { ThemeProvider } from "theme-ui";

interface IProvider {
  children: React.ReactNode;
}

export const Provider = ({ children }: IProvider) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
