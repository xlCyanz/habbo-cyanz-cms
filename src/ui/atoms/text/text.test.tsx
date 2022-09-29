import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Text from "./text";

describe("<Text/>", () => {
  const testId = "text_Test";
  const text = "This a test of text component";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Text data-testid={testId}>{text}</Text>
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should render text", () => {
    expect(screen.getByText(text)).toBeDefined();
  });
});
