"use client";
import { useState } from "react";
import Image from "next/image";
import minus from "../images/minus-icon.png";
import plus from "../images/plus-icon.png";

const AddButton = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return count > 0 ? (
    <div className="bg-red h-7 rounded-[5px] text-white flex overflow-hidden">
      <button className="flex-1 border-r border-r-whiteT border-solid flex items-center justify-center active:bg-blackT" onClick={decrement}>
        <Image src={minus} alt="icon" width={8} height={8} />
      </button>

      <p className="flex-[2] text-[12px] self-center text-center"> {count} in bag </p>

      <button className="flex-1 border-l border-l-whiteT border-solid flex items-center justify-center active:bg-blackT" onClick={increment}>
        <Image src={plus} alt="icon" width={8} height={8} />
      </button>
    </div>
  ) : (
    <button className="text-[12px] text-red border border-red border-solid rounded-[5px] p-[5px]" onClick={increment}>
      Add to bag
    </button>
  );
};

export default AddButton;
