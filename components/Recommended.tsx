import Image from "next/image";
import deccan from "@/images/deccan.png";
import tiffins from "@/images/tiffins.png";
import { Card } from "@/app/page";

const Dish = ({ image, title, price }: Card) => {
  return (
    <div className="bg-white min-w-[191px] rounded-[15px] p-[11px] flex gap-2 items-center drop-shadow-sm">
      <Image src={image} alt="image" width={51.53} height={51.53} />
      <div>
        <p className="text-[12px]">{title}</p>
        <p className="text-[10.5px] font-medium tracking-[0.06px]">{price}</p>
        <p className="text-[10.5px] text-lightGreen font-bold tracking-[0.06px]">30% off upto 60</p>
      </div>
    </div>
  );
};

const Recommended = () => {
  return (
    <div className="mt-4 flex flex-col gap-1">
      <h2 className="mx-5 text-[16px] font-medium tracking-[-0.4px]">Recommended</h2>

      <div className="ml-5 flex gap-2 overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
        <Dish image={deccan.src} title="Deccan Queen R..." price="₦5,000" />
        <Dish image={tiffins.src} title="Mamoo's Tiffins" price="₦23,700" />
        <Dish image={deccan.src} title="Deccan Queen R..." price="₦5,000" />
        <Dish image={tiffins.src} title="Mamoo's Tiffins" price="₦23,700" />
      </div>
    </div>
  );
};
export default Recommended;
