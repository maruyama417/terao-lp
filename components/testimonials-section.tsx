"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const testimonials = [
    {
      quote:
        "Terao's team didn't just build a garden — they transformed our property into a place of peace. Every stone speaks.",
      name: "Michael R.",
      title: "Private Villa Owner (Melbourne)",
    },
    {
      quote: "It's the only place where I can truly breathe. The balance, the beauty, the silence — all perfect.",
      name: "Elise G.",
      title: "Art Collector (Vancouver)",
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-light text-center mb-20 transition-all duration-1000 ease-out",
            hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-white p-10 shadow-md transition-all duration-1000 ease-out",
                hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
              style={{
                transitionDelay: hasAnimated ? `${index * 200}ms` : "0ms",
              }}
            >
              <Quote className="h-8 w-8 text-green-700/30 mb-4" aria-hidden="true" />
              <blockquote>
                <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <footer>
                  <cite>
                    <p className="font-semibold">— {testimonial.name}</p>
                    <p className="text-sm text-stone-500">{testimonial.title}</p>
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
