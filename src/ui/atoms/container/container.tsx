import React from "react";
import { Container, ContainerProps } from "theme-ui";

export type IContainerProps = ContainerProps;

const ContainerWrapper = (props: IContainerProps) => {
  return <Container {...props} />;
};

export default ContainerWrapper;
