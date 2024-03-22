import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center cursor-pointer m-4">
      <div className="flex justify-center items-center rounded-md bg-gray-200 hover:bg-red-600 my-4 transition-all w-fit">
        <button className="p-1.5  tex text-gray-700 px-6 hover:text-white transition-all">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Button;
