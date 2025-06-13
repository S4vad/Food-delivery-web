import React, { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import Categories from "../helper/Category";
import { Card } from "../components/Card";
import { food_items } from "../helper/food";
import { IoMdClose } from "react-icons/io";
import { CartCard } from "../components/CartCard";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const Home = () => {
  const [items, setItems] = useState(food_items);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart);

  const search = () => {
    const query = searchQuery.toLowerCase();
    const result = food_items.filter(
      (item) =>
        item.food_name.toLowerCase().includes(query) ||
        item.food_category.toLowerCase().includes(query) ||
        item.food_type.toLowerCase().includes(query)
    );
    setItems(result);
  };

  useEffect(() => {
    search();
  }, [searchQuery]);

  const handleCategory = (category) => {
    if (category === "All") {
      setItems(food_items);
    } else {
      const data = food_items.filter((item) => item.food_category === category);
      setItems(data);
    }
  };

  let subtotal = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliverFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliverFee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setShowCart={setShowCart}
      />
      {searchQuery.length === 0 ? (
        <div className="flex flex-wrap justify-center gap-6 w-[100%] items-center">
          {Categories.map((item) => (
            <div
              className="size-[140px] flex flex-col gap-5 p-5 justify-start items-start bg-white  rounded shadow-xl font-semibold text-[20px] text-gray-600 hover:bg-green-200 cursor-pointer transition-all duration-300"
              onClick={() => handleCategory(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {items.length > 0 ? (
          items.map((item) => (
            <Card
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <span className="font-semibold text-green-500 text-xl">
            No Item found
          </span>
        )}
      </div>
      {/* //cart */}
      {showCart && (
        <div
          className="inset-0 fixed z-40 bg-black/40 "
          onClick={() => setShowCart(false)}
        ></div>
      )}

      <div
        className={`bg-white h-full fixed right-0 top-0 w-full sm:w-[60%] md:w-[40%] lg:w-[30%] transition-transform duration-500 transform ${
          showCart ? "translate-x-0" : "translate-x-full"
        } p-6 shadow-xl z-50 overflow-y-auto flex flex-col items-center`}
      >
        <header className="text-green-500 flex justify-between items-center w-full  text-xl">
          <span>Cart Items</span>
          <IoMdClose
            onClick={() => setShowCart(false)}
            className="cursor-pointer hover:text-green-700  "
          />
        </header>
        {cartItems.length > 0 ? (
          <>
            <div className="w-full mt-4 flex flex-col gap-2 ">
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  qty={item.qty}
                />
              ))}
            </div>
            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-6">
              <div className="w-full flex justify-between items-center">
                <span className="font-semibold text-lg text-gray-600">
                  Subtotal
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs-{subtotal}
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="font-semibold text-lg text-gray-600">
                  Delivery Fee
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs-{deliverFee}
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="font-semibold text-lg text-gray-600">
                  Taxes
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs-{taxes}
                </span>
              </div>
            </div>

            <div className="w-full flex justify-between items-center p-4">
              <span className="font-semibold text-xl text-gray-600">Total</span>
              <span className="text-green-400 font-semibold text-xl">
                Rs-{total}
              </span>
            </div>
            <button onClick={()=>toast.success("order placed")} className="w-[80%] p-3  rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all duration-300">
              Place Order
            </button>
          </>
        ) : (
          <div className="text-lg text-green-500 font-semibold text-center pt-20">
            Empty cart
          </div>
        )}
      </div>
    </div>
  );
};
