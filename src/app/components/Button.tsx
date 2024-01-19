import { arrow, doubleArrow } from "@/assets";
import Image from "next/image";
import React from "react";

export default function Button({
  next,
  onClick,
}: {
  next?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className="border-2 border-light-0 hover:bg-light-0 p-5 rounded-full">
      <Image className="w-7" alt="arrow" src={next ? doubleArrow : arrow} />
    </button>
  );
}
