export default function ProcessSection() {
  const steps = [
    "Initial Consultation (Zoom / In-person visit available)",
    "Site Proposal & Moodboard Presentation",
    "Quotation and Timeline Agreement",
    "Project Execution with Global Coordination",
    "Optional Long-Term Maintenance Program",
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">How It Works</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-y-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mb-6">
                  <span className="text-lg">{index + 1}</span>
                </div>
                <p className="text-sm md:text-base max-w-[160px]">{step}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block w-full h-0.5 bg-stone-200 relative top-[-45px] left-[50%]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
