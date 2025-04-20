import React from "react";
import SmallText from "../../component/SmallText";
import Heading from "../../component/Heading";
import Card from "../../component/Card";

const cardData = [
  {
    type: "primary",
    label: "Cases",
    number: "200+",
    description:
      "Successfully resolved over 200 cases, demonstrating our expertise and effectiveness.",
    img: "/images/pages/about/hero/img1.avif",
  },
  {
    type: "primary",
    label: "Clients",
    number: "100+",
    description:
      "Served the needs of 100+ clients, providing personalized solutions and dedicated support.",
    img: "/images/pages/about/hero/img2.avif",
  },
  {
    type: "secondary",
    label: "Commitment",
    number: "110+",
    description:
      "Our team is dedicated to going above and beyond, ensuring 110% commitment to every client and their unique needs",
    img: "/images/pages/about/hero/img3.avif",
  },
  {
    type: "secondary",
    label: "Results",
    number: "100+",
    description:
      "With a focus on excellence, we consistently deliver 100% results, providing peace of mind and successful outcomes.",
    img: "/images/pages/about/hero/img4.png",
  },
];

const Hero = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-0">
        <div className="w-full px-20 pt-24 pb-16 flex items-center justify-center">
          <div className="w-full max-w-[1600px] flex items-end justify-between">
            <div className="max-w-[810px] flex flex-col gap-4">
              <SmallText>About</SmallText>
              <Heading>Leading with Passion & Purpose.</Heading>
            </div>
            <p className="max-w-[600px] text-[22px] text-[#0D1C2999] satoshi-400">
              Experience our passion for service and dedication to purpose as we
              lead with integrity and excellence in everything we do.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-0">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
