"use client";
import Image from "next/image";
import Hamicon from "@/../Public/Images/HamburgerMenu.svg";
import { useState } from "react";
export default function HamburgerMenu() {
  const [show, setShow] = useState(0);
  const visible = () => {
    setShow((prevShow) => (prevShow === 1 ? 0 : 1));
  };
  return (
    <div onClick={visible}>
      <Image
        src={Hamicon}
        alt="hamicon"
        className="h-10 w-10 bg-[#5e5eee] p-2 rounded-lg"
      />
      {show === 1 && <div className="bg-red-950 w-screen">Content</div>}
    </div>
  );
}
