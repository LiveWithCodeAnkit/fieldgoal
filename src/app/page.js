import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import PricePlan from "@/components/pricePlan/PricePlan";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PricePlan />
    </>
  );
}
