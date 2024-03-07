import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/pages/errorPage/ErrorPage";
import Home from "../components/pages/home/Home";
import Layout from "../components/layout/Layout";
import VideoList_component from "../components/pages/video_list/VideoList_component";

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
        path: "/home/playlistVideo/:id",
        element: <VideoList_component />,
      },
    ],
  },
]);

export default browserRouter;
