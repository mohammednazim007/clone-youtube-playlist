import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/pages/errorPage/ErrorPage";
import Home from "../components/pages/home/Home";
import Layout from "../components/layout/Layout";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default browserRouter;
