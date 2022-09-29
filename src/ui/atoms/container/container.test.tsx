import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Container from "./container";

describe("<Container/>", () => {
  const testId = "container_Test";
  const containerText = "Testing";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Container data-testid={testId}>{containerText}</Container>
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should render text in container", () => {
    expect(screen.getByText(containerText)).toBeDefined();
  });
});
