import Header from "../components/Header";
import Location from "../components/Location";
import Promotions from "../components/Promotions";
import Categories from "../components/Categories";
import Menu from "../components/Menu";
import HotDeals from "./../components/HotDeals";
import Trending from "./../components/Trending";
import Recommended from "./../components/Recommended";
import Crunchies from "../components/Crunchies";
import TabBar from "../components/TabBar";
import Image from "next/image";
import shrug from "@/images/Shrug-emoticon.png";

export type Card = {
  image: string;
  title: string;
  price?: string;
};

export default function Home() {
  return (
    <>
      <div className="hidden md:block my-0 mx-auto w-[70%] text-center">
        <Image src={shrug} alt="unavailable image" width={200} height={200} className="w-full" />
        <p className="text-gray-500">Oops! This page can't be viewed on large screens, try opening it with your mobile device instead!</p>
      </div>
      <main className="md:hidden my-5">
        <Header />
        <Location />
        <Promotions />
        <Categories />
        <Menu />
        <HotDeals />
        <Trending />
        <Recommended />
        <Crunchies />
        <TabBar />
      </main>
    </>
  );
}
