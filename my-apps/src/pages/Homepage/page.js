// import Navbar from "@/layouts/Navbar";
// import Homeherosection from "@/components/Homesection/Homherosection";
// import TrustedBy from "@/components/Mainsection/TrustedBy";
// import HomeCta from "@/components/Homesection/HomeCta";

// import EnterprisePage from "@/components/Homesection/Enterprise";
// import TestimonialHomeHero from "@/components/Homesection/TestimonialHomeHero";
// import CustomerStories from "@/components/Homesection/CustomerStories";
// import FooterLinks from "@/layouts/FooterLinks";
// import Help from "@/components/Homesection/Help";
// import StepperPage from "@/components/Homesection/StepperPage";
// export default function HomePage() {
//   return (
//     <>
//     <Navbar />
//       <Homeherosection />
     
//       <TrustedBy />
//       <HomeCta/>
//       <StepperPage/>
//       <EnterprisePage/>
     
//       <TestimonialHomeHero />
      

//       <CustomerStories/>
//       <Help />
//       <FooterLinks />
       
//     </>
//   );
// }
"use client";
import { useTheme } from "@/Context/ThemeContext/page";
import Navbar from "@/layouts/Navbar";
import Homeherosection from "@/components/Homesection/Homherosection";
import TrustedBy from "@/components/Mainsection/TrustedBy";
import HomeCta from "@/components/Homesection/HomeCta";
import EnterprisePage from "@/components/Homesection/Enterprise";
import TestimonialHomeHero from "@/components/Homesection/TestimonialHomeHero";
import CustomerStories from "@/components/Homesection/CustomerStories";
import FooterLinks from "@/layouts/FooterLinks";
import Help from "@/components/Homesection/Help";
import StepperPage from "@/components/Homesection/StepperPage";
import { use } from "react";

export default function HomePage() {
  const { dark } = useTheme();

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar />
      <Homeherosection />
      <TrustedBy />
      <HomeCta />
      <StepperPage />
      <EnterprisePage />
      <TestimonialHomeHero />
      <CustomerStories />
      <Help />
      <FooterLinks />
    </div>
  );
}
