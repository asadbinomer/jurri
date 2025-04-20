"use client";

import React from "react";
import Layout from "../components/component/Layout";
import SmallText from "../components/component/SmallText";
import Heading from "../components/component/Heading";
import ArrowButton from "../components/component/ArrowButton";
import Button from "../components/component/Button";

const Services = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-0">
        <div className="w-full px-20 pb-12 flex items-center justify-center">
          <div className="w-full max-w-[1600px] pt-24 flex flex-col gap-4">
            <SmallText>About</SmallText>
            <Heading className="max-w-[700px] text-8xl">
              Tailored Services for Your Needs.
            </Heading>
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <div className="w-full flex items-start gap-0">
            <div className="w-[50%] h-screen sticky top-0">
              <img
                src="/images/pages/services/services1.png"
                draggable={false}
                className="w-full h-full select-none object-cover"
                alt=""
              />
              <div className="p-16 absolute left-0 bottom-0 background2 w-full">
                <div className="w-[450px] p-10 flex flex-col gap-6 border border-[#fff]/12 bg-[#ffffff]/6 z-1 backdrop-blur-[15px]">
                  <img
                    src="/images/pages/services/icon.png"
                    draggable="false"
                    className="w-9 select-none"
                    alt=""
                  />
                  <div className="flex flex-col gap-4">
                    <Heading className="!text-[32px] text-white">
                      We're dedicated to empowering your growth journey ever
                      step.
                    </Heading>
                    <img
                      src="/images/pages/services/sign.png"
                      draggable="false"
                      className="w-[187px] h-[30px] select-none"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] min-h-screen px-24 py-32 flex items-center justify-center bg-[#F9F9F9] text-[#0D1C29]">
              <div className="w-full max-w-[600px] flex flex-col items-start gap-20">
                <svg
                  className="max-w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  style={{
                    userSelect: "none",
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    fill: "var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))",
                    color:
                      "var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))",
                    flexShrink: 0,
                  }}
                >
                  <g
                    style={{
                      color:
                        "var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))",
                    }}
                  >
                    <path d="M240,212H220V96a12,12,0,0,0-12-12H140V32a12,12,0,0,0-18.66-10l-80,53.33a12,12,0,0,0-5.34,10V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM208,92a4,4,0,0,1,4,4V212H140V92ZM44,85.34A4,4,0,0,1,45.78,82l80-53.33A4,4,0,0,1,132,32V212H44ZM108,112v16a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm-32,0v16a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm0,56v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Zm32,0v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Z" />
                  </g>
                </svg>
                <div className="w-full flex flex-col gap-3">
                  <Heading className="!text-[64px]">
                    Drive Success with Expert Business Solutions
                  </Heading>
                  <div className="flex flex-col gap-8">
                    <p className="text-[#0D1C2999] satoshi-400">
                      Our Business Services encompass a wide array of offerings
                      designed to support entrepreneurs and businesses at every
                      stage of their journey. From initial entity formation to
                      ongoing compliance, strategic planning, and beyond, we
                      provide personalized solutions that align with your
                      objectives and fuel growth.
                    </p>
                    <p className="text-[#0D1C2999] satoshi-400">
                      Whether you're a startup seeking guidance on structuring
                      your business, an established company in need of contract
                      drafting and negotiation, or an enterprise navigating
                      complex regulatory landscapes, our team is here to help.
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-8">
                  <div className="w-full flex items-center gap-4">
                    <SmallText className="min-w-fit">
                      Business Services
                    </SmallText>
                    <div className="w-full h-[1px] bg-[#e8eded]"></div>
                  </div>
                  <div className="flex flex-col gap-0">
                    <ArrowButton>Corporate Governance</ArrowButton>
                    <ArrowButton>Business Expansion</ArrowButton>
                    <ArrowButton>Regulatory Compliance</ArrowButton>
                    <ArrowButton>Contract Negotiation</ArrowButton>
                    <ArrowButton>Business Structuring</ArrowButton>
                  </div>
                </div>
                <div className="p-16 flex flex-col gap-20 bg-[#132030] text-white">
                  <img
                    src="/images/pages/services/cardicon.png"
                    className="w-10 select-none"
                    draggable="false"
                    alt=""
                  />
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                      <Heading className="max-w-[240px] !text-[32px] text-white">
                        Ignite Your Business Growth!
                      </Heading>
                      <p className="text-[#ffffffB3] satoshi-400">
                        Ready to take your business to the next level? Contact
                        us now to explore tailored solutions that drive success.
                      </p>
                    </div>
                    <Button
                      type="secondary"
                      className="w-full !text-xs pt-3.5 pb-3"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse items-start gap-0">
            <div className="w-[50%] h-screen sticky top-0">
              <img
                src="/images/pages/services/services2.png"
                draggable={false}
                className="w-full h-full select-none object-cover"
                alt=""
              />
              <div className="p-16 absolute right-0 bottom-0 background2 w-full flex items-end justify-end">
                <div className="w-[450px] p-10 flex flex-col gap-6 border border-[#fff]/12 bg-[#ffffff]/6 z-1 backdrop-blur-[15px]">
                  <img
                    src="/images/pages/services/icon.png"
                    draggable="false"
                    className="w-9 select-none"
                    alt=""
                  />
                  <div className="flex flex-col gap-4">
                    <Heading className="!text-[32px] text-white">
                      We're committed to helping you build a secure and
                      prosperous future.
                    </Heading>
                    <img
                      src="/images/pages/services/sign2.png"
                      draggable="false"
                      className="w-[187px] h-[30px] select-none"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] min-h-screen px-24 py-32 flex items-center justify-center bg-[#F9F9F9] text-[#0D1C29]">
              <div className="w-full max-w-[600px] flex flex-col items-start gap-20">
                <svg
                  className="max-w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  style={{
                    userSelect: "none",
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    fill: "var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))",
                    color:
                      "var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))",
                    flexShrink: 0,
                  }}
                >
                  <g
                    style={{
                      color:
                        "var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))",
                    }}
                  >
                    <path d="M24,100H52v72H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8H204V100h28a4,4,0,0,0,2.1-7.41l-104-64a4,4,0,0,0-4.2,0l-104,64A4,4,0,0,0,24,100Zm36,0h40v72H60Zm88,0v72H108V100Zm48,72H156V100h40ZM128,36.7,217.87,92H38.13ZM244,208a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H240A4,4,0,0,1,244,208Z" />
                  </g>
                </svg>

                <div className="w-full flex flex-col gap-3">
                  <Heading className="!text-[64px]">
                    Elevate Your Finances with Proven Strategies
                  </Heading>
                  <div className="flex flex-col gap-8">
                    <p className="text-[#0D1C2999] satoshi-400">
                      Our Financial Advisory services are designed to empower
                      individuals and businesses to make informed financial
                      decisions and secure their financial futures. Whether
                      you're planning for retirement, managing investments, or
                      navigating complex tax implications, our team of
                      experienced advisors provides personalized solutions
                      tailored to your unique objectives and circumstances.
                    </p>
                    <p className="text-[#0D1C2999] satoshi-400">
                      We offer comprehensive wealth management strategies,
                      retirement planning, investment advisory services, tax
                      planning, and more, ensuring that you have the tools and
                      guidance needed to achieve your financial aspirations.
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-8">
                  <div className="w-full flex items-center gap-4">
                    <SmallText className="min-w-fit">
                      Financial Services
                    </SmallText>
                    <div className="w-full h-[1px] bg-[#e8eded]"></div>
                  </div>
                  <div className="flex flex-col gap-0">
                    <ArrowButton>Risk Management</ArrowButton>
                    <ArrowButton>Insurance Solutions</ArrowButton>
                    <ArrowButton>Tax Strategies</ArrowButton>
                    <ArrowButton>Retirement Planning</ArrowButton>
                    <ArrowButton>Wealth Management</ArrowButton>
                  </div>
                </div>
                <div className="p-16 flex flex-col gap-20 bg-[#132030] text-white">
                  <img
                    src="/images/pages/services/cardicon.png"
                    className="w-10 select-none"
                    draggable="false"
                    alt=""
                  />
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                      <Heading className="max-w-[240px] !text-[32px] text-white">
                        Secure Your Financial Future!
                      </Heading>
                      <p className="text-[#ffffffB3] satoshi-400">
                        Take control of your financial destiny. Contact us today
                        to explore personalized financial strategies that pave
                        the way for success.
                      </p>
                    </div>
                    <Button
                      type="secondary"
                      className="w-full !text-xs pt-3.5 pb-3"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-start gap-0">
            <div className="w-[50%] h-screen sticky top-0">
              <img
                src="/images/pages/services/services3.webp"
                draggable={false}
                className="w-full h-full select-none object-cover"
                alt=""
              />
              <div className="p-16 absolute left-0 bottom-0 background2 w-full">
                <div className="w-[450px] p-10 flex flex-col gap-6 border border-[#fff]/12 bg-[#ffffff]/6 z-1 backdrop-blur-[15px]">
                  <img
                    src="/images/pages/services/icon.png"
                    draggable="false"
                    className="w-9 select-none"
                    alt=""
                  />
                  <div className="flex flex-col gap-4">
                    <Heading className="!text-[32px] text-white">
                      We're dedicated to empowering your growth journey ever
                      step.
                    </Heading>
                    <img
                      src="/images/pages/services/sign.png"
                      draggable="false"
                      className="w-[187px] h-[30px] select-none"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] min-h-screen px-24 py-32 flex items-center justify-center bg-[#F9F9F9] text-[#0D1C29]">
              <div className="w-full max-w-[600px] flex flex-col items-start gap-20">
                <svg
                  className="max-w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  style={{
                    userSelect: "none",
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    fill: "var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))",
                    color:
                      "var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))",
                    flexShrink: 0,
                  }}
                >
                  <g
                    style={{
                      color:
                        "var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))",
                    }}
                  >
                    <path d="M120,180H108v-8a24,24,0,0,0-48,0v8H48a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V184A4,4,0,0,0,120,180Zm-52-8a16,16,0,0,1,32,0v8H68Zm48,48H52V188h64ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v88a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4H160a4,4,0,0,0,0,8h40a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156Z" />
                  </g>
                </svg>

                <div className="w-full flex flex-col gap-3">
                  <Heading className="!text-[64px]">
                    Protect Your Interests with Expert Counsel
                  </Heading>
                  <div className="flex flex-col gap-8">
                    <p className="text-[#0D1C2999] satoshi-400">
                      Our Legal & Taxes services offer comprehensive support to
                      individuals and businesses, addressing a wide range of
                      legal and tax-related challenges. From contract review and
                      drafting to tax planning, dispute resolution, and
                      regulatory compliance, our team of skilled attorneys and
                      tax professionals delivers tailored solutions to protect
                      your interests and minimize risk.
                    </p>
                    <p className="text-[#0D1C2999] satoshi-400">
                      Whether you're facing a complex legal issue, need
                      assistance with tax planning strategies, or seek guidance
                      on compliance matters, we're here to provide the expertise
                      and support you need to navigate these complexities
                      effectively.
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-8">
                  <div className="w-full flex items-center gap-4">
                    <SmallText className="min-w-fit">Legal Services</SmallText>
                    <div className="w-full h-[1px] bg-[#e8eded]"></div>
                  </div>
                  <div className="flex flex-col gap-0">
                    <ArrowButton>Asset Protection</ArrowButton>
                    <ArrowButton>Risk Management</ArrowButton>
                    <ArrowButton>Dispute Resolution</ArrowButton>
                    <ArrowButton>Tax Compliance</ArrowButton>
                    <ArrowButton>Contract Review</ArrowButton>
                  </div>
                </div>
                <div className="p-16 flex flex-col gap-20 bg-[#132030] text-white">
                  <img
                    src="/images/pages/services/cardicon.png"
                    className="w-10 select-none"
                    draggable="false"
                    alt=""
                  />
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                      <Heading className="!text-[32px] text-white">
                        Don't let legal or tax challenges jeopardize your
                        future.
                      </Heading>
                      <p className="text-[#ffffffB3] satoshi-400">
                        Don't let legal or tax challenges jeopardize your
                        future. Contact us today to secure expert counsel and
                        safeguard your interests.
                      </p>
                    </div>
                    <Button
                      type="secondary"
                      className="w-full !text-xs pt-3.5 pb-3"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
