"use client";
import Navbar from "@/layouts/Navbar";
import TrustedCustomers from "@/components/customers/TrustedCustomers";
import FooterLinks from "@/components/Mainsection/FooterLinks";
import TrustedBy from "@/components/customers/TrustedBy";
import VideoTestimonials from "@/components/customers/VideoTestimonials";
import { useTheme } from "@/Context/ThemeContext/page";

export default function PricingPage() {
  const { dark } = useTheme();
  const blogpage = true;
  return (
    <div className="bg-primary" >
      <Navbar blogpage={blogpage} />
      <TrustedCustomers />
      <TrustedBy />
      <VideoTestimonials />
      <FooterLinks />
    </div>
  );
}
