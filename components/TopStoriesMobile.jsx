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

const TopStoriesMobile = () => {
  return (
    <div className=" bg-white ">
      <div className="max-w-full flex">
        <div className="w-[820px] flex flex-col gap-2  my-1">
          <div className="h-full flex flex-col rounded-md">
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
            <div className="w-full m-2 flex flex-col justify-center text-black">
              <h1 className="text-l font-bold cursor-pointer hover:text-red-600 hover:underline decoration-red-600">
                Waziri wa Elimu Mkenda aitaka taasisi ya Elimu Tanzania kufanya
                hili kwa Walimu
              </h1>
              <p className="text-sm my-2 text-gray-600">
                Isaac Mnyagii mkazi wa kata ya sombetini katika jiji la Arusha
                ameachiwa…
              </p>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 text-xs mx-2 text-white">
                  {" "}
                  <IoMdTime />
                  July, 2023
                </p>
                <BsBookmark className="text-white hover:text-red-600" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center gap-4 items-center rounded-md">
            <div className="flex flex-col gap-6">
              <div className="flex">
                <div className="my-5 mr-3 ">
                  <h1 className="font-bold text-xs text-gray-800">
                    {" "}
                    xWalimu na walezi wanaofuata mbinu ya Montessori ni walinzi
                    na watekelezaji wa Sheria ya Mtoto, 2009.
                  </h1>

                  <div className="flex justify-between mt-4 mr-4 font-bold">
                    <div className="flex justify-between">
                      <div className="flex">
                        <p className="flex items-center font-light gap-2 text-xs mx-2">
                          <IoMdTime />
                          July, 2023
                        </p>
                      </div>
                    </div>

                    <BsBookmark className=" hover:text-red-600 font-bold" />
                  </div>
                </div>
                <div className="relative bg-slate-200">
                  <div className="absolute bottom-1.5">
                    <TopStory title="Top Stories" />
                  </div>
                  <img
                    className="rounded-lg "
                    src="https://millardayo.com/wp-content/uploads/2023/06/353822502_259501566725619_9084549509524337811_n-330x220.jpg"
                    alt="/"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="my-5 mr-3 ">
                  <h1 className="font-bold text-xs text-gray-800">
                    {" "}
                    xWalimu na walezi wanaofuata mbinu ya Montessori ni walinzi
                    na watekelezaji wa Sheria ya Mtoto, 2009.
                  </h1>

                  <div className="flex justify-between mt-4 mr-4 font-bold">
                    <div className="flex justify-between">
                      <div className="flex">
                        <p className="flex items-center font-light gap-2 text-xs mx-2">
                          <IoMdTime />
                          July, 2023
                        </p>
                      </div>
                    </div>

                    <BsBookmark className=" hover:text-red-600 font-bold" />
                  </div>
                </div>
                <div className="relative bg-slate-200">
                  <div className="absolute bottom-1.5">
                    <TopStory title="Top Stories" />
                  </div>
                  <img
                    className="rounded-lg "
                    src="https://millardayo.com/wp-content/uploads/2023/06/353822502_259501566725619_9084549509524337811_n-330x220.jpg"
                    alt="/"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="my-5 mr-3 ">
                  <h1 className="font-bold text-xs text-gray-800">
                    {" "}
                    xWalimu na walezi wanaofuata mbinu ya Montessori ni walinzi
                    na watekelezaji wa Sheria ya Mtoto, 2009.
                  </h1>

                  <div className="flex justify-between mt-4 mr-4 font-bold">
                    <div className="flex justify-between">
                      <div className="flex">
                        <p className="flex items-center font-light gap-2 text-xs mx-2">
                          <IoMdTime />
                          July, 2023
                        </p>
                      </div>
                    </div>

                    <BsBookmark className=" hover:text-red-600 font-bold" />
                  </div>
                </div>
                <div className="relative bg-slate-200">
                  <div className="absolute bottom-1.5">
                    <TopStory title="Top Stories" />
                  </div>
                  <img
                    className="rounded-lg "
                    src="https://millardayo.com/wp-content/uploads/2023/06/353822502_259501566725619_9084549509524337811_n-330x220.jpg"
                    alt="/"
                  />
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default TopStoriesMobile;
