import React from "react";
import { BsBookmark } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import TopStory from "./TopStory";
import Button from "./Button";

const LatestNewsMobile = () => {
  return (
    <div className="max-w-full mx-auto p-4">
      <h1 className="w-fit -skew-x-12 m-3 border-x-2 font-bold text-lg border-red-700 px-2">
        LATEST NEWS
      </h1>
      <div className=" gap-4 mt-2 ">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full m-2">
            <div className="absolute -bottom-1">
              <TopStory title="Top Stories" />
            </div>
            <img
              className="h-full w-full rounded-lg"
              src="https://millardayo.com/wp-content/uploads/2023/06/IMG-20230611-WA0023-330x220.jpg"
              alt="/"
            />
          </div>
          <div className=" my-2">
            <h1 className="text-l text-gray-800 font-bold tracking-wide cursor-pointer">
              Habari kubwa Magazetini Kenya leo June 11, 2023
            </h1>
            <div className="flex justify-between my-4 mr-4 font-bold">
              <div className="flex justify-between">
                <div className="flex">
                  MkaliWao
                  <p className="flex items-center font-light gap-2 text-xs mx-2">
                    <IoMdTime />
                    July, 2023
                  </p>
                </div>
              </div>
              <BsBookmark className=" hover:text-red-600 font-bold" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full m-2">
            <div className="absolute -bottom-1">
              <TopStory title="Top Stories" />
            </div>
            <img
              className="h-full w-full rounded-lg"
              src="https://millardayo.com/wp-content/uploads/2023/06/IMG-20230611-WA0023-330x220.jpg"
              alt="/"
            />
          </div>
          <div className=" my-2">
            <h1 className="text-l text-gray-800 font-bold tracking-wide cursor-pointer">
              Habari kubwa Magazetini Kenya leo June 11, 2023
            </h1>
            <div className="flex justify-between my-4 mr-4 font-bold">
              <div className="flex justify-between">
                <div className="flex">
                  MkaliWao
                  <p className="flex items-center font-light gap-2 text-xs mx-2">
                    <IoMdTime />
                    July, 2023
                  </p>
                </div>
              </div>
              <BsBookmark className=" hover:text-red-600 font-bold" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full m-2">
            <div className="absolute -bottom-1">
              <TopStory title="Top Stories" />
            </div>
            <img
              className="h-full w-full rounded-lg"
              src="https://millardayo.com/wp-content/uploads/2023/06/IMG-20230611-WA0023-330x220.jpg"
              alt="/"
            />
          </div>
          <div className=" my-2">
            <h1 className="text-l text-gray-800 font-bold tracking-wide cursor-pointer">
              Habari kubwa Magazetini Kenya leo June 11, 2023
            </h1>
            <div className="flex justify-between my-4 mr-4 font-bold">
              <div className="flex justify-between">
                <div className="flex">
                  MkaliWao
                  <p className="flex items-center font-light gap-2 text-xs mx-2">
                    <IoMdTime />
                    July, 2023
                  </p>
                </div>
              </div>
              <BsBookmark className=" hover:text-red-600 font-bold" />
            </div>
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default LatestNewsMobile;
