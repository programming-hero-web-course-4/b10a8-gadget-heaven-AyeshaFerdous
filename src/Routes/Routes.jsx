import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayouts from "../mainlayouts/Mainlayouts";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts/>,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/statistics',
            element: <Statistics/>
        },
        {
            path:'/dashboard',
            element: <Dashboard/>
        },
      ]
    },
  ]);

  export default router;