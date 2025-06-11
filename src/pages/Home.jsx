import React from "react";
import { Nav } from "../components/Nav";
import Categories from "../helper/Category";

export const Home = () => {
  return (
    <div className="bg-slate-200 w-full min-h-screen space-y-4">
      <Nav />
      <div className="flex flex-wrap justify-center gap-6 w-[100%] items-center">
        {Categories.map((item) => (
          <div className="size-[140px] flex flex-col gap-5 p-5 justify-start items-start bg-white  rounded shadow-xl font-semibold text-[20px] text-gray-600 hover:bg-green-200 cursor-pointer transition-all duration-300">
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
