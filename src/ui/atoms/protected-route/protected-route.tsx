import { Navigate, Outlet } from "react-router-dom";

import { Routes } from "@core";

export interface IProtectedRouteProps {
  isAllowed: boolean;
  redirectPath?: string;
}

const ProtectedRoute = ({
  isAllowed,
  redirectPath = Routes.FRONT_PAGE,
}: IProtectedRouteProps) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
