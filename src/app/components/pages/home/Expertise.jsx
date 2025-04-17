"use client";

import React from "react";
import SmallText from "../../component/SmallText";
import Heading from "../../component/Heading";
import Link from "../../component/Link";

const Expertise = () => {
  return (
    <>
      <div className="w-full px-20 py-32 flex items-center justify-center">
        <div className="w-full max-w-[1400px] flex flex-col items-center gap-20 text-center">
          <div className="flex flex-col items-center gap-5">
            <SmallText>Expertise</SmallText>
            <Heading className="!text-[64px]">Overview & Expertise</Heading>
            <Link>All Services</Link>
          </div>
          <div className="flex items-center gap-24 justify-between">
            <div className="w-[400px] flex flex-col gap-8">
              <div className="w-full flex items-center gap-4">
                <SmallText className="!min-w-fit text-nowrap">Business</SmallText>
                <div className="w-full h-[1px] bg-[#EAEFEF]"></div>
              </div>
              <div className="flex flex-col gap-0">
                <ArrowButton title="Corporate Governance" />
                <ArrowButton title="Business Expansion" />
                <ArrowButton title="Regulatory Compliance" />
                <ArrowButton title="Contract Negotiation" />
                <ArrowButton title="Business Structuring" />  
              </div>
            </div>
            <div className="w-[400px] flex flex-col gap-8">
              <div className="w-full flex items-center gap-4">
                <SmallText className="!min-w-fit text-nowrap">Financial Advisory</SmallText>
                <div className="w-full h-[1px] bg-[#EAEFEF]"></div>
              </div>
              <div className="flex flex-col gap-0">
                <ArrowButton title="Risk Management" />
                <ArrowButton title="Insurance Solutions" />
                <ArrowButton title="Tax Strategies" />
                <ArrowButton title="Retirement Planning" />
                <ArrowButton title="Wealth Management" />
              </div>
            </div>
            <div className="w-[400px] flex flex-col gap-8">
              <div className="w-full flex items-center gap-4">
                <SmallText className="!min-w-fit text-nowrap">Legal & Taxes</SmallText>
                <div className="w-full h-[1px] bg-[#EAEFEF]"></div>
              </div>
              <div className="flex flex-col gap-0">
                <ArrowButton title="Asset Protection" />
                <ArrowButton title="Risk Management" />
                <ArrowButton title="Dispute Resolution" />
                <ArrowButton title="Tax Compliance" />
                <ArrowButton title="Contract Review" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;

const ArrowButton = ({ title, onClick }) => (
  <button 
    onClick={onClick}
    className="group flex w-full items-center justify-between border-b border-[#EAEFEF] py-5 cursor-pointer"
  >
    <Heading className="!text-2xl group-hover:translate-x-[15px] transition-all duration-400">
      {title}
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
