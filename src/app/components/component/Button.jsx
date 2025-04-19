'use client';

import React from 'react'

const Button = ({ type = 'primary', children, className }) => {
  return (
    <button className={`group relative h-10 flex items-center justify-center px-6 py-3 text-[12px] leading-none rounded-full overflow-hidden cursor-pointer ${className} ${type === 'primary' ? 'text-white bg-[#132030] uppercase' : 'uppercase text-[#132030] bg-[#EAD3BC]'}`}>
      <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
        <span className={`w-full absolute left-1/2 -translate-x-1/2 top-0.5 transition-all duration-500 ease-in-out group-hover:-top-4 montserrat-500 ${type === 'secondary' ? 'left-1/2 -translate-x-1/2' : ''}`}>
          {children}
        </span>
        <span className={`w-full absolute left-1/2 -translate-x-1/2 top-4 transition-all duration-500 ease-in-out group-hover:top-0.5 montserrat-500 ${type === 'secondary' ? 'left-1/2 -translate-x-1/2' : ''}`}>
          {children}
        </span>
      </div>
    </button>
  );
};

export default Button