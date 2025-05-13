export default function TestimonialsSection() {
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
    <section className="py-24 md:py-32 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-10 shadow-sm">
              <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <p className="font-semibold">— {testimonial.name}</p>
              <p className="text-sm text-stone-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
