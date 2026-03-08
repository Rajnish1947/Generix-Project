"use client"
import { Play } from "lucide-react"

const videos = [
  {
    name: "Matt Palmer",
    role: "Developer Relations at Replit",
    quote:
      "Having this interface that feels like Notion or Google Docs, but is backed by version control...",
    image: "https://www.mintlify.com/_next/image?url=%2Fcustomers%2Freplit-thumbnail.jpeg&w=1080&q=75",
  },
  {
    name: "Paul Klein",
    role: "CEO at Browserbase",
    quote: "At Browserbase, our docs are the product.",
    image: "https://www.mintlify.com/_next/image?url=%2Fcustomers%2Fbrowserbase-thumbnail.jpeg&w=1080&q=75",
  },
]

export default function VideoTestimonials() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <p className="uppercase font-mono text-sm tracking-[0.2em] text-gray-500 mb-3">
          Video Testimonials
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-12">
          Hear from our customers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-[4/3] bg-gray-100"
            >
              {/* Background Image */}
              <img
                src={video.image}
                alt={video.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="text-white ml-1" size={28} />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/90 mb-3 line-clamp-2 text-sm sm:text-base">
                  “{video.quote}”
                </p>
                <p className="text-white font-semibold text-sm">
                  {video.name}
                </p>
                <p className="text-white/60 text-xs">
                  {video.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}