"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import ConsultationForm from "@/components/consultation-form"
import { cn } from "@/lib/utils"

export default function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-light mb-8 transition-all duration-1000 ease-out",
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Your sanctuary awaits.
          </h2>

          <p
            className={cn(
              "text-lg mb-16 leading-relaxed transition-all duration-1000 delay-200 ease-out",
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Due to the artisanal nature of our work, we accept only a limited number of projects each year. Please
            complete the form below to request a private consultation.
          </p>

          <div
            className={cn(
              "transition-all duration-1000 delay-400 ease-out",
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
