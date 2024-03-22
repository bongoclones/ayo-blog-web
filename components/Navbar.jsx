import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="">
      <div className=" hidden lg:flex  justify-between items-center p-8 mx-auto h-16 text-black bg-white ">
        <Logo />
        <ul className="flex">
          <li className="p-4 flex">
            <span className="pr-2 cursor-pointer"> Top </span> Stories
          </li>
          <li className="p-4 cursor-pointer">Entertaiment</li>
          <li className="p-4 cursor-pointer">Sports</li>
          <li className="p-4 cursor-pointer">Magazeti</li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
        <SearchInput />
      </div>
      <div className="w-full gradie bg-gradient-to-tr from-gray-400 to-white h-12"></div>
      {/* For mobile */}
      <div>
        <div className=" flex flex-col mx-2  lg:hidden">
          <div className="flex justify-start items-center gap-3">
            <BiMenuAltLeft size={30} className="" />
            <Logo />
            <SearchInput />
          </div>

          <ul className="flex gap-3 m-2">
            <li className="flex hover:underline decoration-red-600 decoration-4">
              <span className=" mr-2"> Top </span> Stories
            </li>
            <li className="">Entertaiment</li>
            <li className="">Sports</li>
            <li className="">Magazeti</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
