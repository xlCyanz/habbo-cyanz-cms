import React from "react";

declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

export type SizeVariant = "small" | "medium" | "large";
