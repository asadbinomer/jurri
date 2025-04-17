import React from "react";

const Link = ({ 
   children, 
   iconColor = "#0D1C29", 
   iconSize = 20,
   className = ""
 }) => {
   return (
     <div className={`flex items-center gap-2.5 cursor-pointer group ${className}`}>
       <p className="text-[12px] text-[#0D1C29] montserrat-500 capitalize">
         {children}
       </p>
       <div className="w-9 h-9 flex items-center justify-center border border-[#E8EDED] bg-white rounded-full group-hover:rotate-[-45deg] transition-all duration-400">
         <ArrowIcon color={iconColor} size={iconSize} />
       </div>
     </div>
   );
 };
 
 export default Link;

 const ArrowIcon = ({ color = "#0D1C29", size = 24 }) => (
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 256 256"
     focusable="false"
     style={{
       userSelect: 'none',
       width: size,
       height: size,
       display: 'inline-block',
       fill: color,
       color: color,
       flexShrink: 0
     }}
   >
     <path 
       d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
     />
   </svg>
 );