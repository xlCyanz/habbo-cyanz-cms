import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Grid from "./grid";

describe("<Grid/>", () => {
  const testId = "grid_Test";
  const gridText = "Testing grid component";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Grid data-testid={testId}>{gridText}</Grid>
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should render text in grid", () => {
    expect(screen.getByText(gridText)).toBeDefined();
  });
});
