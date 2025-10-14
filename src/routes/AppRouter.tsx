import { Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import ProtectRouter from "./ProtectRouter";
import { useAuth } from "../context/AuthContext";

const AppRouter = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="/Auth" element={<Auth />} />
      <Route
        path="/Dashboard"
        element={
          <ProtectRouter isAuth={isAuth}>
            <Dashboard />
          </ProtectRouter>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
