// import { AxiosResponse } from "axios";
// import { GetServerSideProps } from "next";
// import {
//   getAchievements,
//   getEvents,
//   getHero,
//   getStats,
//   getTeam,
//   getTimeline,
// } from "@/api";
// import {
//   AchieveSec,
//   CollectionResponse,
//   EventSec,
//   HeroSec,
//   StatSec,
//   TeamSec,
//   TimelineSec,
//   layout,
// } from "@/types";
// import ConditionalRender from "@/layouts/ConditionalRender";
// import Window from "@/layouts/Window";
// import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Achievement from "@/components/Achievements";
import Landing from "@/components/Landing";
import Event from "@/components/Events/UpcomingEve";
import Team from "@/components/People";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Alumni from "@/components/Alumni";
import Drawer from "@/components/Drawer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Club FeedBox</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div
      // className={"custom-cursor"}
      >
        {/* <Window/> */}
        <Navbar />
        <Drawer />

        <Landing />
        <Stats />
        <About />
        <Achievement />
        <Alumni />
        {/* <Event /> */}
        <Team />
        <Contact />
        <Footer />
        {/* <ConditionalRender
          hero={hero}
          stat={stat}
          achievement={achievement}
          event={event}
          team={team}
          timeline={timeline}
        /> */}
        {/* Story Section */}
        {/* <div className="w-full border border-black">
        <div className="grid md:grid-cols-2 grid-cols-1 overflow-hidden lg:h-[90vh] h-auto"> */}
        {/* Story Header */}
        {/* <Header /> */}
        {/* Story Time
          line */}
        {/* <Timeline />
        </div>
      </div>
      <div className="">
        <UpcomingEve />
      </div>
      <Contact />
      <Footer /> */}
      </div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const { data: hero }: AxiosResponse<CollectionResponse<HeroSec[]>> =
//     await getHero();

//   const { data: stat }: AxiosResponse<CollectionResponse<StatSec[]>> =
//     await getStats();

//   const { data: timeline }: AxiosResponse<CollectionResponse<TimelineSec[]>> =
//     await getTimeline();

//   const { data: event }: AxiosResponse<CollectionResponse<EventSec[]>> =
//     await getEvents();

//   const { data: achievement }: AxiosResponse<CollectionResponse<AchieveSec[]>> =
//     await getAchievements();

//   const { data: team }: AxiosResponse<CollectionResponse<TeamSec[]>> =
//     await getTeam();
//   return {
//     props: {
//       hero,
//       stat,
//       timeline,
//       event,
//       achievement,
//       team,
//     },
//   };
// };
