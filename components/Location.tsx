"use client";

import locationIcon from "../images/location-icon.png";
import arrow from "../images/arrow-icon.png";
import Image from "next/image";

const Location = () => {
  return (
    <div className="bg-[url('../images/location-bg.png')] bg-contain bg-no-repeat bg-center mx-5 mt-[16px] p-[15px] flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <Image src={locationIcon.src} alt="location" width={30} height={30} />
        <div>
          <h2 className="font-medium text-[16px] leading-none">Current location</h2>
          <p className="text-grey text-[13px]">3 Ajayi Street Lekki Phase 1 Lagos</p>
        </div>
      </div>

      {/* arrow icon */}
      <Image src={arrow.src} alt="arrow" width={6} height={12} />
    </div>
  );
};
export default Location;
