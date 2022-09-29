import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeContextProvider } from "@contexts";

import Image from "./image";
import { FakeUtils } from "@utils";

describe("<Image/>", () => {
  const testId = "image_Test";
  const { source, alt } = FakeUtils.imageTest();

  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Image data-testid={testId} src={source} alt={alt} />
      </ThemeContextProvider>,
    );
  });

  test("Should render component", () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Should have source and alt", async () => {
    const image = await screen.findByTestId<HTMLImageElement>(testId);
    expect(image.src).toContain(source);
    expect(image.alt).toContain(alt);
  });
});
