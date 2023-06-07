import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
export const PublicRoute = ({ children, restricted = false }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/home" /> : children;
};
