import React from "react";

const AnimatedLink = ({
  children,
  color = "#0D1C29",
  className = "",
  linClass= "",
}) => {
  return (
    <div
      className={`w-fit flex flex-col gap-0 uppercase cursor-pointer group ${className}`}
    >
      <p className={`text-xs montserrat-500 text-[${color}]`}>{children}</p>
      <div
        className={`w-full h-[1px] group-hover:w-[20%] bg-[#151515] transition-all duration-400 ease-in-out ${linClass} `}
      ></div>
    </div>
  );
};

export default AnimatedLink;
