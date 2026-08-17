import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-[#F9FAFB] px-6 md:px-20 py-16">
      <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/RPES.jpeg"
            alt="Institution"
            className="rounded-3xl w-full h-100 shadow-xl object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full md:w-1/2 text-gray-800"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 leading-tight text-[#111827]">
            About Our Institution
          </h2>
          <p className="text-md mb-6 leading-relaxed text-[#374151]">
            The Dr. Rajendra Prasad Educational Society, established in the year 2000, is one of the leading educational societies in Lucknow, Uttar Pradesh. With a steadfast commitment to academic excellence, the society has been a pioneer in delivering high-quality education across various disciplines, including science, healthcare, humanities, and teacher education. It serves as a dynamic community of educators, professionals, and learners working together to foster innovation, practical knowledge, and social responsibility. Through its five branches — including a hospital-integrated medical campus in Barabanki — the society continues to shape the future of education and skill development in the region.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
