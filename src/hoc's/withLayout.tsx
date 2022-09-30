import React, { ReactNode } from "react";

type ComponentType = React.ComponentType<any>;
type LayoutType = React.ComponentType<{ children: ReactNode }>;

const withLayout = (Component: ComponentType, Layout: LayoutType) => {
  return function ComponentWithLayout() {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  };
};

export default withLayout;
