import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ allowedRoles, children }) => {
  // Implement your auth logic here, e.g., check user role from context or props
  // For demonstration, assume user role is stored in localStorage
  const user = JSON.parse(localStorage.getItem('user'))

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
