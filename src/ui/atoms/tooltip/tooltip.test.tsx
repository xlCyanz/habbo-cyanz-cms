import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { FakeUtils } from "@utils";
import { ThemeContextProvider } from "@contexts";

import Tooltip from "./tooltip";
import Text from "../text";

describe("<Tooltip/>", () => {
  const contentId = "tooltipText_Test";
  const childrenTooltipId = "tooltipTextChildren_Test";

  const { childrenText, contentText } = FakeUtils.tooltipTest();

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Tooltip content={<Text data-testid={contentId}>{contentText}</Text>}>
          <Text data-testid={childrenTooltipId}>{childrenText}</Text>
        </Tooltip>
      </ThemeContextProvider>,
    );
  });

  test("Should render children component", () => {
    expect(screen.getByTestId(childrenTooltipId)).toBeInTheDocument();
  });

  test("Should children component render text", () => {
    expect(screen.getByText(childrenText)).toBeDefined();
  });

  test("Should render content component", async () => {
    const tooltip = await screen.findByTestId(childrenTooltipId);

    fireEvent.mouseEnter(tooltip);
    expect(await screen.findByTestId(contentId)).toBeInTheDocument();
    fireEvent.mouseLeave(tooltip);
  });
});
