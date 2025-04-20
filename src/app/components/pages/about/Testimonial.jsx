import React from "react";
import SmallText from "../../component/SmallText";
import Heading from "../../component/Heading";

const Testimonial = () => {
  return (
    <>
      <div className="w-full h-[770px] flex flex-row-reverse items-center gap-0 bg-[#131F2F] text-white">
        <div className="w-[50%] h-full px-32 py-24 flex items-center justify-center">
          <div className="max-w-[600px] flex flex-col gap-20 justify-between">
            <img src="/images/pages/about/testimonial/icon.png" draggable={false} className="w-11 select-none" alt="" />
            <div className="flex flex-col gap-2">
               <Heading className="!text-5xl text-white">I'm thankful for the opportunities to grow, the supportive team.</Heading>
               <p className="text-xl text-[#ffffffb3] max-w-[605px] satoshi-500">Being part of this team is a dream come true. I'm grateful for the supportive environment and opportunities to thrive professionally and personally. Every day is truly inspiring.</p>
            </div>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-0.5">
                  <img src="/images/pages/about/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
                  <img src="/images/pages/about/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
                  <img src="/images/pages/about/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
                  <img src="/images/pages/about/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
                  <img src="/images/pages/about/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
               </div>
               <img src="/images/pages/about/testimonial/sign.png" draggable={false} className="w-[205px] select-none" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full relative">
            <img src="/images/pages/about/testimonial/testimonial.webp" draggable={false} className="w-full h-full select-none object-cover" alt="" />
            <div className="w-full p-12 absolute left-0 bottom-0 background1">
               <div className="w-[450px] z-1 p-10 flex flex-col gap-4 border border-[#fff]/12 bg-[#ffffff]/4 backdrop-blur-[15px]">
                  <SmallText>Trainee</SmallText>
                  <div className="flex flex-col gap-2">
                     <Heading className="!text-[32px] text-white leading-none">Emiliy Rodriguez</Heading>
                     <p className="text-[#ffffffb3] satoshi-500">Legal advocate committed to delivering justice and favorable outcomes for clients.</p>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;