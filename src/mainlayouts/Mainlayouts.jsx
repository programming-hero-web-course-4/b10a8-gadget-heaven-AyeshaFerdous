import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Mainlayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="container mx-auto mt-4 border-solid border-t-4 border-l-4 border-r-4 pt-2 pr-2 pl-2 rounded-tl-3xl rounded-tr-3xl">
            <Navbar/>
            </div>
            <Outlet/>
            {/* Footer */}
        </div>
    );
};

export default Mainlayouts;