import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Avatar from "./avatar";
import { FakeUtils } from "@utils";

describe("<Avatar/>", () => {
  const testId = "avatar_Test";
  const { avatar } = FakeUtils.avatarTest();

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Avatar data-testid={testId} src={avatar} size="small" />
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
