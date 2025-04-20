import React from "react";
import SmallText from "../../component/SmallText";
import Heading from "../../component/Heading";
import Link from "../../component/Link";
import AnimatedLink from "../../component/AnimatedLink";
import CaseStudyCard from "../../component/CaseStudyCard";

const CaseStudies = () => {
  return (
    <>
      <div className="w-full pt-24 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <SmallText>Case Studies</SmallText>
          <Heading className="!text-[64px]">Client Success Stories</Heading>
          <Link>See ALL</Link>
        </div>
        <div className="w-full flex flex-col gap-0">
          <CaseStudyCard
            variant="dark"
            logo="/images/pages/home/caseStudies/logo1.png"
            tag="Design Agency"
            title="Protecting Intellectual Property Rights"
            image="/images/pages/home/caseStudies/DesignAgency1.webp"
          />
          <CaseStudyCard
            variant="light"
            logo="/images/pages/home/caseStudies/logo2.avif"
            tag="Design Agency"
            title="Resolving Employment Disputes Efficiently"
            image="/images/pages/home/caseStudies/DesignAgency2.webp"
            className="flex-row-reverse"
          />
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
