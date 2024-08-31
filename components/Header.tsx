"use client";

import searchIcon from "../images/search-icon.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between mx-5 items-end">
      <div>
        <h1 className="font-bold text-[18px] leading-none">Hi Chinedu</h1>
        <p className="text-grey text-[14px] leading-none">It&apos;s lunch time!</p>
      </div>
      <div className="bg-redT p-[10px] rounded-full">
        <Image src={searchIcon.src} alt="search" width={20} height={20} className="w-5 h-5" />
      </div>
    </div>
  );
};
export default Header;
