import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Button from "./button";

describe("<Button/>", () => {
  const testId = "button_Test";
  const buttonText = "Primary Button";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Button data-testid={testId}>{buttonText}</Button>
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeDefined();
  });

  test("Should render text in button", () => {
    expect(screen.getByText(buttonText)).toBeDefined();
  });
});
