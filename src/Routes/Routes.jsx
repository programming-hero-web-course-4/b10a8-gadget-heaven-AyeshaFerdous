import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayouts from "../mainlayouts/Mainlayouts";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Products from "../Components/Products";
import ProductDetails from "../Pages/ProductDetails";
import ProductCarts from "../Components/ProductCarts";
import ProductWishlists from "../Components/ProductWishlists";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts/>,
      children: [
        {
            path:'/',
            element: <Home/>,
            loader: ()=> fetch('/categories.json'),
            children: [
                {
                    path: '/',
                element: <Products/>,
                loader: ()=> fetch('/gadgets.json'),
                },
                {
                    path:'category/:category',
                    element: <Products/>,
                    loader: ()=> fetch('/gadgets.json')
                }
            ]
        },
        
        {
           path: '/productDetails/:id',
           element: <ProductDetails/>,
           loader: ()=> fetch('../gadgets.json')
           
        },
        {
            path:'/statistics',
            element: <Statistics/>,
           
        },
        {
            path:'/dashboard',
            element: <Dashboard/>,
            children: [
              {
                path:'/dashboard',
            element: <ProductCarts/>
              },
              {
                path: '/dashboard/cart',
                element: <ProductCarts/>
              },
              {
                path: '/dashboard/wishlist',
                element: <ProductWishlists/>
              }

            ]
        },
      ]
    },
  ]);

  export default router;