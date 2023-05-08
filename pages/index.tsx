import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Events from "@/components/Events";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex h-screen flex-col w-full bg-[#B8F7D4]">
      {/* <Navbar /> */}
      {/* <Drawer/> */}
      {/* <Landing/> */}
      {/* <About/> */}
      {/* <Events/> */}
      {/* <Achievements/> */}
      {/* <Contact/> */}
      <Footer/>
      {/* <div className="bg-gray-800 flex flex-col w-full items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4">Under Development</h1>
        <p className="text-white text-lg mb-8">
          We&apos;re currently working on this website. Stay tuned!
        </p>
      </div> */}
    </main>
  );
}
