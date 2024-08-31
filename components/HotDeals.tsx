import Image from "next/image";
import pancakes from "@/images/pancakes.png";
import roastBeef from "@/images/roast-beef.png";
import heart from "@/images/heart-full.png";
import { Card } from "@/app/page";

const HotDeal = ({ image, title, price }: Card) => {
  return (
    <div className="relative min-w-[200px] min-h-[164.07px] ">
      <div className="absolute z-1 bg-blackT rounded-xl text-white backdrop-blur-[8px] top-[45%] right-2 left-2 bottom-[10px] p-[10px] flex flex-col gap-[3px]">
        <div className="flex justify-between items-start">
          <p className="text-[14px] max-w-[70%] font-medium">{title}</p>
          <Image src={heart.src} alt="heart icon" width={16} height={16} />
        </div>

        <div className="flex gap-[4px] items-start">
          <p className="text-[12px] font-medium text-pink">₦</p>
          <p className="text-[18px] font-bold">{price}</p>
        </div>
      </div>

      <Image className="rounded-[20px] max-w-[200px] max-h-[164.07px]" src={image} alt="image" width={200} height={164.07} />
    </div>
  );
};

const HotDeals = () => {
  return (
    <div className="mt-4 flex flex-col gap-[10px]">
      <div className="mx-5 flex justify-between items-center">
        <p className="text-[16px] font-medium">Hot Deals 🔥</p>
        <a className="text-red text-[12px] font-medium" href="#">
          See All
        </a>
      </div>

      <div className="ml-5 flex gap-[15px] overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
        <HotDeal image={pancakes.src} title="Viral stacking cake with honey" price="9,670" />
        <HotDeal image={roastBeef.src} title="Roast beef with black pepper" price="8,000" />
        <HotDeal image={pancakes.src} title="Viral stacking cake with honey" price="9,670" />
        <HotDeal image={roastBeef.src} title="Roast beef with black pepper" price="8,000" />
      </div>
    </div>
  );
};
export default HotDeals;
