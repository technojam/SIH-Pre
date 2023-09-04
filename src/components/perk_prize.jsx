import React from "react";
import Carousel from "./carousel";
import img1 from "../assets/first.svg";
import img2 from "../assets/second.svg";
import img3 from "../assets/third.svg";

const carouselItems = [
  {
    image: img1,
    subtitle: "Prize Money",
    title: "₹ 5100",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    image: img2,
    subtitle: "Prize Money",
    title: "₹ 3100",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    image: img3,
    subtitle: "Prize Money",
    title: "₹ 2100",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

function perk_prize() {
  return (
    <div id="prizes" className="">
      <Carousel items={carouselItems} />
    </div>
  );
  // Made by ~Sankalp Srivastava
}

export default perk_prize;
