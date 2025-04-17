import React from 'react'
import SmallText from '../../component/SmallText'
import Heading from '../../component/Heading'

const Clients = () => {
  return (
    <>
         <div className="w-full px-20 py-24 flex items-center justify-center bg-[#F9F9F9]">
            <div className="w-full max-w-[1400px] flex items-center gap-12 justify-between">
               <div className="max-w-[400px] flex flex-col gap-4">
                  <SmallText>Clients</SmallText>
                  <Heading className='text-[64px]'>Trusted by Many Clients</Heading>
                  <p className='text-lg text-[#0D1C2999] satoshi-400'>With our dedication, expertise, and personalized approach, we have earned their trust and delivered exceptional results time and again.</p>
               </div>
               <div className="grid grid-cols-3 gap-4">
                  <div className="w-[214px] h-[140px] flex items-center justify-center border border-[#e8eded] bg-white"><img src="/images/pages/home/client/client1.png" className="h-[30px] select-none" dragable={false} alt="" /></div>
                  <div className="w-[214px] h-[140px] flex items-center justify-center border border-[#e8eded] bg-white"><img src="/images/pages/home/client/client2.png" className="h-[30px] select-none" dragable={false} alt="" /></div>
                  <div className="w-[214px] h-[140px] flex items-center justify-center border border-[#e8eded] bg-white"><img src="/images/pages/home/client/client3.png" className="h-[30px] select-none" dragable={false} alt="" /></div>
                  <div className="w-[214px] h-[140px] flex items-center justify-center border border-[#e8eded] bg-white"><img src="/images/pages/home/client/client4.png" className="h-[30px] select-none" dragable={false} alt="" /></div>
                  <div className="w-[214px] h-[140px] flex items-center justify-center border border-[#e8eded] bg-white"><img src="/images/pages/home/client/client5.png" className="h-[30px] select-none" dragable={false} alt="" /></div>
                  <div className="w-[214px] h-[140px] flex items-center justify-center border border-[#e8eded] bg-white"><img src="/images/pages/home/client/client6.png" className="h-[30px] select-none" dragable={false} alt="" /></div>
               </div>
            </div>
         </div>
    </>
  )
}

export default Clients