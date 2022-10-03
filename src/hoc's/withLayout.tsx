import React from "react";

const withLayout = (
  Component: () => React.ReactElement,
  Layout: (props: { children: React.ReactNode }) => React.ReactElement,
): React.ReactElement => {
  const ComponentWithLayout = () => (
    <Layout>
      <Component />
    </Layout>
  );

  return <ComponentWithLayout />;
};

export default withLayout;
