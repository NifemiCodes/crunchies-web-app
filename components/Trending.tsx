import Image from "next/image";
import grilledFish from "@/images/grilled-fish.png";
import sandwidch from "@/images/fruit-sandwich.png";
import { Card } from "@/app/page";

const Platter = ({ image, title, price }: Card) => {
  return (
    <div className="flex items-center gap-3">
      <Image src={image} alt="food image" width={97} height={97} />
      <div className="flex flex-col gap-1">
        <p className="text-[14px] font-medium">{title}</p>
        <p className="text-[18px] font-bold first-letter:text-red">₦{price}</p>
      </div>
    </div>
  );
};

const Trending = () => {
  return (
    <div className="mx-5 mt-4 flex flex-col gap-3">
      <h2 className="text-[16px] font-medium">Trending Platters</h2>
      <div className="flex flex-col gap-3">
        <Platter image={grilledFish.src} title="Grilled fish with spicy onion sauce with black roasted beef" price="12,700" />
        <Platter image={sandwidch.src} title="Veggie Delight Cheesesteak Sliced ​​tortillas with grilled meat" price="32,000" />
        <Platter image={grilledFish.src} title="Grilled fish with spicy onion sauce with black roasted beef" price="12,700" />
        <Platter image={sandwidch.src} title="Veggie Delight Cheesesteak Sliced ​​tortillas with grilled meat" price="32,000" />
      </div>
    </div>
  );
};
export default Trending;
