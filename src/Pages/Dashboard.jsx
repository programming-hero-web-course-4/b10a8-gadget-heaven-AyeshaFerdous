import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

   
  return (
    <div>
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
            <button  className="btn text-[#9538E2] px-10 py-1 bg-white rounded-full">
               Cart
            </button>
            <button className="btn text-[#9538E2] px-10 py-1 bg-white rounded-full">
              Whishlist
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
