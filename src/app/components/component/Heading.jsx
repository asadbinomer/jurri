"use client";

import React from "react";

const Heading = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-8xl text-[#0D1C29] frank-ruhl ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading