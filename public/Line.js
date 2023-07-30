import { motion } from "framer-motion";

const pathVariants = {
	hidden: {
		pathLength: 0,
	},
	visible: {
		pathLength: 1,
		transition: {
			duration: 5,
			ease: "easeInOut",
		},
	},
};
const Line = () => (
  <svg
    width="1039"
    height="10"
    viewBox="0 0 1039 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // className="lg:w-20 xl:w-56"
  >
    <motion.line
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      y1="5"
      x2="1039"
      y2="5"
      stroke="black"
      stroke-width="10"
    />
  </svg>
);

export default Line;
