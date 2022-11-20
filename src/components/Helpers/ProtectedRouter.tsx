import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export const ProtectedRouter = ({children}: any) => {
  const { login } = React.useContext(UserContext)

  if (!login) {
    return <Navigate to='/login' replace />
  }
  return children;
}