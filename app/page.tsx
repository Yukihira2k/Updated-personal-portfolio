import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import { navItems } from "@/data";
import Grid from "../components/grid"
import RecentProjects from "@/components/RecentProjects";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
  
      <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Approach/>
        <Footer/>
   
      </div>
    </main>

  );
}
