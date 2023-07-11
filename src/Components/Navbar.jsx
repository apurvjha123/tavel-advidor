import React, { useState } from "react";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import Home from "./Home";
import Search from "./Search";

const Navbar = () => {
  const [place, setPlace] = useState("restaurants");
  const [isOpen, SetisOpen] = useState(false);
  return (
    <>
      <div className="pt-4 px-4 ">
        <div className="flex justify-between border-b border-gray-300">
          {/* DATE */}
          <input
            type="date"
            className="bg-gray-50 mb-3 mt-1 border border-gray-300 text-gray-900 text-sm rounded-full py-2 px-5"
          />
          {/* Search */}
          <Search/>
          <div>
            {/* FILTER */}
            <button className="font-semibold font-sans border border-gray-300 hover:border-gray-900 mx-3 px-6 py-2 rounded-3xl active:bg-black duration-300">
              Filters
            </button>

            {/*Drop Down*/}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-full px-4 py-2 text-sm font-semibold border-2 border-gray-700 active:bg-black duration-300 shadow-sm hover:bg-gray-50"
                >
                  <button onClick={() => SetisOpen((prev) => !prev)}>
                    <div className="flex justify-start">
                      <div className="font-serif text-md">
                      {place}
                      </div>
                      {isOpen ? (
                        <AiOutlineUp className="pt-1 text-lg" />
                      ) : (
                        <AiOutlineDown className="pt-1 text-lg" />
                      )}
                    </div>
                  </button>
                </button>
              </div>
              {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <button
                      onClick={(e) => {
                        setPlace(e.target.value);
                        SetisOpen((prev) => !prev);
                      }}
                      value="restaurants"
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      Restaurants
                    </button>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={(e) => {
                        setPlace(e.target.value);
                        SetisOpen((prev) => !prev);
                      }}
                      value="hotels"
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      Hotels
                    </button>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={(e) => {
                        setPlace(e.target.value);
                        SetisOpen((prev) => !prev);
                      }}
                      value="attractions"
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      Attractions
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Home place={place} />
    </>
  );
};

export default Navbar;
