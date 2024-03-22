import React from "react";

const TopStory = ({ title }) => {
  return (
    <p className="bg-[rgb(242,29,29)] text-white bottom-1 -mx-2 w-fit p-1 text-[10px] -skew-x-12 px-2  ">
      {title}
    </p>
  );
};

export default TopStory;
