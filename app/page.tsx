import HeroSection from "@/components/hero-section"
import PhilosophySection from "@/components/philosophy-section"
import ExpectationsSection from "@/components/expectations-section"
import FeaturedCreationsSection from "@/components/featured-creations-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProcessSection from "@/components/process-section"
import CtaSection from "@/components/cta-section"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-serif">
      <HeroSection />
      <PhilosophySection />
      <ExpectationsSection />
      <FeaturedCreationsSection />
      <TestimonialsSection />
      <ProcessSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
