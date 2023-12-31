import React from "react"
import { Navigate, useLocation } from "react-router-dom"

export function RequireAuth({
  children,
  isAuthenticated,
}) {
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />
  } else {
    return children
  }
}
