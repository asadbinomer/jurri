import React from "react";
import Heading from "./Heading";

const Card = ({ type = "primary", label, number, description, img }) => {
  const isPrimary = type === "primary";

  return (
    <div className={`w-full h-[450px] flex ${isPrimary ? "" : "flex-row-reverse"} gap-0`}>
      <div
        className={`w-1/2 h-full p-16 flex flex-col items-start justify-between ${
          isPrimary
            ? "bg-[#132030] text-white"
            : "bg-[#EAD3BC] text-[#0D1C29]"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-5 h-[1px] ${
              isPrimary ? "bg-[#ffffff1A]" : "bg-[#0D1C2933]"
            }`}
          ></div>
          <p
            className={`min-w-fit text-[12px] uppercase montserrat-500 ${
              isPrimary ? "text-white" : "text-[#0D1C29]"
            }`}
          >
            {label}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Heading className={`text-[80px] ${
              isPrimary ? "text-white" : "text-[#0D1C29]"
            }`}>{number}</Heading>
          <p
            className={`satoshi-400 ${
              isPrimary ? "text-[#ffffffB3]" : "text-[#0D1C29]"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <img
        src={img}
        className="w-1/2 select-none"
        draggable={false}
        alt={label}
      />
    </div>
  );
};

export default Card;
