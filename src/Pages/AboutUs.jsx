import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import { TbSelect } from "react-icons/tb";
const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto my-6">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-3">About Us </h3>
        <p className="text-gray-400">This is a e-commerce website for gadgets. You can buy gadgets in this website.</p>
      </div>

      <div className="grid grid-cols-3 gap-8 my-6">
      <div className="flex flex-col justify-center items-center gap-3">
      <MdOutlineContactMail className="text-2xl"/>
      <h1 className="font-bold text-xl">Office Address: </h1>
      <p> Level-4, 34, Awal Centre, Banani, Dhaka
      Support: web@programming-hero.com
      Helpline: 01322901105 , 01322502004
      (Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
      <AiFillCheckCircle className="text-2xl"/>

      <h1 className="font-bold text-xl">Manufacturer's Warrenty</h1>
      <p>A manufacturer's warranty is a standard guarantee that accompanies most new products. It assures the buyer that the product is free from defects in materials and workmanship for a specified period. </p>
      </div>
       
       <div className="flex flex-col justify-center items-center gap-3">
       <TbSelect className="text-2xl" />
       <h1 className="text-xl font-bold">Extented Warrenty</h1>
       <p>This warranty is called ‘enhanced’ since it covers what other manufacturer warranties cannot. It can be purchased at the time of purchasing the product or after some time and  deals with general problems.</p>
       </div>
      </div>
    </div>
  );
};

export default AboutUs;
