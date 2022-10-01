import React from "react";
import { Route, BrowserRouter, Routes as ReactRoutes } from "react-router-dom";

import { Routes } from "@core";
import { useAuth } from "@hooks";
import { ProtectedRoute } from "@atoms";
import { FrontPage, HomePage, NotFoundPage, RegisterPage } from "@pages";

const RootNavigation = () => {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <ReactRoutes>
        {/* Routes logged */}
        <Route
          element={
            <ProtectedRoute isAllowed={auth} redirectPath={Routes.FRONT_PAGE} />
          }
        >
          <Route id="HomePage" path={Routes.HOME_PAGE} element={<HomePage />} />
        </Route>

        {/* Routes no logged */}
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
