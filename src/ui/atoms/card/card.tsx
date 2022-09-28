import React from "react";
import { Card, CardProps } from "theme-ui";

export type ICardProps = CardProps;

const CardWrapper = (props: ICardProps) => {
  return <Card {...props} />;
};

export default CardWrapper;
