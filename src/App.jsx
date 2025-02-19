import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/layout"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Home from "./pages/home/home"


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path:"/products",
          element:"Products"
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
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