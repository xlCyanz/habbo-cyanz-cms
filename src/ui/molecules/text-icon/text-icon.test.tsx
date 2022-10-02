import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import TextIcon from "./text-icon";

describe("<TextIcon/>", () => {
  const testId = "textIcon_Test";
  const text = "Amada Amante";
  const testIdText = "textIcon_Text";
  const testIdIcon = "textIcon_Icon";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <TextIcon data-testid={testId} text={text} iconName="menu" />
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
