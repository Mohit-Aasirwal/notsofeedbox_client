import React, { useState, useEffect } from "react";
import Computer from "./Computer";
import Mobile from "./Mobile";
import { layout } from "@/types";
// import Window from './Window'

// interface layout {
//   hero: HeroSec[];
//   stat: StatSec[];
//   timeline: TimelineSec[];
//   event: EventSec[];
//   achievement: AchieveSec[];
//   team: TeamSec[];
// }

const ResponsiveLayout = ({
	hero,
	stat,
	timeline,
	event,
	achievement,
	team,
}: layout) => {
	const [windowWidth, setWindowWidth] = useState(768);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleResize);
		}
		// Clean up the event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div>
			{windowWidth >= 768 ? (
				// Render desktop layout
				<div>
					<Computer
						hero={hero}
						stat={stat}
						timeline={timeline}
						event={event}
						achievement={achievement}
						team={team}
					/>
					{/* Add desktop-specific components or styles */}
				</div>
			) : (
				// Render mobile layout
				<div>
					<Mobile
						hero={hero}
						stat={stat}
						timeline={timeline}
						event={event}
						achievement={achievement}
						team={team}
					/>
					{/* Add mobile-specific components or styles */}
				</div>
			)}
		</div>
	);
};

export default ResponsiveLayout;
