import Image from "next/image";
import React from "react";
import Lists from "./Lists";

function UpcomingEve() {
	return (
		<>
			<div className="grid md:grid-cols-2 grid-cols-1 md:h-[70vh] h-full">
				<div className="flex lg:space-x-8 space-x-5 justify-center items-center">
					<Image
						src="/calander.svg"
						width={39}
						height={37}
						className="xl:w-[49px] xl:h-[47px]"
						alt="calander"
					/>
					<Image
						src="/event.svg"
						alt="Upcoming Event"
						className="lg:w-[300px] lg:h-[300px] w-60 h-60"
						width={300}
						height={300}
					/>
				</div>
				<div className="h-full  space-y-8 flex flex-col items-center justify-center">
					<div className="md:h-[60%] h-full overflow-y-scroll">
						<Lists />
						<Lists />
						<Lists />
						<Lists />
					</div>
				</div>
			</div>
		</>
	);
}

export default UpcomingEve;
