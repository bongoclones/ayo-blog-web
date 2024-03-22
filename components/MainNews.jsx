"use client";
import React from "react";
import TopStory from "./TopStory";
import { IoMdTime } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import MainNewsMobile from "./MainNewsMobile";

const MainNews = () => {
  return (
    <div>
      <div className="hidden lg:flex max-h-[570px] border-red-300">
        <div className="max-w-[820px]  m-3 relative">
          <div className="absolute p-6 h-full flex flex-col gap-2 justify-center bg-gradient-to-b from-transparent to-black">
            <TopStory title="Top Stories" />
            <h1 className="text-white text-4xl cursor-pointer hover:underline decoration-red-600 font-bold">
              GSM Wamekusogezea bidhaa kwa punguza kubwa sana
            </h1>
            <p className="text-white">
              Mbali na kwamba GSM wanajivunia Mapinduzi makuwba na kuwa brand
              ...
            </p>
            <div className="flex justify-between">
              <p className="flex items-center gap-2 text-s mx-2 text-white">
                {" "}
                <IoMdTime />
                July, 2023
              </p>
              <BsBookmark className="text-white hover:text-red-600" />
            </div>
            <button className="text-white text-xs font-bold p-2 rounded-md border border-red-600 w-fit hover:bg-red-600 transition-all">
              Read More
            </button>
          </div>
          <img
            className="w-full max-h-full object-cover rounded-lg"
            src="https://millardayo.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-17-at-2.35.31-PM-860x574.jpeg"
            alt="/"
          />
        </div>
        <div className="w-full max-w-[420px] h-fit items-center my-3 mx-2">
          <div className="flex flex-col gap-5">
            <div className="w-full h-[280] relative rounded-md">
              <div className="absolute p-6 h-full  flex flex-col gap-2 justify-center bg-gradient-to-b from-transparent to-black">
                <TopStory title="Top Stories" />
                <h1 className="text-white text-lg cursor-pointer hover:underline decoration-red-600 font-bold">
                  Walimu na walezi wanaofuata mbinu ya Montessori ni walinzi na
                  watekelezaji wa Sheria ya Mtoto, 2009.
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
                className="w-full rounded-lg"
                src="https://millardayo.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-17-at-1.17.36-PM-420x280.jpeg"
                alt="/"
              />
            </div>
            <div className="w-full h-[280] relative rounded-md">
              <div className="absolute p-6 h-full flex flex-col gap-2 justify-center bg-gradient-to-b from-transparent to-black">
                <TopStory title="Top Stories" />
                <h1 className="text-white text-lg cursor-pointer hover:underline decoration-red-600 font-bold">
                  Walimu na walezi wanaofuata mbinu ya Montessori ni walinzi na
                  watekelezaji wa Sheria ya Mtoto, 2009.
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
                className="w-full max-h-full rounded-lg"
                src="https://millardayo.com/wp-content/uploads/2023/06/swvxc0lh2vfzhmirjmsa-860x484.webp"
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <MainNewsMobile />
      </div>
    </div>
  );
};

export default MainNews;
