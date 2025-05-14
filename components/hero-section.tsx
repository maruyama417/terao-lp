"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToNextSection = () => {
    const philosophySection = document.getElementById("philosophy")
    if (philosophySection) {
      philosophySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="object-cover h-full w-full brightness-[0.8]" aria-hidden="true">
          <source src="/videos/garden-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <div
        className={cn(
          "container mx-auto px-4 relative z-20 text-white text-center transition-all duration-1000 ease-out",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <div
          className={cn(
            "border-t border-b border-white/30 py-6 mb-12 transition-all duration-1000 delay-300 ease-out",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
        >
          <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">The Art of Tranquility</h1>
          <p className="text-sm md:text-base tracking-widest mt-2">Bespoke Japanese Gardens by Terao Engei Doboku</p>
        </div>

        <h2
          className={cn(
            "text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 ease-out",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Own a Living Masterpiece — A Japanese Garden Crafted by Artisans
        </h2>

        <p
          className={cn(
            "text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-700 ease-out",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
        >
          From the heart of Hiroshima to your estate. 50 years of legacy, delivered with elegance and intention.
        </p>

        <Button
          className={cn(
            "bg-amber-700/90 hover:bg-amber-600 text-white border-none rounded-none px-8 py-7 text-base tracking-widest transition-all duration-500 shadow-lg hover:shadow-xl",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
          aria-label="Request your private consultation"
        >
          Request Your Private Consultation
        </Button>
      </div>

      <button
        onClick={scrollToNextSection}
        className={cn(
          "absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center z-20 text-white/80 hover:text-white transition-all duration-300 cursor-pointer",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        aria-label="Scroll down to learn more"
      >
        <span className="text-sm tracking-widest mb-2">Scroll</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  )
}
