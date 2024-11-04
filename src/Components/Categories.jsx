import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col items-center gap-6 p-5 border rounded-xl">
      {categories.map((category) => (
       
          <NavLink
          key={category.category} 
          className={({isActive}) => `border px-5 py-3 rounded-full font-bold ${isActive?'bg-[#9538E2]' : 'hover:bg-[#9538E2]'}`}
          to={`/category/${category.category}`}>
            {category.category}
          </NavLink>
       
      ))}
    </div>
  );
};

export default Categories;
