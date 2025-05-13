import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="object-cover h-full w-full brightness-[0.85]">
          <source src="/videos/garden-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-white text-center">
        <div className="border-t border-b border-white/30 py-6 mb-12">
          <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">The Art of Tranquility</h1>
          <p className="text-sm md:text-base tracking-widest mt-2">Bespoke Japanese Gardens by Terao Engei Doboku</p>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 max-w-4xl mx-auto">
          Own a Living Masterpiece — A Japanese Garden Crafted by Artisans in Japan
        </h2>

        <p className="text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto">
          From the heart of Hiroshima to your estate. 50 years of legacy, delivered with elegance and intention.
        </p>

        <Button className="bg-transparent hover:bg-white/10 text-white border border-white/60 rounded-none px-8 py-6 text-base tracking-widest transition-all duration-300">
          Request Your Private Consultation
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <div className="w-0.5 h-16 bg-white/40 animate-pulse"></div>
      </div>
    </section>
  )
}
