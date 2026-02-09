import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import Card from "@/components/sections/Card";
import TestimonialHero from "@/components/sections/TestimonialHero";
import FounderNote from "@/components/sections/FounderNote";
import FooterLinks from "@/components/sections/FooterLinks";
import HelpCTA from "@/components/sections/HelpCTA";

export default function HomePage() {
  return (
    <>
    <Navbar />
      <Hero />
     
      <TrustedBy />
      <Features />
      <Card />
      <TestimonialHero />
      

      <FounderNote/>
      <HelpCTA />
      <FooterLinks />
       
    </>
  );
}
