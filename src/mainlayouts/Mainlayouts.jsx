import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { createContext } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Mainlayouts = () => {
    const {pathname} = useLocation()
    
    return (
        <div>
           <Toaster/>
             {/* Navbar */}
             <div className={`w-11/12 mx-auto mt-4 ${pathname === "/" ? "border-solid border-t-4 border-l-4 border-r-4 pt-2 pr-2 pl-2 rounded-tl-3xl rounded-tr-3xl": "border-none rounded-none p-0"}`}>
            <Navbar/>
            </div>
            <Outlet/>
            {/* Footer */}
            <Footer/>
          
        </div>
    );
};

export default Mainlayouts;