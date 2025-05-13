export default function ExpectationsSection() {
  const expectations = [
    "Private consultation with Japanese garden masters",
    "Tailor-made designs based on your site, vision, and lifestyle",
    "Rare materials sourced directly from Japan (rocks, pines, lanterns, bamboo)",
    "International project coordination and shipping",
    "Discreet, detail-oriented service for high-net-worth individuals",
  ]

  return (
    <section className="py-24 md:py-32 bg-stone-900 text-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">What You Can Expect</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {expectations.map((expectation, index) => (
            <div key={index} className="border-t border-stone-700 pt-6">
              <p className="text-lg leading-relaxed">{expectation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
