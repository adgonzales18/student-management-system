import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const AuthGuard = ({ children }) => {
  const { session } = UserAuth();

  if (!session) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthGuard;