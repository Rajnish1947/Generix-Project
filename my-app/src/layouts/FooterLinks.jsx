import React from "react";
import Link from "next/link";
import { Linkedin, Github, Twitter } from "lucide-react";
const FooterLinks = () => {
  return (
    <section className="w-full relative z-20 bg-gray-100 border-t border-gray-200">
      <div className="w-full flex items-stretch">
        {/* LEFT EMPTY DIV */}
        <div className="hidden md:block w-45 border-r border-gray-200" />

        {/* CENTER CONTENT */}
        <div className="flex-1">
          {/* Middle content */}
          <div className="mb-10 border-b border-gray-200 flex items-center justify-between px-4 py-4">
            {/* LEFT SIDE (Logo) */}
            <div>
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/mintlify-wordmark.svg"
                  alt="Mintlify"
                  className="h-6 w-auto invert"
                />
              </Link>
            </div>

            {/* RIGHT SIDE (Social Icons) */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
            {/* Footer links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                {
                  title: "Explore",
                  items: ["Startups", "Enterprise", "Switch", "OSS Program"],
                },
                {
                  title: "Resources",
                  items: [
                    "Customers",
                    "Blog",
                    "Pricing",
                    "Guides",
                    "Feature Requests",
                  ],
                },
                {
                  title: "Documentation",
                  items: [
                    "Getting Started",
                    "API Reference",
                    "Components",
                    "Changelog",
                  ],
                },
                {
                  title: "Company",
                  items: ["Careers", "Wall of Love"],
                },
                {
                  title: "Legal",
                  items: [
                    "Privacy Policy",
                    "Responsible Disclosure",
                    "Terms of Service",
                    "Security",
                    "DSR / DSAR",
                  ],
                },
              ].map((col) => (
                <div key={col.title}>
                  <h3 className="mb-3 uppercase text-xs tracking-wider font-medium text-gray-500">
                    {col.title}
                  </h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm text-gray-800 hover:text-black hover:bg-gray-100 px-3 py-1.5 rounded-full inline-block transition"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200  px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center gap-6">
            <p className="text-sm font-medium text-center">
              Backed by enterprise-grade security
            </p>

            {/* SOC Badge */}
            <div className="relative size-[60px] grid place-items-center scale-125">
              <svg viewBox="0 0 150 150" className="absolute size-[51px]">
                <circle
                  cx="75"
                  cy="75"
                  r="74"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                  fill="none"
                  className="text-gray-400"
                />
              </svg>

              <svg viewBox="0 0 110 110" className="absolute size-[35px]">
                <circle
                  cx="55"
                  cy="55"
                  r="54"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                  fill="none"
                  className="text-gray-400"
                />
              </svg>

              <div className="size-[35px] rounded-full bg-gray-100 absolute" />

              <div className="z-10 text-center scale-105">
                <p className="text-[7.5px] font-semibold text-gray-500">
                  AICPA
                </p>
                <div className="w-6 h-px bg-gray-300 my-0.5 mx-auto" />
                <p className="text-[7.5px] font-semibold text-gray-500">
                  SOC II
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center gap-4">
            {/* Status */}
            <div className="flex-1">
              {/* <span className="size-2 p-1 rounded-4xl bg-green-500" ></span> */}
              All systems normal
            </div>

            {/* Copyright */}
            <div className="flex-1 text-center text-sm text-gray-500">
              © 2026 Mintlify, Inc.
            </div>

            {/* Theme Switcher (UI only) */}
            <div className="flex-1 flex justify-end">
              <div className="flex bg-gray-100 rounded-full p-1 gap-1">
                <button className="size-6 rounded-full hover:bg-white transition" />
                <button className="size-6 rounded-full bg-white shadow" />
                <button className="size-6 rounded-full hover:bg-white transition" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT EMPTY DIV */}
        <div className="hidden md:block w-45  border-l border-gray-200" />
      </div>
    </section>
  );
};

export default FooterLinks;
