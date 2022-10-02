import React from "react";
import { Container, ContainerProps as ContainerPropsUI } from "theme-ui";

export type ContainerProps = ContainerPropsUI;

const ContainerWrapper = (props: ContainerProps) => {
  return <Container {...props} />;
};

export default ContainerWrapper;
