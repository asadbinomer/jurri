"use client";

import React from "react";
import SmallText from "../../component/SmallText";
import Heading from "../../component/Heading";
import Link from "../../component/Link";
import ArrowButton from "../../component/ArrowButton";

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