import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Flex from "./flex";

describe("<Flex/>", () => {
  const testId = "flex_Test";
  const flexText = "Testing flex component";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Flex data-testid={testId}>{flexText}</Flex>
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should render text in flex", () => {
    expect(screen.getByText(flexText)).toBeDefined();
  });
});
