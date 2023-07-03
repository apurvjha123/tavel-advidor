import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  return (
    <>
    {/* Search Bar */}
    <form>
            <label
              className="m-4 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Where to?
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch />
              </div>
              <input
                type="search"
                className="p-3 pl-9 pr-60 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                placeholder="Where to ?"
                required
              />
            </div>
          </form>
    </>
  )
}

export default Search