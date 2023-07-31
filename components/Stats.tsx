import React from "react";
import { motion } from "framer-motion";
import { StatSec, layout } from "@/types";

const animation = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

interface stats {
	stat: StatSec[];
}

const Stats = () => {
	//   console.log(stat);
	return (
		<motion.div
			variants={animation}
			initial="initial"
			animate="animate"
			className="grid md:grid-cols-4 grid-cols-2 md:my-10 md:p-10 py-20 gap-10 overflow-hidden"
		>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ scale: 1.2 }}
				// animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.1,
					type: "spring",
					stiffness: 1000,
				}}
				className="font-poppins md:text-5xl text-3xl text-center text-[#00C2FF]"
			>
				{/* {stat[0].attributes.figure}  */}5+
				<br />
				<p className="font-poppins text-[#003865] text-lg font-extralight">
					{/* {stat[0].attributes.type} */} Student Campuses
				</p>
			</motion.h1>
			<motion.h1
				className="font-poppins md:text-5xl text-3xl text-center text-[#00C2FF]"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ scale: 1.2 }}
				transition={{
					duration: 0.1,
					type: "spring",
					stiffness: 1000,
				}}
			>
				{/* {stat[1].attributes.figure} */}200+
				<br />{" "}
				<p className="font-poppins text-[#003865] text-lg font-extralight">
					{/* {stat[1].attributes.type} */}Currently Enrolled Students
				</p>
			</motion.h1>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ scale: 1.2 }}
				transition={{
					duration: 0.1,
					type: "spring",
					stiffness: 1000,
				}}
				className="font-poppins md:text-5xl text-3xl text-center text-[#00C2FF]"
			>
				{/* {stat[2].attributes.figure} */}50+
				<br />{" "}
				<p className="font-poppins text-[#003865] text-lg font-extralight">
					{/* {stat[2].attributes.type} */} Informative Sessions
				</p>
			</motion.h1>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ scale: 1.2 }}
				transition={{ duration: 0.1, type: "spring", stiffness: 1000 }}
				className="font-poppins md:text-5xl text-3xl text-center text-[#00C2FF]"
			>
				{/* {stat[3].attributes.figure} */}100+
				<br />{" "}
				<p className="font-poppins text-[#003865] text-lg font-extralight">
					{/* {stat[3].attributes.type} */}Alumni Network
				</p>{" "}
			</motion.h1>
		</motion.div>
	);
};

export default Stats;
