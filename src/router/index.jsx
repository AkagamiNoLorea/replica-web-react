import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Extra1 from "../pages/Extra1";
import Extra2 from "../pages/Extra2";
import Extra3 from "../pages/extra3";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/articledetails",
        element: <Extra1 />,
    },
    {
        path: "/termscomditions",
        element: <Extra2 />,
    },{
        path: "/privacypolicy",
        element: <Extra3 />,
    },
]);