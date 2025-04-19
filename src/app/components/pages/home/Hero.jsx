"use client";

import React from "react";
import Heading from "../../component/Heading";

const Hero = () => {
  return (
    <>
      <div className="w-full pt-24 flex flex-col gap-16">
        <div className="w-full px-20 flex items-center justify-center">
          <div className="w-full max-w-[1600px] flex items-end justify-between">
            <Heading className="max-w-[800px]">
              Your Partner for Business Advisory.
            </Heading>
            <p className="max-w-[600px] text-[22px] text-[#0D1C29] satoshi-500">
              Partner with us to access expert services tailored to optimize
              your operations, mitigate risks, and achieve your business goals
              effectively.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <div className="relative">
            <img
              src="/images/pages/home/hero/hero.avif"
              draggable={false}
              className="w-full select-none"
              alt=""
            />
            <img
              src="/images/pages/home/hero/bestLawyer.png"
              draggable={false}
              className="w-[140px] absolute left-[45px] bottom-[60px] select-none"
              alt=""
            />
          </div>
          <div className="w-full py-12 bg-[#132030] overflow-hidden">
            <div className="flex items-center animate-infinite-scroll">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex shrink-0 items-center gap-24 px-12">
                  <img src="/images/pages/home/hero/logo1.png" draggable={false} className="h-[30px] select-none" alt="" />
                  <img src="/images/pages/home/hero/logo2.png" draggable={false} className="h-[30px] select-none" alt="" />
                  <img src="/images/pages/home/hero/logo3.png" draggable={false} className="h-[30px] select-none" alt="" />
                  <img src="/images/pages/home/hero/logo4.png" draggable={false} className="h-[30px] select-none" alt="" />
                  <img src="/images/pages/home/hero/logo5.png" draggable={false} className="h-[30px] select-none" alt="" />
                  <img src="/images/pages/home/hero/logo6.png" draggable={false} className="h-[30px] select-none" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          display: flex;
          animation: scroll 35s linear infinite;
          width: max-content;
        }
      `}</style>
    </>
  );
};

export default Hero;
