import React from "react";

export default function HeroSection() {
  return (
    <section className="h-[160vh] w-full m-auto relative mb-8">
      {/* Image Container */}
      <div className="h-3/4 w-full overflow-hidden relative">
        <img
          src="/images/RPES.jpeg"
          alt="Dr. Rajendra Prasad Educational Society"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section Below Image */}
      <div className="h-1/4 bg-white px-8 md:px-16 py-8 text-center">
        <h1 className="text-yellow-600 text-3xl md:text-5xl font-bold">
          Dr. Rajendra Prasad Educational Society
        </h1>
        <p className="mt-4 text-gray-700 max-w-4xl mx-auto">
          Dr. Rajendra Prasad Educational Society, established in the year
          2000, is one of the leading educational societies in Lucknow, Uttar
          Pradesh. With a steadfast commitment to academic excellence, the
          society has been a pioneer in delivering high-quality education across
          various disciplines, including science, healthcare, humanities, and
          teacher education. It serves as a dynamic community of educators,
          professionals, and learners working together to foster innovation,
          practical knowledge, and social responsibility. Through its five
          branches — including a hospital-integrated medical campus in Barabanki
          — the society continues to shape the future of education and skill
          development in the region.
        </p>
      </div>
    </section>
  );
} 