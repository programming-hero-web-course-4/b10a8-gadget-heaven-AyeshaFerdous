import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";


const Home = () => {
   const categories = useLoaderData()
    return (
        <>
        {/* Banner */}
        <div className="w-11/12 mx-auto border-solid border-b-4 border-l-4 border-r-4 pb-2 pr-2 pl-2 rounded-bl-3xl rounded-br-3xl mb-96">
           <Banner/>
        </div>

          {/* Heading */}
        <div className="max-w-xl md:max-w-3xl mx-auto text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-semibold">Explore Cutting-Edge Gadgets</h1>
        </div>

        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-3">
            {/* category tab section */}
        <Categories categories={categories}/>
        {/* dynamic nested components */}
           <Outlet/>
        </div>
        </>
    );
};

export default Home;