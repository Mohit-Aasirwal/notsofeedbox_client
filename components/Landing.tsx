import Link from "next/link";
import Image from "next/image";
const Landing = () => {
  return (
    <div id="Landing" className="landing">
      <div className="md:h-screen w-full">
        <Image
          src="/group.png"
          alt="group"
          className="w-full h-max md:h-screen"
          width={1200}
          height={547}
        />
        <div className="landing-gradient absolute top-0 left-0 w-full md:h-screen">
          <div className="flex flex-col md:h-screen md:justify-end md:w-1/2 -mt-10 mx-10 space-y-3">
            <h1
              className="font-inter text-white drop-shadow-2xl md:text-6xl"
              style={{ fontWeight: 900 }}
            >
              Welcome To <br />
              FeedBox Club
            </h1>
            <p className="text-xs md:text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
              maxime.
            </p>
            <button className="rounded-full hover:bg-secondary delay-150 flex w-fit bg-white py-2 px-3">
              <Link href={"#About"} className="">
                Learn What&apos;s Next
                <p className="inline-flex">→</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
