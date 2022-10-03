import React from "react";
import { Image, ImageProps as ImagePropsUI } from "theme-ui";

export type ImageProps = ImagePropsUI & {
  src: string;
  alt: string;
};

const ImageWrapper = (props: ImageProps) => {
  return <Image {...props} />;
};

export default ImageWrapper;
