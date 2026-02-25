"use client";

import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogs.json";
import { useTheme } from "@/Context/ThemeContext/page";
import Navbar from "@/layouts/Navbar";
import FooterLinks from "@/layouts/FooterLinks";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const params = useParams();
  const { dark } = useTheme();
  const slug = params?.slug;

  const blog = blogData.blogs.find((item) => item.slug === slug);
  if (!blog)
    return <div className="text-center mt-32 text-xl">Blog not found</div>;

  const relatedBlogs = blogData.blogs.filter((item) => item.slug !== slug);

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar blogpage={true} />

      <article className="container mx-auto px-6 my-13  py-16 max-w-4xl">
        {/* Back */}
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black"
        >
          <div className="w-6 h-6 flex items-center justify-center bg-black rounded-full text-white">
            <ArrowLeft className="w-3 h-3" />
          </div>
          All articles
        </Link>

        {/* Header */}
        <div className="mt-6 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <span className="text-green-600">{blog.category}</span>
            <span>/</span>
            <span className="text-gray-500">{blog.readTime}</span>
          </div>

          <h1 className="text-4xl max-w-xl font-semibold leading-tight mt-3">
            {blog.title}
          </h1>
          <p className="text-gray-500 font-mono text-xs uppercase mt-4">
            {blog.publishedAt}
          </p>
        </div>

        <hr
          className={`my-10 ${dark ? "border-gray-800" : "border-gray-200"}`}
        />

        <div className=" flex flex-col-reverse md:flex-row  lg:flex gap-16">
          {/* Main Content */}
          <div className="max-w-3xl ">
            {/* Featured Image */}
            <Image
              src={blog.image}
              width={500}
              height={500}
              alt={blog.title}
              className="rounded-3xl mb-10 w-full object-cover"
            />

            {/* Summary */}
            <div
              className={`${dark ? "bg-black text-white" : "bg-gray-100 text-gray-800"} p-6 rounded-2xl mb-10`}
            >
              <p className="text-xs font-mono uppercase text-green-600 mb-2">
                Summary
              </p>
              <p className={`${dark ? "text-white" : "text-gray-700"}`}>
                {blog.description}
              </p>
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              {blog.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Related Posts */}
            <div className="pt-16">
              <h3 className="text-2xl font-medium mb-6">
                More blog posts to read
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.slug}`}
                    className="group"
                  >
                    <div className="rounded-2xl overflow-hidden aspect-video relative">
                      <Image
                        src={item.image}
                        fill
                        alt={item.title}
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-mono uppercase text-green-600">
                        {item.category}
                      </span>
                      <h4 className="text-lg font-medium mt-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">
                        {item.publishedAt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* esko upar dikhan hai kevam sm screen me */}
          {/* Sidebar */}
          <div className="md:flex flex-col h-fit lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={blog.author.avatar}
                width={48}
                height={48}
                alt={blog.author.name}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{blog.author.name}</p>
                <p className="text-sm text-gray-500">{blog.author.role}</p>
              </div>
            </div>

            <p className="text-xs font-mono uppercase text-gray-400 mb-2">
              Share this article
            </p>

            <div className="flex gap-3">
              {/* All buttons perfectly centered */}
              <button
                className={`w-8 h-8 flex items-center justify-center rounded-full ${dark ? "bg-gray-800" : "bg-gray-100"} p-1`}
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-muted group-hover:text-text-main transition-colors duration-100 w-4 h-4"
                >
                  <path
                    d="M11.4595 11.5714V18.889H8.06641V6.24428H11.2672L11.3238 9.39982H11.1202C11.452 8.3442 11.9534 7.52987 12.6244 6.95682C13.3031 6.37623 14.1777 6.08594 15.2484 6.08594C16.1231 6.08594 16.8846 6.27821 17.5331 6.66275C18.189 7.03976 18.6942 7.58642 19.0486 8.30273C19.4105 9.0115 19.5915 9.85977 19.5915 10.8475V18.889H16.1985V11.4356C16.1985 10.6515 15.9949 10.0369 15.5877 9.59209C15.1881 9.14722 14.6301 8.92479 13.9138 8.92479C13.4388 8.92479 13.0128 9.03035 12.6358 9.24148C12.2663 9.44506 11.976 9.74289 11.7649 10.135C11.5613 10.5271 11.4595 11.0059 11.4595 11.5714Z"
                    fill="currentColor"
                  />
                  <path
                    d="M1.77748 18.889V6.2442H5.17054V18.889H1.77748ZM3.47401 4.59292C2.96128 4.59292 2.52395 4.42326 2.16203 4.08396C1.8001 3.74465 1.61914 3.33372 1.61914 2.85115C1.61914 2.36858 1.8001 1.95765 2.16203 1.61834C2.52395 1.27903 2.96128 1.10938 3.47401 1.10938C3.98674 1.10938 4.42406 1.27903 4.78599 1.61834C5.15546 1.9501 5.34019 2.36104 5.34019 2.85115C5.34019 3.33372 5.15546 3.74465 4.78599 4.08396C4.42406 4.42326 3.98674 4.59292 3.47401 4.59292Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* Repeat other buttons with same classes */}
              <button
                className={`w-8 h-8 flex items-center justify-center rounded-full ${dark ? "bg-gray-800" : "bg-gray-100"} p-1`}
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-muted group-hover:text-text-main transition-colors duration-100 w-4 h-4"
                >
                  <mask
                    id="mask0_9208_2830"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="21"
                    height="20"
                    style={{
                      maskType: "luminance",
                      WebkitMaskType: "luminance",
                    }}
                  >
                    <path d="M20.6055 0H0.605469V20H20.6055V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_9208_2830)">
                    <path
                      d="M12.1188 8.75562L18.0382 1.875H16.6357L11.4957 7.84938L7.39062 1.875H2.65625L8.86375 10.9094L2.65625 18.125H4.05875L9.48625 11.8156L13.8213 18.125H18.5563L12.1188 8.75562ZM10.1975 10.9888L9.56875 10.0894L4.56437 2.93125H6.71875L10.7575 8.70812L11.3863 9.6075L16.6363 17.1169H14.4819L10.1975 10.9888Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>

              <button
                className={`w-8 h-8 flex items-center justify-center rounded-full ${dark ? "bg-gray-800" : "bg-gray-100"} p-1`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-muted group-hover:text-text-main transition-colors duration-100 w-4 h-4"
                >
                  <path
                    d="M0 0V16H16V0H0ZM8.5 9.5V12.5H7.5V9.5L4 3.5H5.2L8 8.3L10.8 3.5H12L8.5 9.5Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <button
                className={`w-8 h-8 flex items-center justify-center rounded-full ${dark ? "bg-gray-800" : "bg-gray-100"} p-1`}
              >
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 select-none text-muted group-hover:text-text-main transition-colors duration-100 w-4 h-4"
                >
                  <path
                    d="M6.50954 5.5257C6.27419 5.65053 6.05322 5.81215 5.85535 6.01072L5.84758 6.0185C4.77346 7.09261 4.77346 8.83327 5.84758 9.90738L7.53924 11.5991C8.61336 12.6732 10.354 12.6732 11.4281 11.5991L11.4359 11.5913C12.51 10.5172 12.51 8.7765 11.4359 7.70238L10.8429 7.10941"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.49269 8.80265C7.72805 8.67782 7.94902 8.5162 8.14689 8.31763L8.15467 8.30985C9.22878 7.23573 9.22878 5.49507 8.15467 4.42096L6.46299 2.72929C5.38888 1.65518 3.64821 1.65518 2.5741 2.72929L2.56633 2.73707C1.49221 3.81118 1.49221 5.55185 2.56633 6.62596L3.1593 7.21893"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>

      <FooterLinks />
    </div>
  );
}
