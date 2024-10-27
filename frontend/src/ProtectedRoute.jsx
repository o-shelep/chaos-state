import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); 

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/auth/signin" />;
};

export default ProtectedRoute;