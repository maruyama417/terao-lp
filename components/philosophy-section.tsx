"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section id="philosophy" ref={ref} className="py-24 md:py-32 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3
            className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-light mb-12 italic transition-all duration-1000 ease-out",
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            We don't build gardens.
            <br />
            We craft sanctuaries.
          </h3>

          <p
            className={cn(
              "text-lg leading-relaxed mb-10 transition-all duration-1000 delay-300 ease-out",
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Terao Engei Doboku is a multi-generational landscape atelier founded in 1972 in Hiroshima, Japan. For over
            50 years, we have preserved and evolved the art of Japanese garden design — creating sacred spaces where
            time slows and the soul breathes.
          </p>

          <p
            className={cn(
              "text-xl font-semibold transition-all duration-1000 delay-500 ease-out",
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Each garden is one-of-a-kind, deeply personal, and globally rare.
          </p>
        </div>
      </div>
    </section>
  )
}
