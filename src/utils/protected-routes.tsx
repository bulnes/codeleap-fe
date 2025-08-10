import { Navigate, Outlet } from "react-router";
import { STORAGE_SIGNUP_KEY } from "../constants";

export function ProtectedRoutes() {
  const username = sessionStorage.getItem(STORAGE_SIGNUP_KEY);

  return username ? <Outlet /> : <Navigate to="/signup" />;
}
