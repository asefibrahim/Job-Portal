import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainHome from "../pages/Home/MainHome";
import MainHiringSolution from "../pages/hiringSolution/MainHiringSolution";
import About from "../pages/about/About";
import Blogs from "../pages/blogs/Blogs";
import MainPostJob from "../pages/postJob/MainPostJob";
import MainCOmpanies from "../pages/companies/MainCOmpanies/MainCOmpanies";
import ErrorPage from "../shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path: "/hiring-solution",
        element: <MainHiringSolution />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/postJob",
        element: <MainPostJob />,
      },
      {
        path: "/companies",
        element: <MainCOmpanies />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
