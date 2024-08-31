"use client";

import { useState } from "react";
import Image from "next/image";
import full from "../images/heart-full.png";
import empty from "../images/heart-icon.png";

const Heart = ({ classnameF, classnameE }: { classnameF: string; classnameE: string }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    liked ? setLiked(false) : setLiked(true);
  };
  return liked ? (
    <Image className={classnameF} src={full} alt="icon" width={15} height={15} onClick={toggleLike} />
  ) : (
    <Image className={classnameE} src={empty} alt="icon" width={20} height={20} onClick={toggleLike} />
  );
};
export default Heart;
