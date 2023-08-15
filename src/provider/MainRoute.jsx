import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainHome from "../pages/Home/MainHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,

        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            },


        ]
    },
])

export default router