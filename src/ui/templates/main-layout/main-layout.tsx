import React from "react";

import { Box } from "@atoms";
import { Footer, MainHeader } from "@organisms";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box>
      <MainHeader />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
