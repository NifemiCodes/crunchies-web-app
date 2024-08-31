"use client";

import Image from "next/image";
import homeIconO from "../images/home-outline.png";
import homeIconF from "../images/home-filled.png";
import favIconO from "../images/heart-outline.png";
import favIconF from "../images/heart-filled.png";
import ordersIconO from "../images/orders-outline.png";
import ordersIconF from "../images/orders-filled.png";
import profIconO from "../images/profile-outline.png";
import profIconF from "../images/profile-filled.png";
import bagIcon from "../images/bag-outline-white.png";
import markerIcon from "../images/tab-marker.png";
import { useEffect, useRef, useState } from "react";

const TabBar = () => {
  const [homeF, setHomeF] = useState(true);
  const [favF, setFavF] = useState(false);
  const [ordersF, setOrdersF] = useState(false);
  const [profF, setProfF] = useState(false);

  const homeIcon = useRef<HTMLImageElement>(null);
  const favIcon = useRef<HTMLImageElement>(null);
  const ordersIcon = useRef<HTMLImageElement>(null);
  const profIcon = useRef<HTMLImageElement>(null);
  const marker = useRef<HTMLImageElement>(null);

  // change tab focus
  const setFocus = (home: boolean, fav: boolean, orders: boolean, profile: boolean) => {
    setHomeF(home);
    setFavF(fav);
    setOrdersF(orders);
    setProfF(profile);
  };

  // to move the tab marker
  useEffect(() => {
    if (homeF) {
      const values = homeIcon.current?.getBoundingClientRect();
      if (values) {
        marker.current?.setAttribute("style", `left: ${values.x - values.width / 2}px`);
      }
    }

    if (favF) {
      const values = favIcon.current?.getBoundingClientRect();
      if (values) {
        marker.current?.setAttribute("style", `left: ${values.x - values.width / 2}px`);
      }
    }

    if (ordersF) {
      const values = ordersIcon.current?.getBoundingClientRect();
      if (values) {
        marker.current?.setAttribute("style", `left: ${values.x - values.width / 2}px`);
      }
    }

    if (profF) {
      const values = profIcon.current?.getBoundingClientRect();
      if (values) {
        marker.current?.setAttribute("style", `left: ${values.x - values.width / 2}px`);
      }
    }
  }, [homeF, favF, ordersF, profF]);

  return (
    <div
      className="bg-white p-5 pb-0 fixed bottom-0 left-0 right-0 rounded-ss-[35px] rounded-se-[35px]"
      style={{ filter: "drop-shadow(0 -8px 36px rgba(30, 37, 45, 0.26))" }}>
      {/* icons */}
      <div className="mb-[27px] flex justify-between items-center">
        <div className="flex items-center gap-[50px]">
          <Image
            ref={homeIcon}
            src={homeF ? homeIconF : homeIconO}
            alt="icon"
            width={24}
            height={24}
            onClick={() => setFocus(true, false, false, false)}
          />
          <Image
            ref={favIcon}
            src={favF ? favIconF : favIconO}
            alt="icon"
            width={24}
            height={24}
            onClick={() => setFocus(false, true, false, false)}
          />
        </div>
        <div className="absolute bg-white p-[8px] rounded-full top-[-40%] left-[41%] ">
          <div
            className="w-[52px] h-[52px] bg-red rounded-full flex items-center justify-center"
            style={{ filter: "drop-shadow(0 6px 12px rgba(233, 12, 49, 0.32))" }}>
            <Image src={bagIcon} alt="icon" width={24} height={24} />
          </div>
        </div>
        <div className="flex items-center gap-[50px]">
          <Image
            ref={ordersIcon}
            src={ordersF ? ordersIconF : ordersIconO}
            alt="icon"
            width={24}
            height={24}
            onClick={() => setFocus(false, false, true, false)}
          />
          <Image
            ref={profIcon}
            src={profF ? profIconF : profIconO}
            alt="icon"
            width={24}
            height={24}
            onClick={() => setFocus(false, false, false, true)}
          />
        </div>
      </div>

      {/* marker */}
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          ref={marker}
          src={markerIcon}
          alt="image"
          width={51}
          height={13}
          className={`absolute bottom-0 left-[5.5px] transition-[left] duration`}
        />
      </div>
    </div>
  );
};
export default TabBar;
