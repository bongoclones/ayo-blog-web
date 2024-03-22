import React from "react";
import TopStory from "./TopStory";
import { IoIosTime, IoMdTime } from "react-icons/io";
import { BsBookmark, BsFacebook } from "react-icons/bs";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import TopStoriesMobile from "./TopStoriesMobile";

const TopStories = () => {
  return (
    <div className="max-h-full py-3 bg-white m-3">
      <h1 className="text-black w-fit -skew-x-12 border-x-2 font-bold text-lg border-red-700 px-2 ">
        TOP STORIES
      </h1>
      <div className="hidden lg:flex max-w-full mx-3 py-3">
        <div className="w-[820px] h-[520px] flex flex-col gap-2  my-1">
          <div className="h-full my-3 flex rounded-md">
            <div className="w-full m-2 flex flex-col justify-center text-black">
              <h1 className="bold text-2xl cursor-pointer hover:text-red-600 hover:underline decoration-red-600">
                Waziri wa Elimu Mkenda aitaka taasisi ya Elimu Tanzania kufanya
                hili kwa Walimu
              </h1>
              <p className="text-sm my-2 text-gray-600">
                Isaac Mnyagii mkazi wa kata ya sombetini katika jiji la Arusha
                ameachiwa…
              </p>
              <div className="flex justify-between">
                <p className="flex items-center gap-2 text-xs mx-2 text-gray-600">
                  <span className=" text-sm font-bold">Mkali Wao</span>
                  <IoMdTime />
                  July, 2023
                </p>
                <BsBookmark className="text-gray-600 hover:text-red-600" />
              </div>
            </div>
            <div className="w-full relative">
              <div className="absolute bottom-8">
                <TopStory title="Top Stories" />
              </div>

              <img
                className="h-full rounded-lg"
                src="https://millardayo.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-17-at-2.35.31-PM-615x410.jpeg"
                alt="/"
              />
            </div>
          </div>
          <div className="w-full flex justify-center gap-4 items-center rounded-md">
            <div className="h-full m-2 max-w-full flex flex-col justify-center">
              <div className="relative bg-slate-200 h-4/5 w-full m-2">
                <div className="absolute -bottom-1">
                  <TopStory title="Top Stories" />
                </div>
                <img
                  className="h-full w-full rounded-lg"
                  src="https://millardayo.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-17-at-2.35.31-PM-615x410.jpeg"
                  alt="/"
                />
              </div>
              <p className="m-2 font-bold text-gray-900 hover:underline decoration-red-600 ">
                Breaking: Jeshi latoa tamko kusitishwa kupokea Vijana wa JKTrrr
              </p>
              <div className="flex justify-between">
                <p className="flex items-center gap-2 text-xs mx-2 text-gray-600">
                  {" "}
                  <IoMdTime />
                  July, 2023
                </p>
                <BsBookmark className="text-gray-600 hover:text-red-600" />
              </div>
            </div>
            <div className="h-full m-2 max-w-full flex flex-col justify-center">
              <div className="relative bg-slate-200 h-4/5 w-full m-2">
                <div className="absolute -bottom-1">
                  <TopStory title="Top Stories" />
                </div>
                <img
                  className="h-full w-full rounded-lg"
                  src="https://millardayo.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-13-at-5.51.27-PM-615x410.png"
                  alt="/"
                />
              </div>
              <p className="m-2 font-bold text-gray-900 hover:underline decoration-red-600 ">
                Breaking: Jeshi latoa tamko kusitishwa kupokea Vijana wa JKTrrr
              </p>
              <div className="flex justify-between">
                <p className="flex items-center gap-2 text-xs mx-2 text-gray-600">
                  {" "}
                  <IoMdTime />
                  July, 2023
                </p>
                <BsBookmark className="text-gray-600 hover:text-red-600" />
              </div>
            </div>
            <div className="h-full m-2 max-w-full flex flex-col justify-center">
              <div className="relative bg-slate-200 h-4/5 w-full m-2">
                <div className="absolute -bottom-1">
                  <TopStory title="Top Stories" />
                </div>
                <img
                  className="h-full w-full rounded-lg"
                  src="https://millardayo.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-13-at-5.51.27-PM-615x410.png"
                  alt="/"
                />
              </div>
              <p className="m-2 font-bold text-gray-900 hover:underline decoration-red-600 ">
                Breaking: Jeshi latoa tamko kusitishwa kupokea Vijana wa JKTrrr
              </p>
              <div className="flex justify-between">
                <p className="flex items-center gap-2 text-xs mx-2 text-gray-600">
                  {" "}
                  <IoMdTime />
                  July, 2023
                </p>
                <BsBookmark className="text-gray-600 hover:text-red-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[420px] max-h-full flex flex-col gap-2 items-center my-3 mx-6">
          <div className="w-full h-full rounded-md bg-slate-500 flex justify-center items-center">
            Weather
          </div>
          <div className="w-full h-full rounded-md">
            <h1 className="text-black w-fit -skew-x-12 m-3 border-x-2 font-bold text-lg border-red-700 px-2">
              Follow Us
            </h1>

            <div className="grid grid-cols-2 gap-4 m-4">
              <div className="flex border-2 border-gray-200 cursor-pointer rounded-md p-4 hover:text-white hover:bg-blue-500 transition">
                <FaFacebookF size={32} className="" />
                <div className="flex flex-col ml-2">
                  <p className="text-sm ">3.03M Followers</p>{" "}
                  <p className="text-sm">Like</p>
                </div>
              </div>
              <div className="flex border-2 border-gray-200 cursor-pointer rounded-md p-4 hover:text-white hover:bg-blue-500 transition">
                <FaTwitter size={32} className="" />
                <div className="flex flex-col ml-2">
                  <p className="text-sm ">3.03M Followers</p>{" "}
                  <p className="text-sm">Follow</p>
                </div>
              </div>
              <div className="flex border-2 border-gray-200 cursor-pointer rounded-md p-4 hover:text-white hover:bg-purple-500 transition">
                <FaInstagram size={32} className=" " />
                <div className="flex flex-col ml-2">
                  <p className="text-sm ">3.03M Followers</p>{" "}
                  <p className="text-sm ">Follow</p>
                </div>
              </div>

              <div className="flex border-2 border-gray-200 cursor-pointer rounded-md p-4 hover:text-white hover:bg-red-600 transition">
                <FaYoutube size={32} className="" />
                <div className="flex flex-col ml-2">
                  <p className="text-sm ">3.03M Followers</p>{" "}
                  <p className="text-sm">Subscribe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className=" lg:hidden">
        <TopStoriesMobile />
      </div>
    </div>
  );
};

export default TopStories;
