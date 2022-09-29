import React from "react";
import { Image, ImageProps } from "theme-ui";

export type IImageProps = ImageProps;

const ImageWrapper = (props: IImageProps) => {
  return <Image {...props} />;
};

export default ImageWrapper;
