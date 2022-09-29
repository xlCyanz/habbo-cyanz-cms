import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Card from "./card";

describe("<Card/>", () => {
  const testId = "card_Test";
  const cardText = "Card test";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Card data-testid={testId}>{cardText}</Card>
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should render text in card", () => {
    expect(screen.getByText(cardText)).toBeDefined();
  });
});
