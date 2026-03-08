"use client";
import Navbar from "@/layouts/Navbar";
import PricingSection from "@/components/Pricing/PricingHero";
import CustomizationSection from "@/components/Pricing/CustomizationSection";
import CustomerStories from "@/components/Homesection/CustomerStories";
import  TrustedByHome from "@/components/Homesection/TrustedByHome";
import Help from "@/components/Homesection/Help";
import FaqSection from "@/components/Pricing/FaqSection";
import FooterLinks from "@/components/Mainsection/FooterLinks";
import { useTheme } from "@/Context/ThemeContext/page";

export default function PricingPage() {
  const { dark } = useTheme();
  const blogpage = true;
  return (
    <div className="bg-primary" >
      <Navbar blogpage={blogpage} />
      <PricingSection />
      <TrustedByHome />
      <CustomizationSection />
       <CustomerStories />
      <FaqSection />
       <Help />
      <FooterLinks />
    </div>
  );
}
