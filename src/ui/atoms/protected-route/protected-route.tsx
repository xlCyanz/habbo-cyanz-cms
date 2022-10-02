import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Routes } from "@core";

export type ProtectedRouteProps = {
  isAllowed: boolean;
  redirectPath?: string;
};

const ProtectedRoute = ({
  isAllowed,
  redirectPath = Routes.FRONT_PAGE,
}: ProtectedRouteProps) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;

  return <Outlet />;
};

export default ProtectedRoute;
