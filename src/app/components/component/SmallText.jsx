'use client';

import React from "react";

const SmallText = ({ children, className = "" }) => {
  return (
    <p className={`text-[12px] text-[#cfa788] montserrat-500 capitalize !${className}`}>
      {children}
    </p>
  );
};

export default SmallText;
