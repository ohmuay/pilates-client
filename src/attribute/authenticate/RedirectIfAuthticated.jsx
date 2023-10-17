import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  if (authUser?.role === "USER") {
    return <Navigate to="/profile" />;
  } else if (authUser?.role === "ADMIN") {
    return <Navigate to="/adtransaction" />;
  }
  return children;
}
