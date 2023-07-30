import { TimelineSec } from "@/types";
import React from "react";

interface item {
	items: TimelineSec[];
}

interface timeline {
	timelines: TimelineSec[];
}

const timelines = [
	{
		title: "Inception of FeedBox Club",
		description:
			"Founded with the vision to enhance digital skills among college freshmen, FeedBox Club quickly became one of IET's most active clubs. Its journey began in November 2015 with seven students, and they started creating viral content on social media, reaching 1.6 million people in just a week.",
	},
	{
		title: "Achievements and Growth",
		description:
			"Over the years, FeedBox Club's success soared as they managed 11 verified accounts and partnered with prestigious events. They won the Indore Start-ups Sansad Awards 2021, transforming from a college club to a successful startup under the leadership of Yash Kulshrestha sir and Ayushi Gupta mam.",
	},
	{
		title: " Strong Leadership and Core Team",
		description:
			"FeedBox Club's success was attributed to its strong pillars, CEO Yash Kulshrestha sir and COO Ayushi Gupta mam. They carefully selected a core team, with Ishita Agrawal as President and Tech Head, and Prashansha Bharti as Vice President.",
	},
	{
		title: "Balancing Work and Fun",
		description:
			"FeedBox Club believed in Work hard, Party Harder, organizing numerous meet-ups and celebrations after the pandemic. They celebrated FeedBox Foundation Day, Diwali, and Recruitment sessions, fostering a strong sense of camaraderie among members.",
	},
	{
		title: " A Hub of Learning",
		description:
			"Alongside college studies, FeedBox Club conducted informative sessions on marketing, design, coding, and more. Members were enthralled by the experience, as guest speakers and the core team provided invaluable insights and motivated them to excel.",
	},
];

function Timeline() {
	// { timelines }: timeline
	// console.log(timelines);
	return (
		<>
			<ol className="pt-[6%] pl-[10%] md:h-[80vh] h-[50vh] overflow-y-scroll scrollbar-hide">
				{timelines.map((item, i) => (
					<li className="border-l-2" key={i}>
						<div className="md:flex flex-start">
							<div className="w-6 h-6 flex bg-black items-center justify-center rounded-full -ml-3.5"></div>
							<div className="block lg:p-6 md:px-0 p-6 max-w-lg  ml-2 md:mb-10 mb-1 font-semibold group duration-300 transition ease-in">
								<div className="flex justify-between mb-4">
									<h2 className="text-lg group-hover:text-xl group-hover:font-bold group-hover:text-secondary duration-300 group-hover:transition ease-in-out">
										{item.title}
									</h2>
								</div>
								<p className="lg:max-w-sm max-w-xs group-hover:max-w-md font-extralight text-sm group-hover:text-base group-hover:font-semibold duration-300 group-hover:transition ease-in-out">
									{item.description}
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
