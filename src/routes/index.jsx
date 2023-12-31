import { lazy } from "react"
import React from "react"
import { useRoutes } from "react-router-dom"

const Home = lazy(() => import("../pages/home"))
const ChangPassword = lazy(() => import("../pages/password"))

const RoutesConfig = () => {
  const routers = [
    { path: "/", element: <Home /> },
    { path: "/change-password", element: <ChangPassword /> },
    // {
    //   path: PATHS_NAME.LLM,
    //   element: (
    //     <RequireAuth isAuthenticated={props.isAuthenticated}>
    //       <Chatbot />
    //     </RequireAuth>
    //   ),
    // },
    // {
    //   path: PATHS_NAME.DEFI_LENS,
    //   element: (
    //     <RequireAuth isAuthenticated={props.isAuthenticated}>
    //       <DefiLens />
    //     </RequireAuth>
    //   ),
    // },
  ]

  const elements = useRoutes(routers)
  return elements
}

export default RoutesConfig
