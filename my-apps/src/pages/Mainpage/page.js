import Navbar from "@/layouts/Navbar";
import Hero from "@/components//Mainsection/Hero";
import TrustedBy from "@/components/Mainsection/TrustedBy";
import Features from "@/components/Mainsection/Features";
import Card from "@/components/Mainsection/Card";
import TestimonialHero from "@/components/Mainsection/TestimonialHero";
import FounderNote from "@/components/Mainsection/FounderNote";
import FooterLinks from "@/layouts/FooterLinks";
import HelpCTA from "@/components//Mainsection/HelpCTA";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />

      <TrustedBy />
      <Features />
      <Card />
      <TestimonialHero />

      <FounderNote />
      <HelpCTA />
      <FooterLinks />
    </>
  );
}
