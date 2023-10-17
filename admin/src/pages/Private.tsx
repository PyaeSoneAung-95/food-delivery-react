import { Navigate, Outlet } from "react-router-dom";

export default function Private() {
  let user = null;

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
}
