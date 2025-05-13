import ConsultationForm from "@/components/consultation-form"

export default function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Your sanctuary awaits.</h2>

          <p className="text-lg mb-12">
            Due to the artisanal nature of our work, we accept only a limited number of projects each year. Please
            complete the form below to request a private consultation.
          </p>

          <ConsultationForm />
        </div>
      </div>
    </section>
  )
}
