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
      className="landing w-full h-full  overflow-x-hidden"
    >
      <div className="md:h-screen h-auto w-full">
        {/**
         * best practice is to pass an image from a url with webp format to get best loading time, no flickering and dynamic sizing.
         */}
        <Image
          priority
          src={
            "/award.png"
            // process.env.NEXT_PUBLIC_API_BASE_URL +
            // hero[0].attributes.Hero_Img.data.attributes.url
          }
          alt="group"
          className="w-full md:object-cover h-max md:h-screen"
          width={1200}
          height={547}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="landing-gradient absolute md:top-0 md:left-0 top-28  w-full md:h-screen"
        >
          <motion.div
            initial={{ x: -1000, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 3 }}
            className="flex flex-col md:h-screen md:justify-end md:w-1/2 md:-mt-10 -my-8 items-start md:mx-10 mx-5 md:space-y-10 space-y-5"
          >
            <h1
              className="font-inter  drop-shadow-2xl md:text-6xl text-base md:text-white text-black bg-white bg-opacity-50 md:bg-opacity-0 rounded-md"
              style={{ fontWeight: 900 }}
              color="red"
              // transition={{ duration: 1 }}
              // whileHover={{ fontSize: 2 }}
            >
              College Clubs <br /> by FeedBox
            </h1>
            <motion.p
              animate={{ x: [-1000, 0] }}
              className="text-xs md:text-base font-sans text-black font-bold md:text-white"
            >
              {/* {hero[0].attributes.Description} */} Empowering college
              students for a brighter tomorrow
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
              className="rounded-full hover:bg-gradient-to-t from-primary to-secondary  w-fit bg-white py-2 px-3 hidden md:flex"
            >
              <Link href={"#About"} className="">
                Start the Journey
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
