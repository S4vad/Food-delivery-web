import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeItem } from "../redux/cartSlice";
import toast from "react-hot-toast";

export const CartCard = ({ name, image, price, id, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between  w-full h-[120px] p-2  shadow-lg">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[60%] h-full overflow-hidden rounded">
          <img src={image} className="object-cover" />
        </div>
        <div className="w-[50%] h-fll flex flex-col gap-5">
          <span className=" text-gray-600">{name} </span>
          <div className="w-[100px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg text-green-500  border-green-500 border-2 font-semibold">
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-300"
              onClick={() => {
                qty > 1 ? dispatch(decrementQty(id)) : qty;
              }}
            >
              {/* preventing negative value */}-
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200"
              onClick={() => dispatch(incrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-4">
        <span className="text-xl text-green-500 font-semibold">{price}-Rs</span>
        <RiDeleteBinLine
          onClick={() => {
            dispatch(removeItem(id));
            toast.error('Item removed')
          }}
          className="text-red-300 size-[30px] cursor-pointer"
        />
      </div>
    </div>
  );
};
