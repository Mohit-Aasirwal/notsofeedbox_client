import React from "react";

const Alumni = () => {
	const alumni = [
		{
			name: "Nishi Chauhan",
			image: "/alumini1.jpg",
		},
		{
			name: "Pratiksha Gupta",
			image: "/alumini2.jpg",
		},
		{
			name: "Anirudha Dubey",
			image: "/alumini3.jpg",
		},
		{
			name: "Rakshita Singhal",
			image: "/alumini4.jpg",
		},
		{
			name: "Abhinav Jain",
			image: "/alumini5.jpg",
		},
	];
	return (
		<>
			<h2 className="text-4xl font-extrabold w-[90%] mx-auto">Our Alumni</h2>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[90%] mx-auto gap-6 my-6">
				{alumni.map((alum) => (
					<div
						key={alum.name}
						className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-neutral"
					>
						<img
							className="w-full"
							src={alum.image}
							alt="Sunset in the mountains"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">{alum.name}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Alumni;
