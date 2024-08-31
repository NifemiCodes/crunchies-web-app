import Image from "next/image";
import brownRice from "../images/brown-rice.png";
import delight from "../images/veggie-delight.png";
import burger from "../images/chicken-burger.png";
import chickenWrap from "../images/chicken-wrap.png";
import Heart from "./Heart";
import AddButton from "./AddButton";
import { Card } from "@/app/page";

const MenuItem = ({ image, title, price }: Card) => {
  return (
    <div className="flex-[1] border border-lightGrey rounded-[6px] text-[13px]">
      <div className="relative h-[50%]">
        <Heart classnameE="absolute top-[5px] right-[5px] z-1" classnameF="absolute top-[8px] right-[8px] z-1" />
        <Image src={image} alt="menu item image" width={100} height={100} layout="responsive" />
      </div>
      <div className="flex flex-col gap-[5px] text-[13px] px-[10px] pb-[10px] pt-[5px]">
        <p className="min-h-[34px] max-w-[80%]">{title}</p>
        <p className="font-medium">{price}</p>
        <AddButton />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="mt-4 mx-5 flex flex-col gap-[15px]">
      <div className="flex gap-[15px] items-center">
        <MenuItem image={brownRice.src} title={"Fried Brown Rice"} price="₦5,000" />
        <MenuItem image={delight.src} title={"Veggie Delight CheeseSteak"} price="₦3,200" />
      </div>

      <div className="flex gap-[15px] items-center">
        <MenuItem image={burger.src} title={"Chicken burger first delivery"} price="₦5,000" />
        <MenuItem image={chickenWrap.src} title={"Crunchies's Chicken wrap"} price="₦5,000" />
      </div>
    </div>
  );
};
export default Menu;
