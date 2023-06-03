import { TimelineSec } from "@/types";
import React from "react";

interface item {
	items: TimelineSec[];
}

function Timeline({ timelines }: any) {
	return (
		<>
			<ol className="pt-[10%] pl-[10%] md:h-[80vh] h-[50vh] overflow-y-scroll">
				{timelines.map((item: item | any, i: number) => (
					<li className="border-l-2" key={i}>
						<div className="md:flex flex-start">
							<div className="w-6 h-6 flex bg-black items-center justify-center rounded-full -ml-3.5"></div>
							<div className="block lg:p-6 md:px-0 p-6 max-w-lg  ml-2 md:mb-10 mb-1 font-semibold group duration-300 transition ease-in">
								<div className="flex justify-between mb-4">
									<h2 className="text-lg group-hover:text-xl group-hover:font-bold group-hover:text-secondary duration-300 group-hover:transition ease-in-out">
										{item.attributes.timeline_title}
									</h2>
								</div>
								<p className="lg:max-w-sm max-w-xs group-hover:max-w-md font-extralight text-sm group-hover:text-base group-hover:font-semibold duration-300 group-hover:transition ease-in-out">
									{item.attributes.timeline_desc}
								</p>
							</div>
						</div>
					</li>
				))}
			</ol>
		</>
	);
}

export default Timeline;
