import { StylesUtils } from "@utils";
import React from "react";
import { Card, CardProps as CardPropsUI } from "theme-ui";

export type CardProps = CardPropsUI;

const styles = StylesUtils.create({
  default: {
    p: 2,
    borderRadius: 3,
  },
});

const CardWrapper = ({ sx, ...props }: CardProps) => {
  return <Card sx={StylesUtils.compose(styles.default, sx)} {...props} />;
};

export default CardWrapper;
