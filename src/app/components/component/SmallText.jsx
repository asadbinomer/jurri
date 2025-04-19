'use client';

import React from "react";

const SmallText = ({ children, className }) => {
  return (
    <p className={`min-w-fit text-[12px] text-[#cfa788] montserrat-500 uppercase !${className}`}>
      {children}
    </p>
  );
};

export default SmallText;
