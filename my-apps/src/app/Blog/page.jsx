"use client";
import { useTheme } from "@/Context/ThemeContext/page";
import Navbar from "@/layouts/Navbar";
import BlogHero from "@/components/BlogSection/Bloghero";
import BlogCard from "@/components/BlogSection/BlogCard";
import FooterLinks from "@/layouts/FooterLinks";
export default function BlogPage() {
  const { dark } = useTheme();
  const blogpage = true;
  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar blogpage={blogpage} />
      <BlogHero />
      <BlogCard />
      <FooterLinks />
    </div>
  );
}
