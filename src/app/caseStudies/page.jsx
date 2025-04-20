"use client";

import React from "react";
import Layout from "../components/component/Layout";
import CaseStudyCard from "../components/component/CaseStudyCard";
import SmallText from "../components/component/SmallText";
import Heading from "../components/component/Heading";

const CaseStudies = () => {
  return (
    <Layout>
      CaseStudies
      {/* <div className="flex flex-col gap-0">
        <div className="w-full px-20 pt-24 pb-16 flex items-center justify-center">
          <div className="w-full max-w-[1600px] flex items-end justify-between">
            <div className="max-w-[810px] flex flex-col gap-4">
              <SmallText>Case Studies</SmallText>
              <Heading>Real Solutions, Tangible Results.</Heading>
            </div>
            <p className="max-w-[600px] text-[22px] text-[#0D1C2999] satoshi-400">
              Dive into our case studies—real-world solutions, tangible results,
              and success stories waiting to be unveiled.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-0">
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
          <CaseStudyCard
            variant="dark"
            logo="/images/pages/home/caseStudies/logo3.png"
            tag="Design Agency"
            title="Navigating Regulatory Compliance Challenges"
            image="/images/pages/home/caseStudies/DesignAgency3.webp"
          />
          <CaseStudyCard
            variant="light"
            logo="/images/pages/home/caseStudies/logo4.avif"
            tag="Design Agency"
            title="Protecting Patient Confidentiality Rights"
            image="/images/pages/home/caseStudies/DesignAgency4.webp"
            className="flex-row-reverse"
          />
        </div>
      </div> */}
    </Layout>
  );
};

export default CaseStudies;
