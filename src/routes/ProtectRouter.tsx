// src/routes/ProtectRouter.tsx
import { Navigate, Outlet } from "react-router-dom";
import type { ProtectedRouteProps } from "../types";

const ProtectRouter = ({
  isAuth,
  children,
  redirectTo = "/Auth",
}: ProtectedRouteProps) => {
  if (!isAuth) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectRouter;
