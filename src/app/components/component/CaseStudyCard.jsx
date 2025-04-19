import React from "react";
import SmallText from "./SmallText";
import Heading from "./Heading";
import AnimatedLink from "./AnimatedLink";

const CaseStudyCard = ({
  variant = "dark",
  logo,
  tag,
  title,
  image,
  className = "",
  linkText = "View Case Study",
  imgClassName = "",
  contentClassName = "",
}) => {
  const baseClasses = {
    container: "w-full h-[641px] flex items-center gap-0",
    content: "w-[40%] h-full p-24 flex flex-col gap-24 justify-between",
    image: "w-[60%] h-full object-cover select-none",
    logo: "w-fit h-[30px] select-none",
    heading: "!text-5xl"
  };

  const variants = {
    dark: {
      container: "bg-[#132030] text-white",
      content: "bg-[#132030]",
      title: "text-white",
      tag: "text-white",
      link: { color: "white", class: "bg-white" }
    },
    light: {
      container: "bg-[#EAD3BC] text-[#0D1C29]",
      content: "bg-[#EAD3BC]",
      title: "text-[#0D1C29]",
      tag: "text-[#666564]",
      link: { color: "default", class: "" }
    },
  };

  const currentVariant = variants[variant] || variants.dark;

  return (
    <div className={`${baseClasses.container} ${currentVariant.container} ${className}`}>
      <div className={`${baseClasses.content} ${currentVariant.content} ${contentClassName}`}>
        <img
          src={logo}
          draggable="false"
          className={baseClasses.logo}
          alt="Company logo"
        />
        <div className="flex flex-col gap-12">
          <div className="max-w-[480px] flex flex-col gap-4">
            <SmallText className={currentVariant.tag}>{tag}</SmallText>
            <Heading className={`${baseClasses.heading} ${currentVariant.title}`}>
              {title}
            </Heading>
          </div>
          <AnimatedLink
            color={currentVariant.link.color}
            className="satoshi-500"
            linClass={currentVariant.link.class}
          >
            {linkText}
          </AnimatedLink>
        </div>
      </div>
      <img
        src={image}
        draggable="false"
        className={`${baseClasses.image} ${imgClassName}`}
        alt="Case study visual"
      />
    </div>
  );
};

export default CaseStudyCard;