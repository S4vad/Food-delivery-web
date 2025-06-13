import React from "react";
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import toast from "react-hot-toast";

export const Card = ({ name, image, id, price, type }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[280px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 cursor-pointer ">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} className="object-cover" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="flex justify-between items-center w-full">
        <div className="text-lg font-bold text-green-500">{price}-Rs</div>
        <div className="flex justify-center items-center gap-2 text-lg text-green-500">
          {type == "veg" ? <LuLeafyGreen /> : <GiChickenOven />}

          <span>{type}</span>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(addItem({ id: id, name: name, image: image, price: price }));
          toast.success("Item added");
        }}
        className="w-full p-3  rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all duration-300"
      >
        Add to dish
      </button>
    </div>
  );
};
