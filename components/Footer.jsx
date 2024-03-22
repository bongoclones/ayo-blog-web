import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="max-w-full m-4">
      <div className="flex flex-col lg:flex-row gap-2 justify-between">
        <div className="w-[250px]">
          <spa className="text-white bg-red-600 py-2 px-0.5 leading-3">To</spa>{" "}
          <span className="font-bold text-gray-800">
            be recognized as Africa’s leading and most trusted online media
            network providing quality content across all our media platforms by
            2025
          </span>
        </div>
        <div className="w-[350px]">
          <h1 className="text-gray-800 text-l my-3 lg:mb-3">
            Sign Up for Our Newsletter
          </h1>
          <p>
            Subscribe to our newsletter to get our newest articles instantly!
          </p>
          <h1 className="mt-3">Email address</h1>
          <div>
            <input
              type="text"
              className="mb-3 text-sm bg-gray-100 w-2/3 p-2 rounded-md focus:no-underline"
              placeholder="Your Email address"
            />
          </div>

          <div className="flex justify-center items-center rounded-md bg-red-600 my-4 transition-all w-fit">
            <button className="p-3 text-xs text-white transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Logo />
        <div className="w-[350px] flex justify-end gap-3">
          <h1 className="mr-2">Follow Us</h1>
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      <div className="flex justify-center text-gray-500 m-5 text-sm">
        <h1> © 2023 AYOBlog. Designed by F&A. All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
