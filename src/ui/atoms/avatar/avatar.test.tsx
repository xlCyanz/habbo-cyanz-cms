import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Avatar from "./avatar";

const avatar =
  "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg";

describe("<Avatar/>", () => {
  const testId = "avatar_Test";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Avatar data-testid={testId} src={avatar} size="small" />
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeDefined();
  });
});