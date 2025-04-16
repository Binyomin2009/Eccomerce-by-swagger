import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import ProductInfoPage from "../src/pages/productByid/productByid";
import Wishlist from "./pages/wishlist/wishlist";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import Cart from "./pages/cart/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/product/:id", element: <ProductInfoPage /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
