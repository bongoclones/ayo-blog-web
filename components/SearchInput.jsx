import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const SearchInput = () => {
  return (
    <div>
      <form className="flex items-center">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 p-2 text-sm rounded-lg"
            placeholder="Search..."
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 mr-2 bg-gray-800 border-gray-300 text-white rounded-lg hover:border-blue-700"
        >
          <IoMdArrowRoundForward />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
