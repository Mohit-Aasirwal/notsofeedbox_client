import React from "react";
import { motion } from "framer-motion";
import { StatSec, layout } from "@/types";

const animation = {
	initial: {
		opacity: 0,
	},
	whileInView: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

interface stats {
	stat: StatSec[];
}

const Stats = ({ stat }: stats) => {
	return (
		<motion.div
			variants={animation}
			initial="initial"
			whileInView="whileInView"
			className="grid md:grid-cols-4 grid-cols-2 my-10 p-10 overflow-hidden"
		>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ scale: 1.2 }}
				// whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.1,
					type: "spring",
					stiffness: 1000,
				}}
				className="font-poppins md:text-5xl text-3xl text-center text-[#00C2FF]"
			>
				5+ <br />{" "}
				<p className="font-poppins text-[#003865] text-lg font-extralight">
					Branches
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
				200+
				<br />{" "}
				<p className="font-poppins text-[#003865] text-lg font-extralight">
					Branches
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
				45+
				<br />{" "}
				<p className="font-poppins text-[#003865] text-lg font-extralight">
					Branches
				</p>
			</motion.h1>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ scale: 1.2 }}
				transition={{ duration: 0.1, type: "spring", stiffness: 1000 }}
				className="font-poppins md:text-5xl text-3xl text-center text-[#00C2FF]"
			>
				50+
				<br />{" "}
				<p className="font-poppins text-[#003865] text-lg font-extralight">
					Branches
				</p>{" "}
			</motion.h1>
		</motion.div>
	);
};

export default Stats;
