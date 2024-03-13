"use client";

import { menulist } from "@/constants";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import OutsideClickHandler from "react-outside-click-handler";

interface Props {
  toggleAside: () => void;
}

export default function Aside({ toggleAside }: Props) {
  return (
    <section>
      <article className="cursor-pointer w-full flex justify-end items-center pr-[20px] h-[56px] border-b-[1px] border-gray-200">
        <RxCross1 onClick={() => toggleAside()} />
      </article>
      <OutsideClickHandler
        onOutsideClick={() => {
          toggleAside();
        }}
      >
        <ul className="flex flex-col">
          {menulist.map((menu) => (
            <li
              key={menu}
              className="hover:bg-gray-100 text-[20px] w-full h-full pt-[10px] pb-[10px] pl-[20px]"
            >
              <span className="cursor-pointer">{menu}</span>
            </li>
          ))}
        </ul>
      </OutsideClickHandler>
    </section>
  );
}
