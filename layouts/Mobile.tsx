import React from "react";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Drawer from "@/components/Drawer";
import Stats from "@/components/Stats";
import { layout } from "@/types";
//images to pass as props in carousel in mobile view.
const images: any = [
	"",
	"",
	"", //image url's as needed
];

const Mobile = ({ hero, stat, timeline, event, achievement, team }: layout) => {
	return (
		<div>
			<Drawer />
			<Carousel images={images} />
			<About timeline={timeline} />
			<Stats stat={stat} />
		</div>
	);
};

export default Mobile;
