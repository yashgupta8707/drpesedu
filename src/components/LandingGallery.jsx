import React from "react";

export default function LandingGallery() {
  const images = [
    "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
  ]

  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10">PHOTO GALLERY</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="w-full h-56 object-cover rounded-md grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/gallery"
          className="inline-block bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800 transition"
        >
          Explore All
        </a>
      </div>
    </section>
  )
}
