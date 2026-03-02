"use client";
import Navbar from "@/layouts/Navbar";
import PricingSection from "@/components/Pricing/PricingHero";
import CustomizationSection from "@/components/Pricing/CustomizationSection";
import FaqSection from "@/components/Pricing/FaqSection";
import FooterLinks from "@/components/Mainsection/FooterLinks";
import { useTheme } from "@/Context/ThemeContext/page";

export default function PricingPage() {
  const { dark } = useTheme();
  const blogpage = true;
  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar blogpage={blogpage} />
      <PricingSection />
      <CustomizationSection />
      <FaqSection />
      <FooterLinks />
    </div>
  );
}
