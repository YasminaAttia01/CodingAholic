/* eslint-disable @typescript-eslint/no-unused-vars */
import { relative } from "path"
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid"
import RecentProjetcs from "./components/RecentProjetcs";
import { navItems } from "./data";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Approach from "./components/Approach";


export default function Home() {
  return (

    <main className="relative bg-[#f8f4ef] flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjetcs />
        <Clients />
        <Experience />
        <Approach />
        <Footer />

      </div>
    </main>
  );
}
