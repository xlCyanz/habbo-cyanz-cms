import React from "react";
import { Card, CardProps as CardPropsUI } from "theme-ui";

export type CardProps = CardPropsUI;

const CardWrapper = (props: CardProps) => {
  return <Card {...props} />;
};

export default CardWrapper;
