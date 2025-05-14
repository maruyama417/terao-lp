"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const steps = [
    "Initial Consultation (Zoom / In-person visit available)",
    "Site Proposal & Moodboard Presentation",
    "Quotation and Timeline Agreement",
    "Project Execution with Global Coordination",
    "Optional Long-Term Maintenance Program",
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
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center text-center transition-all duration-700 ease-out",
                  hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                )}
                style={{
                  transitionDelay: hasAnimated ? `${index * 150}ms` : "0ms",
                }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-green-700/30 flex items-center justify-center mb-6 bg-white shadow-sm">
                  <span className="text-lg font-light">{index + 1}</span>
                </div>
                <p className="text-sm md:text-base max-w-[160px] leading-relaxed">{step}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block w-full h-0.5 bg-green-700/20 relative top-[-45px] left-[50%]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
