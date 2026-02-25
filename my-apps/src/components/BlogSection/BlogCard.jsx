
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import blogData from "@/data/blogs.json";

export default function BlogCard() {

    const [activeTab, setActiveTab] = useState("All");
    const router = useRouter();

    const categories = blogData.categories;
    const blogs = blogData.blogs;

    const filteredBlogs =
        activeTab === "All"
            ? blogs
            : blogs.filter((blog) => blog.category === activeTab);

    return (
        <section className="max-w-5xl mx-auto px-4 pt-8 pb-32">

            {/* Categories */}
            <div className="flex gap-3 my-6 mb-15 overflow-x-auto hide-scrollbar whitespace-nowrap flex-nowrap w-full">

                {categories.map((category) => (

                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`
                            px-4 py-1 rounded-full flex-shrink-0 transition
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

            {/* Blog Grid */}
            <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-x-5 gap-y-12">

                {filteredBlogs.map((blog) => (

                    <div
                        key={blog.id}
                        onClick={() => router.push(`/Blog/${blog.slug}`)}
                        className="group focus:outline-none cursor-pointer"
                    >

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
                                    src={blog.author.avatar}
                                    alt={blog.author.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>

                                    <p className="text-sm font-medium">
                                        {blog.author.name}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {blog.author.role}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}