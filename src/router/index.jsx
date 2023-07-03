import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import Articledetails from "../pages/Articledetails";
import Termscomditions from "../pages/Termscomditions";
import Privacypolicy from "../pages/Privacypolicy";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:
        [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/articledetails",
                element: <Articledetails />,
            },
            {
                path: "/termscomditions",
                element: <Termscomditions/>,
            }, {
                path: "/privacypolicy",
                element: <Privacypolicy />,
            },
        ]
    }
]);