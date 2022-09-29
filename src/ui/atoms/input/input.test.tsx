import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Input from "./input";

describe("<Input/>", () => {
  const testId = "input_Test";
  const inputValue = "Input Value Habbo";
  const inputPlaceholder = "Input Placeholder";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Input
          data-testid={testId}
          value={inputValue}
          onChange={() => {}}
          placeholder={inputPlaceholder}
        />
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeDefined();
  });

  test("Should have value and placeholder", async () => {
    const input = await screen.findByTestId<HTMLInputElement>(testId);
    expect(input.value).toBe(inputValue);
    expect(input.placeholder).toBe(inputPlaceholder);
  });
});
