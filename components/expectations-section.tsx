"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Leaf, Palette, Truck, Users, Gem } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ExpectationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const expectations = [
    {
      icon: <Users className="h-8 w-8 text-green-300" />,
      text: "Private consultation with Japanese garden masters",
    },
    {
      icon: <Palette className="h-8 w-8 text-green-300" />,
      text: "Tailor-made designs based on your site, vision, and lifestyle",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-300" />,
      text: "Rare materials sourced directly from Japan (rocks, pines, lanterns, bamboo)",
    },
    {
      icon: <Truck className="h-8 w-8 text-green-300" />,
      text: "International project coordination and shipping",
    },
    {
      icon: <Gem className="h-8 w-8 text-green-300" />,
      text: "Discreet, detail-oriented service for high-net-worth individuals",
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-stone-900 text-stone-100">
      <div className="container mx-auto px-4">
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-light text-center mb-20 transition-all duration-1000 ease-out",
            hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          What You Can Expect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {expectations.map((expectation, index) => (
            <div
              key={index}
              className={cn(
                "border-t border-stone-700 pt-6 transition-all duration-700 ease-out",
                hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                hasAnimated && `delay-[${index * 200}ms]`,
              )}
              style={{
                transitionDelay: hasAnimated ? `${index * 200}ms` : "0ms",
              }}
            >
              <div className="flex items-start mb-4">{expectation.icon}</div>
              <p className="text-lg leading-relaxed">{expectation.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
