import React from "react";
import { Grid, GridProps as GridPropsUI } from "theme-ui";

export type GridProps = GridPropsUI;

const GridWrapper = (props: GridProps) => {
  return <Grid {...props} />;
};

export default GridWrapper;
