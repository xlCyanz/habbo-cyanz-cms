import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Box from "./box";

describe("<Box/>", () => {
  const testId = "box_Test";
  const boxText = "Testing";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Box data-testid={testId}>{boxText}</Box>
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should render text in box", () => {
    expect(screen.getByText(boxText)).toBeDefined();
  });
});
