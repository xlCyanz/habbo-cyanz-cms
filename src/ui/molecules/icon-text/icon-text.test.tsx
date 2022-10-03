import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import IconText from "./icon-text";

describe("<IconText/>", () => {
  const testId = "iconText_Test";
  const text = "Amada Amante";
  const testIdText = "iconText_Text";
  const testIdIcon = "iconText_Icon";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <IconText data-testid={testId} text={text} iconName="menu" />
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should render text component", () => {
    expect(screen.getByTestId(testIdText)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("Should render icon component", () => {
    expect(screen.getByTestId(testIdIcon)).toBeInTheDocument();
  });
});
