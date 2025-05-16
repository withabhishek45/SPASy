import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    // Not logged in, redirect to home or login
    return <Navigate to="/" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // User role not authorized, redirect to home or login
    return <Navigate to="/" replace />
  }

  // Authorized, render children
  return children
}

export default ProtectedRoute
