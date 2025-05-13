import Image from "next/image"

export default function FeaturedCreationsSection() {
  const creations = [
    {
      title: "The Courtyard of Stillness",
      location: "Sydney, Australia",
      image: "/images/garden-sydney.jpg",
    },
    {
      title: "Hilltop Zen Retreat",
      location: "California, USA",
      image: "/images/garden-california.jpg",
    },
    {
      title: "Maple Serenity Garden",
      location: "Toronto, Canada",
      image: "/images/garden-toronto.jpg",
    },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">Featured Creations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creations.map((creation, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src={creation.image || "/placeholder.svg"}
                  alt={`${creation.title} – ${creation.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-light">{creation.title}</h3>
                <p className="text-sm text-white/80">{creation.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
