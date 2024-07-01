import Image from "next/image";
import { Inter } from "next/font/google";
import HeroPage from "./HomeComponent/HeroPage";
import SectionOne from "./HomeComponent/SectionOne";
import SectionTwo from "./HomeComponent/SectionTwo";
import SectionThree from "./HomeComponent/SectionThree";
import SectionFour from "./HomeComponent/SectionFour";
import SectionFive from "./HomeComponent/SectionFive";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
    <HeroPage/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    </>
    
  );
}
