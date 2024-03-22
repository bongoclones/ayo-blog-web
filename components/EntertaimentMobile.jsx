import React from "react";
import TopStory from "./TopStory";
import { BsBookmark } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

const EntertaimentMobile = () => {
  return (
    <div className="flex flex-col max-h-full py-10 bg-black p-4">
      <div className="h-full flex flex-col my-3 rounded-md">
        <div className="w-full relative">
          <div className="absolute -bottom-1">
            <TopStory title="ENTERTAIMENT" />
          </div>

          <img
            className="h-full rounded-lg"
            src="https://millardayo.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-17-at-2.35.31-PM-615x410.jpeg"
            alt="/"
          />
        </div>
        <div className="w-full m-2 flex flex-col justify-center">
          <h1 className="text-l text-white font-bold cursor-pointer hover:text-red-600 hover:underline decoration-red-600">
            Waziri wa Elimu Mkenda aitaka taasisi ya Elimu Tanzania kufanya hili
            kwa Walimu
          </h1>

          <div className="flex justify-between">
            <p className="flex items-center gap-2 text-xs mx-2 text-white">
              Edwin
              <IoMdTime />
              July, 2023
            </p>
            <BsBookmark className="text-white hover:text-red-600" />
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col my-3 rounded-md">
        <div className="w-full relative">
          <div className="absolute -bottom-1">
            <TopStory title="ENTERTAIMENT" />
          </div>

          <img
            className="h-full rounded-lg"
            src="https://millardayo.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-17-at-2.35.31-PM-615x410.jpeg"
            alt="/"
          />
        </div>
        <div className="w-full m-2 flex flex-col justify-center">
          <h1 className="text-l text-white font-bold cursor-pointer hover:text-red-600 hover:underline decoration-red-600">
            Waziri wa Elimu Mkenda aitaka taasisi ya Elimu Tanzania kufanya hili
            kwa Walimu
          </h1>

          <div className="flex justify-between">
            <p className="flex items-center gap-2 text-xs mx-2 text-white">
              Edwin
              <IoMdTime />
              July, 2023
            </p>
            <BsBookmark className="text-white hover:text-red-600" />
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col my-3 rounded-md">
        <div className="w-full relative">
          <div className="absolute -bottom-1">
            <TopStory title="ENTERTAIMENT" />
          </div>

          <img
            className="h-full rounded-lg"
            src="https://millardayo.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-17-at-2.35.31-PM-615x410.jpeg"
            alt="/"
          />
        </div>
        <div className="w-full m-2 flex flex-col justify-center">
          <h1 className="text-l text-white font-bold cursor-pointer hover:text-red-600 hover:underline decoration-red-600">
            Waziri wa Elimu Mkenda aitaka taasisi ya Elimu Tanzania kufanya hili
            kwa Walimu
          </h1>

          <div className="flex justify-between">
            <p className="flex items-center gap-2 text-xs mx-2 text-white">
              Edwin
              <IoMdTime />
              July, 2023
            </p>
            <BsBookmark className="text-white hover:text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertaimentMobile;
