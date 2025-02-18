import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/layout"


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: "Home",
        },
        {
          path: "/about",
          element: "About"
        },
        {
          path: "/contact",
          element: "Contact"
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App