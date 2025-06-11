import React, { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import Categories from "../helper/Category";
import { Card } from "../components/Card";
import { food_items } from "../helper/food";
import { IoMdClose } from "react-icons/io";
import { CartCard } from "../components/CartCard";
import { useSelector } from "react-redux";

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

      <div
        className={`bg-white h-full fixed right-0 top-0 w-full sm:w-[60%] md:w-[40%] lg:w-[30%] transition-transform duration-500 transform ${
          showCart ? "translate-x-0" : "translate-x-full"
        } p-6 shadow-xl z-50 overflow-y-scroll`} 
      >
        <header className="text-green-500 flex justify-between items-center w-full  text-xl">
          <span>Cart Items</span>
          <IoMdClose
            onClick={() => setShowCart(false)}
            className="cursor-pointer hover:text-green-700  "
          />
        </header>
        <div>
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
