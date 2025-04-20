import React from "react";
import Heading from "./Heading";

const ArrowButton = ({ children , onClick }) => (
  <button
    onClick={onClick}
    className="group flex w-full items-center justify-between border-b border-[#EAEFEF] py-5 cursor-pointer"
  >
    <Heading className="!text-2xl group-hover:translate-x-[15px] transition-all duration-400">
      {children}
    </Heading>

    <svg
      className="w-6 transition-all duration-500 group-hover:-rotate-45 text-[#D0B79E]"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor" 
        d="M218.83 130.83l-72 72a4 4 0 01-5.66-5.66L206.34 132H40a4 4 0 010-8h166.34L141.17 58.83a4 4 0 015.66-5.66l72 72a4 4 0 010 5.66z"
      />
    </svg>
  </button>
);

export default ArrowButton;
