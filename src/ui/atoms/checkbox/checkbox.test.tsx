import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Checkbox from "./checkbox";

describe("<Checkbox/>", () => {
  const testId = "checkbox_Test";
  const label = "This is a label";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Checkbox data-testid={testId} label={label} defaultChecked={true} />
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should render label in checkbox", () => {
    expect(screen.getByText(label)).toBeDefined();
  });
});
