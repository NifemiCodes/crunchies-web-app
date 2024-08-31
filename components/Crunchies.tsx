import Image from "next/image";
import Heart from "./Heart";
import heaven from "@/images/heavens-food.png";
import sauce from "@/images/sauce.png";
import hotdeal from "@/images/hot-deal.png";
import truck from "@/images/truck-icon.png";

interface ProductType {
  image: string;
  title: string;
  price: string;
  showBadge: boolean;
}

const Product = ({ image, title, price, showBadge }: ProductType) => {
  return (
    <div className="relative flex flex-col gap-[10px]">
      <div className="">
        <Image src={image} alt="image" width={100} height={100} layout="responsive" />
        {showBadge ? <Image className="absolute z-1 top-[10px] left-[10px]" src={hotdeal} alt="badge" width={58} height={20} /> : null}
        <Heart classnameE="absolute z-1 top-[10px] right-[10px]" classnameF="absolute z-1 top-[13px] right-[13px]" />
      </div>

      <div className="flex flex-col gap-[2px]">
        <p className="text-[14px]">{title}</p>

        <div className="flex items-center justify-between">
          <p className="text-[14px] font-medium">{price}</p>

          <div className="flex items-center gap-1">
            <Image src={truck} alt="truck icon" width={12} height={12} />
            <p className="text-[12px] tracking-[-0.3px]">Free delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Crunchies = () => {
  return (
    <div className="mt-4 mx-5 flex flex-col gap-3">
      <h2 className="text-[16px] font-medium">All in Crunchies</h2>
      <div className="flex flex-col gap-4">
        <Product image={heaven.src} title="The Heaven's Food" price="₦32,000" showBadge={true} />
        <Product image={sauce.src} title="Veggie Delight CheeseSteak" price="₦8,000" showBadge={false} />
      </div>
    </div>
  );
};
export default Crunchies;
