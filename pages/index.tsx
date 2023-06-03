// import { Inter } from "next/font/google";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import {
	getAchievements,
	getEvents,
	getHero,
	getStats,
	getTeam,
	getTimeline,
} from "@/api";
import UpcomingEve from "@/components/Events/UpcomingEve";
import Header from "@/components/Story/Header";
import Timeline from "@/components/Story/Timeline";
import { AxiosResponse } from "axios";
import { GetServerSideProps, NextPage } from "next";
import {
	AchieveSec,
	CollectionResponse,
	EventSec,
	HeroSec,
	StatSec,
	TeamSec,
	TimelineSec,
} from "../types/index";

interface item {
	hero: HeroSec[];
	stat: StatSec[];
	timeline: TimelineSec[];
	event: EventSec[];
	achievement: AchieveSec[];
	team: TeamSec[];
}

const Home: NextPage = ({
	hero,
	stat,
	timeline,
	event,
	achievement,
	team,
}: item | any) => {
	return (
		<>
			{/* Story Section */}
			<div className="w-full border border-black">
				<div className="grid md:grid-cols-2 grid-cols-1 overflow-hidden lg:h-[90vh] h-auto">
					{/* Story Header */}
					<Header />
					{/* Story Timeline */}
					<Timeline timelines={timeline} />
				</div>
			</div>
			<div className="">
				<UpcomingEve events={event} />
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { data: hero }: AxiosResponse<CollectionResponse<HeroSec[]>> =
		await getHero();

	const { data: stat }: AxiosResponse<CollectionResponse<StatSec[]>> =
		await getStats();

	const { data: timeline }: AxiosResponse<CollectionResponse<TimelineSec[]>> =
		await getTimeline();

	const { data: event }: AxiosResponse<CollectionResponse<EventSec[]>> =
		await getEvents();

	const { data: achievement }: AxiosResponse<CollectionResponse<AchieveSec[]>> =
		await getAchievements();

	const { data: team }: AxiosResponse<CollectionResponse<TeamSec[]>> =
		await getTeam();
	return {
		props: {
			hero,
			stat,
			timeline,
			event,
			achievement,
			team,
		},
	};
};

export default Home;
