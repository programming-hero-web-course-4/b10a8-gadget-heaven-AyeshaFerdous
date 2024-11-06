import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

   
  return (
    <div>
      <Helmet>
       <title> Dashboard || Gadgets Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] text-white ">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex items-center  justify-center gap-6">
            <button>
              <NavLink className={({isActive}) => `btn  border px-10 py-1 rounded-full font-bold ${isActive?'bg-white text-[#9538E2]' : 'hover:bg-[#9538E2] hover:text-white'}`}
          to={'/dashboard/cart'}>
              Cart
              </NavLink>
              
            </button>
            <button>
              <NavLink className={({isActive}) => `btn  border px-10 py-1 rounded-full font-bold ${isActive?' bg-white text-[#9538E2]' : 'hover:bg-[#9538E2] hover:text-white'}`}
          to={'/dashboard/wishlist'}>Wishlist</NavLink>
            </button>
            </div>
          </div>
        </div>
      </div>

      <Outlet/>
    </div>
  );
};

export default Dashboard;
