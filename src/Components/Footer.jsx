import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-base text-gray-800 px-40 py-24">
        <div className="flex flex-col justify-center items-center space-y-4">
            <h2 className="text-3xl font-bold">Gadget Heaven</h2>
            <p className="text-gray-400">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="flex justify-between items-center mt-4">
        <nav className="flex flex-col items-center gap-3">
          <h6 className="font-bold">Services</h6>
          <a className="text-gray-400 link link-hover">Product Support</a>
          <a className="text-gray-400 link link-hover">Order Tracking</a>
          <a className="text-gray-400 link link-hover">Shipping & Delivery</a>
          <a className="text-gray-400 link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col items-center gap-3">
          <h6 className="font-bold ">Company</h6>
          <a className="text-gray-400 link link-hover">About us</a>
          <a className="text-gray-400 link link-hover">Contact</a>
          <a className="text-gray-400 link link-hover">Career</a>
          
        </nav>
        <nav className="flex flex-col items-center gap-3">
          <h6 className="font-bold">Legal</h6>
          <a className="text-gray-400 link link-hover">Terms of use</a>
          <a className="text-gray-400 link link-hover">Privacy policy</a>
          <a className="text-gray-400 link link-hover">Cookie policy</a>
        </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
