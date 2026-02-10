import Navbar from "@/components/layout/Navbar";
import Homeherosection from "@/components/Homesection/Homherosection";
import TrustedBy from "@/components/sections/TrustedBy";
import HomeCta from "@/components/Homesection/HomeCta";
import Card from "@/components/sections/Card";
import TestimonialHero from "@/components/sections/TestimonialHero";
import FounderNote from "@/components/sections/FounderNote";
import FooterLinks from "@/components/sections/FooterLinks";
import HelpCTA from "@/components/sections/HelpCTA";

export default function HomePage() {
  return (
    <>
    <Navbar />
      <Homeherosection />
     
      <TrustedBy />
      <HomeCta/>
      <Card />
      <TestimonialHero />
      

      <FounderNote/>
      <HelpCTA />
      <FooterLinks />
       
    </>
  );
}
