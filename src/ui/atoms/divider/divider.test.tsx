import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Divider from "./divider";

describe("<Divider/>", () => {
  const testHorizontalId = "dividerH_Test";
  const testVerticalId = "dividerV_Test";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Divider data-testid={testHorizontalId} />
        <Divider data-testid={testVerticalId} vertical />
      </ThemeContextProvider>,
    );
  });

  test("Should render component (horizontal)", () => {
    expect(screen.getByTestId(testHorizontalId)).toBeInTheDocument();
  });

  test("Should render component (vertical)", () => {
    expect(screen.getByTestId(testVerticalId)).toBeInTheDocument();
  });
});
