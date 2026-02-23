"use client";
import React, { useState } from "react";


export default function BlogCard() {
    const [activeTab, setActiveTab] = useState("All");

    // Step 2: Categories array (ye tabs me show hoga)
   const categories = [
  "All",
  "AI trends",
  "Announcements",
  "For founders",
  "Engineering",
  "Design",
  "Best practices",
 
];

   const blogs = [
  {
    id: 1,
    category: "Announcements",
    title: "Your docs, your frontend, our content engine",
    description:
      "Enterprise teams can now own their docs frontend while Mintlify handles the content engine.",
    image:
      "https://www.mintlify.com/_next/image?url=%2Fimages%2Ffeatured%2Fcustom-frontends-4.png&w=640&q=75",
    author: "Hahnbee Lee",
    role: "Co-Founder",
    avatar: "https://www.mintlify.com/blog/authors/ethan.webp",
  },
  {
    id: 2,
    category: "Best practices",
    title: "Take control of your documentation system",
    description:
      "New features for technical writers who need customizable documentation systems.",
    image:
      "https://www.mintlify.com/_next/image?url=%2Fimages%2Ffeatured%2Fwriter-devex.png&w=640&q=75",
      author: "Hahnbee Lee",
    role: "Co-Founder",
    avatar: "https://www.mintlify.com/blog/authors/hahnbee.webp",
  },
  {
    id: 3,
    category: "AI trends",
    title: "Almost half your docs traffic is AI",
    description:
      "Nearly half of all the traffic to your documentation site is now AI agents.",
    image:
      "https://www.mintlify.com/_next/image?url=%2Fimages%2Fai-traffic.png&w=640&q=75",
    author: "Peri Langlois",
    role: "Head of Product Marketing",
    avatar: "https://www.mintlify.com/blog/authors/peri.webp",
  },
  {
    id: 4,
    category: "Engineering",
    title: "@mintlify for better docs, faster",
    description:
      "The improved agent means better contributions from my team.",
    image:
      "https://www.mintlify.com/_next/image?url=%2Fimages%2Fai-traffic.png&w=640&q=75",
    author: "Ethan Palm",
    role: "Technical Writing",
    avatar: "https://www.mintlify.com/blog/authors/peri.webp",
  },
];

    const filteredBlogs = activeTab === "All" ? blogs : blogs.filter(blog => blog.category === activeTab);
    return (
        <section className="max-w-5xl mx-auto px-4 pt-8 pb-32">

            <div
  className="
    flex 
    gap-3 
    my-6 
    mb-15 
    overflow-x-auto 
    hide-scrollbar 
    whitespace-nowrap
    flex-nowrap
    w-full
  "
>
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveTab(category)}
      className={`
        px-4 
        py-1 
        rounded-full 
        flex-shrink-0
        ${
          activeTab === category
            ? "bg-black text-white"
            : "text-gray-500 hover:text-gray-900"
        }
      `}
    >
      {category}
    </button>
  ))}
</div>
            <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-x-5 gap-y-12">

                {filteredBlogs.map((blog) => (

                    <a key={blog.id} href="#" className="group focus:outline-none">

                        <div className="flex flex-col h-full gap-6">

                            {/* Image */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden">

                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300" />

                            </div>


                            {/* Content */}
                            <div className="flex flex-col gap-2 flex-grow">

                                <span className="text-green-800 text-xs uppercase font-mono">
                                    {blog.category}
                                </span>

                                <h3 className="text-xl font-medium">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-500 text-sm line-clamp-2">
                                    {blog.description}
                                </p>

                            </div>


                            {/* Author */}
                            <div className="flex items-center gap-3 mt-auto">

                                <img
                                    src={blog.avatar}
                                    alt={blog.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <p className="text-sm font-medium">
                                        {blog.author}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {blog.role}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </a>

                ))}

            </div>

        </section>
    );
}