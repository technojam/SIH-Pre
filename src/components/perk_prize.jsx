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
		description:
			"The winner will be awarded with a cash prize of ₹ 5100 and a direct entry to SIH 2023 Finals",
	},
	{
		image: img2,
		subtitle: "Prize Money",
		title: "₹ 3100",
		description:
			"The runner-up will be awarded with a cash prize of ₹ 3100 and a direct entry to SIH 2023 Finals",
	},
	{
		image: img3,
		subtitle: "Prize Money",
		title: "₹ 2100",
		description:
			"The second runner-up will be awarded with a cash prize of ₹ 2100 and a direct entry to SIH 2023 Finals",
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
