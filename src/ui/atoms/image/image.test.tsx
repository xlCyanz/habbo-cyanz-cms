import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Image from "./image";

describe("<Image/>", () => {
  const testId = "image_Test";
  const imageSource =
    "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg";
  const imageAlt = "maleAvatar";

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Image data-testid={testId} src={imageSource} alt={imageAlt} />
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeDefined();
  });

  test("Should have source and alt", async () => {
    const image = (await screen.findByTestId(testId)) as HTMLImageElement;
    expect(image.src).toContain(imageSource);
    expect(image.alt).toContain(imageAlt);
  });
});
