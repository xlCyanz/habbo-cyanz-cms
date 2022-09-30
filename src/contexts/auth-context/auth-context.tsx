import React from "react";

export const Context = React.createContext<{
  auth: boolean;
  changeAuth: (newValue: boolean) => void;
}>({
  auth: false,
  changeAuth: () => {},
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = React.useState(false);

  const changeAuth = React.useCallback(
    (newValue: boolean) => setAuth(newValue),
    [],
  );

  const value = React.useMemo(
    () => ({
      auth,
      changeAuth,
    }),
    [auth],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
