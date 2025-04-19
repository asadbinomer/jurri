import React from "react";
import SmallText from "../../component/SmallText";
import Heading from "../../component/Heading";
import AnimatedLink from "../../component/AnimatedLink";

const About = () => {
  return (
    <>
      <div className="w-full px-20 py-24 flex items-center justify-center">
        <div className="w-full max-w-[1400px] flex flex-col gap-16">
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-4">
              <SmallText>ABOUT</SmallText>
              <Heading className="max-w-[500px] !text-[64px]">
                Empowering Legal Solutions
              </Heading>
            </div>
            <div className="max-w-[660px] flex flex-col gap-4">
              <h2 className="text-[22px] text-[#0D1C29] satoshi-500">
                At our firm, we are dedicated to providing innovative and
                effective legal solutions tailored to meet the unique needs of
                each client. With a team of experienced attorneys and legal
                experts, we strive to deliver exceptional service and achieve
                favorable outcomes for our clients.
              </h2>
              <h2 className="text-[#0D1C2999] satoshi-500">
                Our approach is centered on collaboration, transparency, and
                advocacy. We work closely with clients to understand their goals
                and challenges, offering strategic guidance and personalized
                legal representation every step of the way. Whether navigating
                complex regulatory landscapes, resolving disputes, or protecting
                intellectual property rights, we are committed to delivering
                results that exceed expectations.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <Card
              iconSrc="/images/pages/home/about/cardicon1.svg"
              title="Business"
              description="From formation to compliance, ensuring your ventures thrive in today's competitive landscape."
            />
            <Card
              iconSrc="/images/pages/home/about/cardicon2.svg"
              title="Financial Advisory"
              description="Trusted financial guidance for individuals and businesses, delivering expert insights."
            />
            <Card
              iconSrc="/images/pages/home/about/cardicon3.svg"
              title="Legal & Taxes"
              description="Providing expert counsel and representation to safeguard your interests and compliance."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

const Card = ({
  iconSrc,
  title,
  description,
  linkText = "MORE INFORMATION",
}) => {
  return (
    <div className="w-full p-12 flex flex-col gap-8 bg-[#F9F9F9]">
      <img
        src={iconSrc}
        draggable={false}
        className="w-8 select-none"
        alt={title}
      />
      <div className="flex flex-col gap-2">
        <Heading className="!text-3xl">{title}</Heading>
        <p className="text-[#0d1c2999] satoshi-500">{description}</p>
      </div>
      <AnimatedLink hoverWidth="20%">MORE INFORMATION</AnimatedLink>
    </div>
  );
};
