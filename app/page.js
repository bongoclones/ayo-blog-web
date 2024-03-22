import Ad from "@/components/Ad";
import Entertaiment from "@/components/Entertaiment";
import Footer from "@/components/Footer";
import LatestNews from "@/components/LatestNews";
import MainNews from "@/components/MainNews";
import MostReads from "@/components/MostReads";
import Navbar from "@/components/Navbar";
import Sports from "@/components/Sports";
import TopStories from "@/components/TopStories";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col">
      {" "}
      <div>
        <Ad />
        <Ad />
      </div>
      <Navbar />
      <MainNews />
      <TopStories />
      <Entertaiment />
      <Sports />
      <LatestNews />
      <MostReads />
      <Footer />
    </div>
  );
}
