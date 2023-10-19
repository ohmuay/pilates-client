import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function UserAuth({ children }) {
  const { authUser } = useAuth();
  if (authUser?.role !== "USER") {
    return <Navigate to="/auth/login" />;
  }
  return children;
}
