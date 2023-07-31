import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { TeamSec } from "@/types";

interface Props {
	team: TeamSec[];
}

interface teams {
	imageurl: string;
	name: string;
}

const team = [
	{
		imageurl: "/ishitamam.jpg",
		name: "Ishita Agrawal",
	},
	{
		imageurl: "/prashanshamam.jpg",
		name: "Prashansha Bharti",
	},
	{
		imageurl: "/palak.jpg",
		name: "Palak Bijole",
	},
	{
		imageurl: "/nikhilsir.jpg",
		name: "Nikhil Arya",
	},
	{
		imageurl: "/souravsir.jpg",
		name: "Sourav Singh",
	},
	{
		imageurl: "/swayamsir.jpg",
		name: "Swayam Sanghvi",
	},
	{
		imageurl: "/uditsir.jpg",
		name: "Udit Badjatya",
	},
];

const People = () => {
	const containerRef: any = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	useEffect(() => {
		const container = containerRef.current;

		const handleMouseDown = (event: any) => {
			setIsDragging(true);
			setStartX(event.clientX - container.offsetLeft);
			setScrollLeft(container.scrollLeft);
		};

		const handleMouseUp = () => {
			setIsDragging(false);
		};

		const handleMouseMove = (event: any) => {
			if (!isDragging) return;
			event.preventDefault();
			const x = event.clientX - container.offsetLeft;
			const walk = (x - startX) * 2; // Adjust the scrolling speed here
			container.scrollLeft = scrollLeft - walk;
		};

		container.addEventListener("mousedown", handleMouseDown);
		container.addEventListener("mouseup", handleMouseUp);
		container.addEventListener("mousemove", handleMouseMove);

		return () => {
			container.removeEventListener("mousedown", handleMouseDown);
			container.removeEventListener("mouseup", handleMouseUp);
			container.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isDragging, scrollLeft, startX]);
	// console.log(team);
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 1,
				delay: 0.5,
			}}
			className="bg-[#00C2FF] md:mx-10 pb-10 mb-8 rounded-3xl"
			id="People"
		>
			<h1 className="md:text-4xl text-lg text-white font-bold md:px-16 px-24 pt-10">
				Leaders of FeedBox Club
			</h1>

			<div
				ref={containerRef}
				className="grid md:grid-flow-col grid-flow-row px-auto overflow-x-scroll scrollbar-hide my-10"
			>
				{team &&
					team.map((value: teams, id: number) => {
						return (
							<motion.div
								initial={{ opacity: 0.4, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									delay: 0.5,
								}}
								key={id}
								className="space-y-3 ml-20 w-52 h-52 flex flex-col items-center justify-center"
							>
								<div className="w-40 h-40 rounded-full">
									<Image
										src={
											value.imageurl
											// process.env.NEXT_PUBLIC_API_BASE_URL +
											// team[0].attributes.img.data.attributes.url
										}
										alt="images"
										width={800}
										height={800}
										className="rounded-full object-cover w-full h-full"
									/>
								</div>
								<h4 className="text-white text-center font-bold">
									{value.name}
								</h4>
							</motion.div>
						);
					})}
			</div>
		</motion.div>
	);
};

export default People;
