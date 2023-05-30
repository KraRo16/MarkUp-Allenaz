// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// export const PrivateRoute = ({ children }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;
//   return shouldRedirect ? <Navigate to="/" /> : children;
// };

import { useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react';

const PrivateRoute = ({ children }) => {
  // const [auth, setAuth] = useState(false);
  const location = useLocation();
  const auth = true; //* Поміняти на false !!!!!!!
  // const fethToken = () => {};
  // if (!localStorage === '') {
  //   console.log('122');
  // }
  // if (localStorage === '') {
  //   console.log('221');
  // }
  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};
export { PrivateRoute };
