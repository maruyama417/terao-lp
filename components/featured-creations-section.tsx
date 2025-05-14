"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function FeaturedCreationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const creations = [
    {
      title: "The Courtyard of Stillness",
      location: "Sydney, Australia",
      image: "/images/garden-sydney.jpg",
    },
    {
      title: "Hilltop Zen Retreat",
      location: "California, USA",
      image: "/images/garden-california.jpg",
    },
    {
      title: "Maple Serenity Garden",
      location: "Toronto, Canada",
      image: "/images/garden-toronto.jpg",
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-light text-center mb-20 transition-all duration-1000 ease-out",
            hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Featured Creations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {creations.map((creation, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-sm shadow-md transition-all duration-1000 ease-out",
                hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16",
              )}
              style={{
                transitionDelay: hasAnimated ? `${index * 200}ms` : "0ms",
              }}
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={creation.image || "/placeholder.svg"}
                  alt={`${creation.title} – ${creation.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl font-light mb-1">{creation.title}</h3>
                <p className="text-sm text-white/80">{creation.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
