"use client";

import React from "react";
import SmallText from "../../component/SmallText";
import Heading from "../../component/Heading";
import Button from "../../component/Button";

const teamMembers = [
  {
    id: 1,
    image: "/images/pages/about/ourTeam/Member1.avif",
    position: "Senior Attorney",
    name: "Samantha Lee",
    description:
      "Efficiently managing office tasks and facilitating smooth workflow for legal team.",
    socialLinks: ["LinkedIn", "Pinterest", "Twitter"],
  },
  {
    id: 2,
    image: "/images/pages/about/ourTeam/Member2.avif",
    position: "Associate Attorney",
    name: "David Wilson",
    description:
      "Legal advocate committed to delivering justice and favorable outcomes for clients.",
    socialLinks: ["LinkedIn", "Pinterest", "Twitter"],
  },
  {
    id: 3,
    image: "/images/pages/about/ourTeam/Member3.avif",
    position: "Paralegal",
    name: "Jessica Martinez",
    description:
      "Providing valuable support to attorneys with legal research and documentation.",
    socialLinks: ["LinkedIn", "Pinterest", "Twitter"],
  },
  {
    id: 4,
    image: "/images/pages/about/ourTeam/Member4.avif",
    position: "Legal Secretary",
    name: "Samantha Lee",
    description:
      "Efficiently managing office tasks and facilitating smooth workflow for legal team.",
    socialLinks: ["LinkedIn", "Pinterest", "Twitter"],
  },
  {
    id: 5,
    image: "/images/pages/about/ourTeam/Member5.avif",
    position: "Associate Attorney",
    name: "Daniel Watson",
    description:
      "Ensuring regulatory compliance and mitigating risks for clients with precision.",
    socialLinks: ["LinkedIn", "Pinterest", "Twitter"],
  },
  {
    id: 6,
    image: "/images/pages/about/ourTeam/Member6.avif",
    position: "Tax Consultant",
    name: "Emily Johnson",
    description:
      "Expertise in tax law, helping clients navigate complex tax matters.",
    socialLinks: ["LinkedIn", "Pinterest", "Twitter"],
  },
  {
    id: 7,
    image: "/images/pages/about/ourTeam/Member7.avif",
    position: "Associate Attorney",
    name: "David Wilson",
    description:
      "Legal advocate committed to delivering justice and favorable outcomes for clients.",
    socialLinks: ["LinkedIn", "Pinterest", "Twitter"],
  },
  {
    id: 8,
    image: "/images/pages/about/ourTeam/Member8.avif",
    position: "Office Administrator",
    name: "Sarah Garcia",
    description:
      "Managing office operations and ensuring seamless administrative support.",
    socialLinks: ["LinkedIn", "Pinterest", "Twitter"],
  },
];

const OurTeam = () => {
  return (
    <>
      <div className="w-full px-32 py-20 flex items-center justify-center bg-white border-b-[1px] border-[#e8eded]">
        <div className="w-full max-w-[1400px] flex flex-col gap-12">
          <div className="w-full flex items-end justify-between">
            <div className="max-w-[530px] flex flex-col gap-4">
              <SmallText>Our Team</SmallText>
              <Heading className="text-[64px]">
                Excellence Through Teamwork
              </Heading>
            </div>
            <p className="max-w-[600px] text-xl text-[#0d1c2999] satoshi-500">
              Meet the dynamic individuals committed to achieving excellence,
              driving results, and exceeding expectations in all that we do.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full flex flex-col gap-8">
                <div className="relative">
                  <img
                    src={member.image}
                    className="select-none"
                    draggable="false"
                    alt={member.name}
                  />
                  <div className="w-fit px-3 py-2 text-xs montserrat-500 text-white border border-[#fff]/10 backdrop-blur-[15px] leading-none absolute left-[30px] bottom-[30px]">
                    {member.position}
                  </div>
                </div>
                <div className="px-5 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <Heading className="!text-2xl">{member.name}</Heading>
                    <p className="satoshi-500 text-[#0D1C2999]">
                      {member.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {member.socialLinks.map((social) => (
                      <React.Fragment key={social}>
                        {SocialIcons[social]}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full h-[593px] p-16 flex flex-col justify-between bg-[#132030] text-white">
              <img
                src="/images/pages/home/ourTeam/icon.png"
                draggable={false}
                className="w-10 select-none"
                alt=""
              />
              <div className="w-full flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <Heading className="!text-[32px] max-w-[180px] text-white leading-[110%]">
                    Join Our Team Today!
                  </Heading>
                  <p className="satoshi-500 text-[#ffffffB3]">
                    Exciting opportunities await. Explore careers with us and be
                    part of our success story.
                  </p>
                </div>
                <Button className="w-full !text-[#132030] !bg-[#EAD3BC]">Available Jobs</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;

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
      userSelect: "none",
      width: size,
      height: size,
      display: "inline-block",
      fill: color,
      color: color,
      flexShrink: 0,
    }}
  >
    <path
      d="M243.7,70.47A4,4,0,0,0,240,68H207.2a44.57,44.57,0,0,0-39.15-24,42.76,42.76,0,0,0-30.88,12.55A43.85,43.85,0,0,0,124,88V99.16c-43.65-9.39-80-45.6-80.39-46a4,4,0,0,0-4.19-.95,4,4,0,0,0-2.63,3.41c-4.2,46.62,9.27,77.71,21.31,95.59A103.68,103.68,0,0,0,82.35,177c-15.68,20.49-43.46,31.13-43.75,31.24a4,4,0,0,0-1.93,6c.27.4,2.79,4,9.54,7.36C54.73,225.84,66.1,228,80,228c69.09,0,126.73-53.56,131.89-122.23l30.94-30.94A4,4,0,0,0,243.7,70.47Zm-38.53,30.7a4,4,0,0,0-1.16,2.58C199.85,168.94,145.38,220,80,220c-17.85,0-27.63-3.89-32.5-6.87,10.37-4.82,31.45-16.34,43.83-34.91a4,4,0,0,0,.56-3.12A3.93,3.93,0,0,0,90,172.55c-.13-.08-13.39-8-25.52-26.15C54,130.71,42.39,104.11,44.19,64.65c13.17,11.62,45.48,37,83.15,43.3a4,4,0,0,0,4.66-4V88a36,36,0,0,1,10.79-25.76A35,35,0,0,1,168,52c14.2.18,27.49,8.86,33.06,21.61A4,4,0,0,0,204.67,76h25.67Z"
      strokeWidth={weight === "thin" ? 1 : 1.5}
    />
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
      userSelect: "none",
      width: size,
      height: size,
      display: "inline-block",
      fill: color,
      color: color,
      flexShrink: 0,
    }}
  >
    <path
      d="M220,112c0,21.53-7.5,41.18-21.12,55.34C186.26,180.47,169.17,188,152,188c-21.35,0-33.52-8.76-39.76-15.57L99.89,224.92A4,4,0,0,1,96,228a4.2,4.2,0,0,1-.92-.11,4,4,0,0,1-3-4.81l32-136a4,4,0,0,1,7.78,1.84l-17.28,73.45C117,166.42,127,180,152,180c29.49,0,60-25.44,60-68A76,76,0,1,0,70.17,150a4,4,0,0,1-6.93,4A84,84,0,1,1,220,112Z"
      strokeWidth={weight === "thin" ? 1 : 1.5}
    />
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
      userSelect: "none",
      width: size,
      height: size,
      display: "inline-block",
      fill: color,
      color: color,
      flexShrink: 0,
    }}
  >
    <path
      d="M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z"
      strokeWidth={weight === "thin" ? 1 : 1.5} // Adjust stroke based on weight
    />
  </svg>
);

const SocialIcons = {
  LinkedIn: <LinkedIn />,
  Pinterest: <Pinterest />,
  Twitter: <Twitter />,
};
