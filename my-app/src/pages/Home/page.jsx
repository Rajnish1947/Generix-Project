import Navbar from "@/components/layout/Navbar";
import Homeherosection from "@/components/Homesection/Homherosection";
import TrustedBy from "@/components/Frontsection/TrustedBy";
import HomeCta from "@/components/Homesection/HomeCta";
import Card from "@/components/Frontsection/Card";
import TestimonialHero from "@/components/Frontsection/TestimonialHero";
import FounderNote from "@/components/Frontsection/FounderNote";
import FooterLinks from "@/layouts/FooterLinks";
import HelpCTA from "@/components/Frontsection/HelpCTA";

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
