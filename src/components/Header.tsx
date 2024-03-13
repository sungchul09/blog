"use client";

import { menulist } from "@/constants";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  toggleAside: () => void;
}

export default function Header({ toggleAside }: Props) {
  return (
    <section className="font-[600] pl-[20px] pr-[20px] w-full h-full flex justify-between items-center lg:justify-start">
      <h1 className="cursor-pointer">sc. blog</h1>
      <RxHamburgerMenu
        className="text-[20px] cursor-pointer lg:hidden"
        onClick={() => toggleAside()}
      />
      <ul className="gap-[40px] justify-start pl-[60px] hidden lg:flex">
        {menulist.map((menu) => (
          <li key={menu} className="cursor-pointer text-gray-700">
            {menu}
          </li>
        ))}
      </ul>
    </section>
  );
}
