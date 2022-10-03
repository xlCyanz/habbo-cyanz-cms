import React from "react";

import { withLayout } from "@hocs";
import { MainLayout } from "@templates";
import { Container } from "@atoms";

const FrontPage = () => {
  return <Container>FrontPage</Container>;
};

export default withLayout(FrontPage, MainLayout);
