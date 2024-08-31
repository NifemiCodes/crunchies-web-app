import Image from "next/image";
import burgerIcon from "../images/burger-icon.png";
import pizzaIcon from "../images/pizza-icon.png";
import cookieIcon from "../images/cookie-icon.png";
import pastryIcon from "../images/pastry-icon.png";
import { Card } from "../app/page";

const Category = ({ image, title }: Card) => {
  return (
    <div className="flex items-center gap-1 p-2 rounded-[50px] bg-lightGrey text-[14px] min-w-max focus:bg-red focus:text-white">
      <Image src={image} alt="icon" width={24} height={24} />
      <p className="font-normal select-none">{title}</p>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="mt-4 ml-5 flex gap-2 overflow-x-scroll pr-5" style={{ scrollbarWidth: "none" }}>
      <Category image={burgerIcon.src} title="All Food" />
      <Category image={pizzaIcon.src} title="Pizza" />
      <Category image={cookieIcon.src} title="Cookies" />
      <Category image={pastryIcon.src} title="pastry" />
      <Category image={burgerIcon.src} title="Mexican" />
      <Category image={pizzaIcon.src} title="Cakes" />
      <Category image={cookieIcon.src} title="Sweets" />
      <Category image={pastryIcon.src} title="Italian" />
    </div>
  );
};
export default Categories;
