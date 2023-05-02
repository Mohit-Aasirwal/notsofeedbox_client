import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Events from "@/components/Events";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col w-full items-center justify-between p-24">
      <div className="bg-gray-800 flex flex-col w-full items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4">Under Development</h1>
        <p className="text-white text-lg mb-8">
          We&apos;re currently working on this website. Stay tuned!
        </p>
        {/* <Navbar /> */}
        {/* <Landing/> */}
        {/* <About/> */}
        {/* <Events/> */}
        {/* <Achievements/> */}
        {/* <Contact/> */}
      </div>
    </main>
  );
}
