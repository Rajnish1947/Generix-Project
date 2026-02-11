import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Frontsection/Hero";
import TrustedBy from "@/components/Frontsection/TrustedBy";
import Features from "@/components/Frontsection/Features";
import Card from "@/components/Frontsection/Card";
import TestimonialHero from "@/components/Frontsection/TestimonialHero";
import FounderNote from "@/components/Frontsection/FounderNote";
import FooterLinks from "@/layouts/FooterLinks";
import HelpCTA from "@/components/Frontsection/HelpCTA";

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
