import React, {  useState } from "react";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";


import {useDispatch, useSelector} from "react-redux"
import {fetechApi} from "../redux/slice/apiSlice"
import Home from "./Home";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=> state)

  console.log(state)
  const [place,setPlace]= useState('restaurants')
  const [isOpen, SetisOpen] = useState(false);
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between">
          {/* DATE */}
          <input
            type="date"
            className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-full py-3 px-5"
          />

          <div>
            {/* FILTER */}
            <button onClick={(e)=> dispatch(fetechApi())} className="bg-gray-50 border border-gray-300 hover:border-gray-900 mx-3 px-6 py-3 rounded-3xl active:bg-black duration-300">
              Filters
            </button>

            {/*Drop Down*/}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-gray-50 px-4 py-3 text-sm font-semibold hover:border active:bg-black duration-300 border-gray-900 shadow-sm hover:bg-gray-50"
                >
                  <button onClick={() => SetisOpen((prev) => !prev)}>
                    <div className="flex justify-between">
                      {place}
                      {isOpen ? (
                        <AiOutlineUp className="pt-2 font-extrabold" />
                      ) : (
                        <AiOutlineDown className="pt-2 font-extrabold" />
                      )}
                    </div>
                  </button>
                </button>
              </div>
              {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <button onClick={()=>{setPlace('restaurants')}} className="text-gray-700 block px-4 py-2 text-sm">
                  Restaurants
                  </button>
                </div>

                <div className="py-1">
                  <button onClick={()=>{setPlace('hotels')}} className="text-gray-700 block px-4 py-2 text-sm">
                    Hotels
                  </button>
                </div>

                <div className="py-1">
                  <button onClick={()=>{setPlace('attractions')}} className="text-gray-700 block px-4 py-2 text-sm">
                    Attractions
                  </button>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Home place={place}/>
    </>
  );
};

export default Navbar;
