import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SingleUser from "../pages/SingleUser";
import Posts from "../pages/Posts";
import Todos from "../pages/Todos";

export const routers = createBrowserRouter([
    {
        path: "/",
        element:<Home />
    },
    {
        path: "/user/:id",
        element:<SingleUser />
    },
    {
        path: "/posts/:id",
        element:<Posts />
    },
    {
        path: "/todos/:id",
        element: <Todos />
    }
])