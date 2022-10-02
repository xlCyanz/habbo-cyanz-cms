import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { FakeUtils } from "@utils";
import { ThemeContextProvider } from "@contexts";

import LastRegisterCard from "./last-register-card";

describe("<LastRegisterCard/>", () => {
  const testId = "lastRegister_Card";
  const testIdTooltip = "lastRegisterCard_Tooltip";
  const fakeProps = FakeUtils.lastRegisterCardTest();

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <LastRegisterCard {...fakeProps} />
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should render content component", async () => {
    const tooltip = await screen.findByTestId(testIdTooltip);

    fireEvent.mouseEnter(tooltip);
    expect(await screen.findByText(fakeProps.username)).toBeInTheDocument();
    fireEvent.mouseLeave(tooltip);
  });

  test("Should card image have source and alt", async () => {
    const card = await screen.findByTestId(testId);
    expect(card).toHaveStyle(`background-image: url(${fakeProps.avatar})`);
  });
});
