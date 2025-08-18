import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../shared/Main";
import Home from "../pages/Home";
import Menu from "../menupage/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:
    [
           {
            path:'/',
            element:<Home></Home>
           },


            {
            path:'/menu',
            element: <Menu></Menu>
           }
    ]
  },
]);