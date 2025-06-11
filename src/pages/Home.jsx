import React from "react";
import { Nav } from "../components/Nav";
import Categories from "../helper/Category";
import { Card } from "../components/Card";
import { food_items } from "../helper/food";

export const Home = () => {
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      <div className="flex flex-wrap justify-center gap-6 w-[100%] items-center">
        {Categories.map((item) => (
          <div className="size-[140px] flex flex-col gap-5 p-5 justify-start items-start bg-white  rounded shadow-xl font-semibold text-[20px] text-gray-600 hover:bg-green-200 cursor-pointer transition-all duration-300">
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {food_items.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
      =
    </div>
  );
};
