import React from "react";

import { Flex } from "@atoms";
import { Footer, MainHeader } from "@organisms";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex sx={{ flexDirection: "column", height: "100vh" }}>
      <MainHeader />
      <Flex sx={{ flex: 1 }}>{children}</Flex>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
