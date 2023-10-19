import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function AdminAuth({ children }) {
  const { authUser } = useAuth();

  if (authUser?.role !== "ADMIN") {
    return <Navigate to="/auth/login" />;
  }

  return children;
}
