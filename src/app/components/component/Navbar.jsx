"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../../public/images/component/navbar/Logo.png";
import Phone from "../../../../public/images/component/navbar/Phone.svg";
import Email from "../../../../public/images/component/navbar/Mail.svg";
import Arrow from "../../../../public/images/component/navbar/Arrowdown.svg";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href = string) => {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  const navItems = [
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/caseStudies", label: "CASE STUDIES" },
  ];

  return (
    <>
      <div className="bg-[#132030] text-white text-[12px] h-[42px] px-8 py-3 flex justify-end items-center gap-6">
        <div className="flex items-center gap-2">
          <Image src={Phone} alt="Phone icon" width={18} height={18} />
          <span>+42 20 123 456 78</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={Email} alt="Email icon" width={18} height={18} />
          <span>JURRI-LAW@GOLA.IO</span>
        </div>
      </div>
      <nav className="w-full flex justify-between items-center px-8 py-6 border-b border-[#e8eded]">
        <Link href="/">
          <Image
            src={logo}
            alt="Company logo"
            width={130}
            height={0}
            className="w-[130px] h-auto"
          />
        </Link>
        <div className="flex gap-8 text-center items-center">
          <ul className="flex gap-6 text-[12px] text-[#0D1C2999]">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.hasDropdown ? (
                  <div className="flex items-center gap-0.5 cursor-pointer montserrat-400">
                    <span
                      className={
                        isActive(item.href) ? "text-[#132030] font-medium" : ""
                      }
                    >
                      {item.label}
                    </span>
                    <Image
                      src={Arrow}
                      alt="Dropdown arrow"
                      width={13}
                      height={0}
                      className="w-[13px] h-auto"
                    />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`montserrat-400 hover:text-[#132030] ${
                      isActive(item.href) ? "text-[#132030] font-medium" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="flex items-center gap-0.5 text-[#132030] cursor-pointer montserrat-400">
              <span>PAGES</span>
              <Image
                src={Arrow}
                alt="Dropdown arrow"
                width={13}
                height={0}
                className="w-[13px] h-auto"
              />
            </li>
          </ul>
          <Link href="/contact">
            <button
              className="group relative w-[120px] h-10 flex items-center justify-center px-6 py-3 text-[12px] text-white leading-none bg-[#132030] rounded-full overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                <span className="absolute left-0 top-0.5 transition-all duration-500 ease-in-out group-hover:-top-4">
                  CONTACT US
                </span>
                <span className="absolute left-0 top-4 transition-all duration-500 ease-in-out group-hover:top-0.5">
                  CONTACT US
                </span>
              </div>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
