import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

export const Nav = () => {
  return (
    <div className="w-full h-[100px]  flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded shadow-md">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form className="w-[45%] md:w-[70%]  h-[60px] flex items-center bg-white px-5 rounded gap-5 shadow-md">
        <IoSearch className="text-green-500 size-6" />
        <input
          type="text"
          placeholder="Search Items...."
          className="w-full outline-none text-[16px] md:text-[20px]"
        />
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded shadow-md relative">
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          0
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
};
