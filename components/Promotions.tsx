"use client";

import ofadaImg from "../images/ofada-banner.png";
import burgerImg from "../images/burger-banner.png";
import offer1Img from "../images/offer-1.png";
import offer2Img from "../images/offer-2.png";
import offer3Img from "../images/offer-3.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const Promotions = () => {
  const [banner, setBanner] = useState(ofadaImg);
  //const banners = [ofadaImg, burgerImg];

  useEffect(() => {
    const id = setTimeout(() => {
      banner.src === ofadaImg.src ? setBanner(burgerImg) : setBanner(ofadaImg);
    }, 10000);

    return () => clearTimeout(id);
  }, [banner]);

  return (
    <div className="mx-5 mt-4 flex flex-col gap-[5px]">
      <div>
        {/* {banners.map((banner) => ( */}
        <Image
          src={banner.src}
          alt="image"
          width={100}
          height={150}
          layout="responsive"
          className="flex-1"
          style={{ filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2))" }}
        />
        {/* ))} */}
      </div>

      <div className="flex gap-[5px]">
        <Image
          src={offer1Img.src}
          alt="image"
          width={100}
          height={100}
          className="flex-1"
          style={{ filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2))" }}
        />
        <Image
          src={offer2Img.src}
          alt="image"
          width={100}
          height={100}
          className="flex-1"
          style={{ filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2))" }}
        />
        <Image
          src={offer3Img.src}
          alt="image"
          width={100}
          height={100}
          className="flex-1"
          style={{ filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2))" }}
        />
      </div>
    </div>
  );
};

export default Promotions;
