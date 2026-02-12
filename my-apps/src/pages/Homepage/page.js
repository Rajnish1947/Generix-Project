import Navbar from "@/layouts/Navbar";
import Homeherosection from "@/components/Homesection/Homherosection";
import TrustedBy from "@/components/Mainsection/TrustedBy";
import HomeCta from "@/components/Homesection/HomeCta";

import EnterprisePage from "@/components/Homesection/Enterprise";
import TestimonialHomeHero from "@/components/Homesection/TestimonialHomeHero";
import FounderNote from "@/components/Mainsection/FounderNote";
import FooterLinks from "@/layouts/FooterLinks";
import HelpCTA from "@/components/Mainsection/HelpCTA";
import StepperPage from "@/components/Homesection/StepperPage";
export default function HomePage() {
  return (
    <>
    <Navbar />
      <Homeherosection />
     
      <TrustedBy />
      <HomeCta/>
      <StepperPage/>
      <EnterprisePage/>
     
      <TestimonialHomeHero />
      

      <FounderNote/>
      <HelpCTA />
      <FooterLinks />
       
    </>
  );
}
