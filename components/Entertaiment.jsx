import React from "react";
import TopStory from "./TopStory";
import { BsBookmark } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import EntertaimentMobile from "./EntertaimentMobile";

const Entertaiment = () => {
  return (
    <div className="max-h-full py-10 bg-black p-4">
      <h1 className="text-white w-fit -skew-x-12 m-3 border-x-2 font-bold text-lg border-red-700 px-2">
        Entertaiment
      </h1>
      <div className="hidden lg:flex w-full justify-center">
        <div className=" w-full">
          {" "}
          <div className="max-w-[820px] relative">
            <div className="absolute m-6 h-full flex flex-col gap-4 justify-center bg-gradient-to-b from-transparent to-black">
              <TopStory title="Entertaiment" />

              <h1 className="text-white text-4xl cursor-pointer font-bold">
                GSM Wamekusogezea bidhaa kwa punguza kubwa sana
              </h1>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 text-xs mx-2 text-white">
                  {" "}
                  <IoMdTime />
                  July, 2023
                </p>
                <BsBookmark className="text-white hover:text-red-600" />
              </div>
            </div>
            <img
              className="w-full max-h-full object-cover rounded-lg"
              src="https://millardayo.com/wp-content/uploads/2023/06/swvxc0lh2vfzhmirjmsa-860x484.webp"
              alt="/"
            />
          </div>
        </div>
        <div className="w-full flex gap-4 ml-3 justify-center">
          <div className=" w-full gap-2 text-white">
            {" "}
            <img
              className="w-full max-h-[500px] object-cover rounded-md"
              src="https://millardayo.com/wp-content/uploads/2023/06/nicki-minaj-iconic-looks-1-5ace41cf95f54db7916ec274b799db69-615x410.jpg"
              alt="/"
            />
            <h1 className="font-bold">
              Nilifanyiwa upasuaji kwasababu Lil Wayne alikuwa akitania kuhusu
              mwili wangu” – Nicki Minaj
            </h1>
            <h3 className="flex justify-between mt-4 font-bold">
              <div className="flex justify-between">
                <div className="flex">
                  <p> MkaliWao</p>
                  <p className="flex items-center font-light gap-2 text-xs mx-2 text-white">
                    <IoMdTime />
                    July, 2023
                  </p>
                </div>
              </div>
              <BsBookmark className="text-white hover:text-red-600 font-bold" />
            </h3>
          </div>
          <div className=" w-full gap-2 text-white">
            {" "}
            <img
              className="w-full max-h-[500px] object-cover rounded-md"
              src="https://millardayo.com/wp-content/uploads/2023/06/beyonce-tour-opener-2-615x410.jpg"
              alt="/"
            />
            <h1 className="font-bold">
              Nilifanyiwa upasuaji kwasababu Lil Wayne alikuwa akitania kuhusu
              mwili wangu” – Nicki Minaj
            </h1>
            <h3 className="flex justify-between mt-4 font-bold">
              <div className="flex justify-between">
                <div className="flex">
                  <p> MkaliWao</p>
                  <p className="flex items-center font-light gap-2 text-xs mx-2 text-white">
                    <IoMdTime />
                    July, 2023
                  </p>
                </div>
              </div>
              <BsBookmark className="text-white hover:text-red-600 font-bold" />
            </h3>
          </div>
        </div>
      </div>
      <div className=" lg:hidden">
        <EntertaimentMobile />
      </div>
    </div>
  );
};

export default Entertaiment;
