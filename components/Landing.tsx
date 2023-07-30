import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Landing = () => {
	// console.log(hero[0].attributes.Hero_Img.data.attributes.url);
	return (
		<motion.div
			initial={{ y: -1000 }}
			animate={{ y: 0 }}
			transition={{ delay: 1, duration: 1 }}
			id="Landing"
			className="landing overflow-x-hidden"
		>
			<div className="md:h-screen w-full">
				{/**
				 * best practice is to pass an image from a url with webp format to get best loading time, no flickering and dynamic sizing.
				 */}
				<Image
					priority
					src={
						"/group.png"
						// process.env.NEXT_PUBLIC_API_BASE_URL +
						// hero[0].attributes.Hero_Img.data.attributes.url
					}
					alt="group"
					className="w-full h-max md:h-screen"
					width={1200}
					height={547}
				/>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}
					className="landing-gradient absolute top-0 left-0  w-full md:h-screen"
				>
					<motion.div
						initial={{ x: -1000, opacity: 0.5 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 1.5, duration: 3 }}
						className="flex flex-col md:h-screen md:justify-end md:w-1/2 -mt-10 mx-10 space-y-10"
					>
						<h1
							className="font-inter text-white drop-shadow-2xl md:text-6xl "
							style={{ fontWeight: 900 }}
							color="red"
							// transition={{ duration: 1 }}
							// whileHover={{ fontSize: 2 }}
						>
							Welcome To <br />
							FeedBox Club
						</h1>
						<motion.p
							animate={{ x: [-1000, 0] }}
							className="text-xs md:text-base text-white"
						>
							{/* {hero[0].attributes.Description} */} Where Creativity Meets
							Digital Strategy amet.
						</motion.p>
						<motion.button
							whileHover={{
								color: "white",
								originX: 0,
								originY: 0,
								scale: 1.1,
							}}
							// animate={{scale:1.1, fontSize:1.1}}
							transition={{ type: "just" }}
							className="rounded-full hover:bg-gradient-to-t from-primary to-secondary flex w-fit bg-white py-2 px-3"
						>
							<Link href={"#About"} className="">
								Learn What&apos;s Next
								<p className="inline-flex">→</p>
							</Link>
						</motion.button>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Landing;
