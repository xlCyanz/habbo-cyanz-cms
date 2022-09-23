import React from "react";
import {
  Link,
  Route,
  BrowserRouter,
  Routes as ReactRoutes,
} from "react-router-dom";

import { Routes } from "@core";
import { Button, ProtectedRoute } from "@atoms";
import { FrontPage, HomePage, NotFoundPage, RegisterPage } from "@pages";

const Navigation = () => (
  <nav>
    <Link to={Routes.FRONT_PAGE}>FrontPage</Link>
    <Link to={Routes.HOME_PAGE}>Home</Link>
    <Link to={Routes.REGISTER_PAGE}>Register</Link>
  </nav>
);

const RootNavigation = () => {
  const [auth, setAuth] = React.useState(false);

  const handleLogin = () => setAuth(true);
  const handleLogout = () => setAuth(false);

  return (
    <BrowserRouter>
      <Navigation />
      {auth ? (
        <Button onClick={handleLogout}>Sign Out</Button>
      ) : (
        <Button onClick={handleLogin}>Sign In</Button>
      )}

      <ReactRoutes>
        <Route
          element={
            <ProtectedRoute isAllowed={auth} redirectPath={Routes.FRONT_PAGE} />
          }
        >
          <Route id="HomePage" path={Routes.HOME_PAGE} element={<HomePage />} />
        </Route>

        <Route
          element={
            <ProtectedRoute isAllowed={!auth} redirectPath={Routes.HOME_PAGE} />
          }
        >
          <Route index id="FrontPage_Index" element={<FrontPage />} />
          <Route
            id="FrontPage"
            path={Routes.FRONT_PAGE}
            element={<FrontPage />}
          />
          <Route
            id="RegisterPage"
            path={Routes.REGISTER_PAGE}
            element={<RegisterPage />}
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default RootNavigation;
