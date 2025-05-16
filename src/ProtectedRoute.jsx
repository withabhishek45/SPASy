import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    // Not logged in, redirect to recruiter login page
    return <Navigate to="/login/recruiter" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // User role not authorized, redirect to recruiter login page
    return <Navigate to="/login/recruiter" replace />
  }

  // Authorized, render children
  return children
}

export default ProtectedRoute
