import React from "react";
import SmallText from "../../component/SmallText";
import Heading from "../../component/Heading";

const Testimonial = () => {
  return (
    <>
      <div className="w-full h-[800px] flex items-center gap-0 bg-[#131F2F] text-white">
        <div className="w-[50%] h-full px-32 py-24 flex items-center justify-center">
          <div className="max-w-[615px] flex flex-col gap-20 justify-between">
            <img src="/images/pages/home/testimonial/icon.png" draggable={false} className="w-11 select-none" alt="" />
            <div className="flex flex-col gap-2">
               <Heading className="!text-5xl text-white">Exceptional legal service, exceeded expectations, highly recommend their expertise.</Heading>
               <p className="text-xl text-[#ffffffb3] max-w-[605px] satoshi-500">Working with Jurri and their team was a game-changer for our business. Their exceptional legal service exceeded our expectations in every aspect. We highly recommend their expertise to anyone seeking top-notch legal representation.</p>
            </div>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-0.5">
                  <img src="/images/pages/home/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
                  <img src="/images/pages/home/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
                  <img src="/images/pages/home/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
                  <img src="/images/pages/home/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
                  <img src="/images/pages/home/testimonial/star.svg" draggable={false} className="w-5 h-5 select-none" alt="" />
               </div>
               <img src="/images/pages/home/testimonial/sign.png" draggable={false} className="w-[205px] select-none" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full relative">
            <img src="/images/pages/home/testimonial/testimonial.png" draggable={false} className="w-full h-full select-none object-cover" alt="" />
            <div className="p-12 absolute left-0 bottom-0 background2 w-full">
               <div className="w-[450px] p-10 flex flex-col gap-4 border border-[#fff]/12 bg-[#ffffff]/6 z-1 backdrop-blur-[15px]">
                  <SmallText>SMITH & CO</SmallText>
                  <div className="flex flex-col gap-2">
                     <Heading className="!text-5xl text-white">John Williams</Heading>
                     <p className="text-[#ffffffb3] satoshi-500">CEO of a leading tech startup, transforming industries with innovative solutions.</p>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;