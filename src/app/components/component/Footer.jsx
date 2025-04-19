"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Heading from "./Heading";
import SmallText from "./SmallText";
import Button from "./Button";

const Footer = () => {
  const pathname = usePathname();

  const pagesLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const cmsLinks = [
    { name: "Case Studies", path: "/caseStudies" },
    { name: "Case Study Single", path: "/caseStudySingle" },
    { name: "Careers", path: "/careers" },
    { name: "Career Single", path: "/careerSingle" },
  ];

  const utilityLinks = [
    { name: "404 Error Page", path: "/error" }
  ];

  const renderLinks = (links) =>
    links.map((link) => {
      const isActive = pathname === link.path;
      return (
        <Link
          key={link.name}
          href={link.path}
          className={`flex items-center gap-1 group cursor-pointer transition-all duration-300 ${
            isActive ? "text-white" : "text-[#ffffffB3]"
          }`}
        >
          <div className="w-1 h-[1px] bg-[#C5A788] group-hover:w-2.5 transition-all duration-500"></div>
          <p className="text-xs montserrat-500 group-hover:text-white leading-none uppercase">
            {link.name}
          </p>
        </Link>
      );
    });

  return (
    <div className="w-full flex flex-col gap-0 text-white">
      <div className="w-full px-16 py-12 flex items-center justify-center bg-[#1B273A]">
        <div className="w-full max-w-[1600px] flex items-center justify-between">
          <Heading className="min-w-fit !text-5xl text-white">
            Contact Us
          </Heading>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <PhoneIcon />
              <span className="text-xl frank-ruhl leading-none">
                +42 20 123 456 78
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon />
              <span className="text-xl frank-ruhl leading-none">
                jurry-law@gola.io
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[530px] px-16 pt-24 pb-12 flex items-center justify-center bg-[#132030]">
        <div className="w-full h-full max-w-[1600px] flex flex-col gap-24">
          <div className="grid grid-cols-4 h-full gap-12">
            <div className="h-full flex flex-col justify-between">
              <img
                src="/images/component/footer/logo.avif"
                className="w-[130px] select-none"
                draggable={false}
                alt="Footer Logo"
              />
              <div className="flex items-center gap-2">
                <SocialIcons />
              </div>
            </div>

            <div className="h-full flex flex-col gap-8 justify-between">
              <div className="flex items-center gap-4">
                <SmallText>Pages</SmallText>
                <div className="w-full h-[1px] bg-[#ffffff1A]"></div>
              </div>
              <div className="flex flex-col gap-5">
                {renderLinks(pagesLinks)}
              </div>
              <Button type="" className="!w-[170px]">
                More Templates
              </Button>
            </div>

            <div className="h-full flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <SmallText>CMS</SmallText>
                <div className="w-full h-[1px] bg-[#ffffff1A]"></div>
              </div>
              <div className="flex flex-col gap-5">{renderLinks(cmsLinks)}</div>
            </div>

            <div className="h-full flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <SmallText>Utility Pages</SmallText>
                <div className="w-full h-[1px] bg-[#ffffff1A]"></div>
              </div>
              <div className="flex flex-col gap-5">
                {renderLinks(utilityLinks)}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center text-center gap-4">
            <div className="w-full h-[1px] bg-[#ffffff]/10"></div>
            <p className="text-xs text-[#ffffffB3] montserrat-500 uppercase">
              © Made by Pawel{" "}
              <span className="text-white underline">Gola Templates</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SocialIcons = () => (
  <>
    <LinkedIn />
    <Pinterest />
    <Twitter />
  </>
);

const PhoneIcon = () => (
  <svg
    className="max-w-6"
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
      color="var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))"
      weight="thin"
    >
      <path d="M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z" />
    </g>
  </svg>
);

const MailIcon = () => (
  <svg
    className="max-w-6"
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
      color="var(--token-7fb34e38-9735-4a47-90c2-6b550b2a8099, rgb(197, 167, 136))"
      weight="thin"
    >
      <path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z" />
    </g>
  </svg>
);

const Twitter = ({
  color = "#c5a788",
  size = 24,
  className = "",
  weight = "thin",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    className={className}
    style={{
      width: size,
      height: size,
      fill: color,
      color: color,
      flexShrink: 0,
    }}
  >
    <g color={color} weight={weight}>
      <path d="M243.7,70.47A4,4,0,0,0,240,68H207.2a44.57,44.57,0,0,0-39.15-24,42.76,42.76,0,0,0-30.88,12.55A43.85,43.85,0,0,0,124,88V99.16c-43.65-9.39-80-45.6-80.39-46a4,4,0,0,0-4.19-.95,4,4,0,0,0-2.63,3.41c-4.2,46.62,9.27,77.71,21.31,95.59A103.68,103.68,0,0,0,82.35,177c-15.68,20.49-43.46,31.13-43.75,31.24a4,4,0,0,0-1.93,6c.27.4,2.79,4,9.54,7.36C54.73,225.84,66.1,228,80,228c69.09,0,126.73-53.56,131.89-122.23l30.94-30.94A4,4,0,0,0,243.7,70.47Zm-38.53,30.7a4,4,0,0,0-1.16,2.58C199.85,168.94,145.38,220,80,220c-17.85,0-27.63-3.89-32.5-6.87,10.37-4.82,31.45-16.34,43.83-34.91a4,4,0,0,0,.56-3.12A3.93,3.93,0,0,0,90,172.55c-.13-.08-13.39-8-25.52-26.15C54,130.71,42.39,104.11,44.19,64.65c13.17,11.62,45.48,37,83.15,43.3a4,4,0,0,0,4.66-4V88a36,36,0,0,1,10.79-25.76A35,35,0,0,1,168,52c14.2.18,27.49,8.86,33.06,21.61A4,4,0,0,0,204.67,76h25.67Z"></path>
    </g>
  </svg>
);

const Pinterest = ({
  color = "#c5a788",
  size = 24,
  className = "",
  weight = "thin",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    className={className}
    style={{
      width: size,
      height: size,
      fill: color,
      color: color,
      flexShrink: 0,
    }}
  >
    <g color={color} weight={weight}>
      <path d="M220,112c0,21.53-7.5,41.18-21.12,55.34C186.26,180.47,169.17,188,152,188c-21.35,0-33.52-8.76-39.76-15.57L99.89,224.92A4,4,0,0,1,96,228a4.2,4.2,0,0,1-.92-.11,4,4,0,0,1-3-4.81l32-136a4,4,0,0,1,7.78,1.84l-17.28,73.45C117,166.42,127,180,152,180c29.49,0,60-25.44,60-68A76,76,0,1,0,70.17,150a4,4,0,0,1-6.93,4A84,84,0,1,1,220,112Z"></path>
    </g>
  </svg>
);

const LinkedIn = ({
  color = "#c5a788",
  size = 24,
  className = "",
  weight = "thin",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    className={className}
    style={{
      width: size,
      height: size,
      fill: color,
      color: color,
      flexShrink: 0,
    }}
  >
    <g color={color} weight={weight}>
      <path d="M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z"></path>
    </g>
  </svg>
);
