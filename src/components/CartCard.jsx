import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import image2 from "../assets/images/image10.avif";

export const CartCard = () => {
  return (
    <div className="flex justify-between  w-full h-[120px] p-2  shadow-lg">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[60%] h-full overflow-hidden rounded">
          <img src={image2} className="object-cover" />
        </div>
        <div className="w-[50%] h-fll flex flex-col gap-5">
          <span className=" text-gray-600">Chicken soup</span>
          <div className="w-[100px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg text-green-500  border-green-500 border-2 font-semibold">
            <button className="w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-300">-</button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center">1</span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200">+</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-4">
        <span className="text-xl text-green-500 font-semibold">Rs.399</span>
        <RiDeleteBinLine  className="text-red-300 size-[30px]"/>
      </div>
    </div>
  );
};
