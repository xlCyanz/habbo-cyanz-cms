import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import NavLink from "./navlink";

describe("<NavLink/>", () => {
  const testId = "navlink_Test";
  const href = "/testing";
  const navLinkTxt = "Testing";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <BrowserRouter>
          <NavLink data-testid={testId} to={href}>
            {navLinkTxt}
          </NavLink>
        </BrowserRouter>
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should navlink have href atribute", async () => {
    const link = await screen.findByTestId<HTMLAnchorElement>(testId);
    expect(link.href).toContain(href);
  });
});
