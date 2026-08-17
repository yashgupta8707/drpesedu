import React from 'react';
import { motion } from 'framer-motion';

export default function KeyFeatures() {
  const features = [
    "More than 21 Colleges in Lucknow",
    "Best Results & Job Placements in Town",
    "More than 100 Companies tie-ups",
    "100+ Selections in Judiciary",
    "Learning through Integrated ERP & College Affiliations",
    "Extensive Library",
    "Centrally Air-Conditioning",
    "Faculty from NLU's & International Universities",
  ];

  // Framer Motion Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children by 0.1 seconds
        delayChildren: 0.2,   // Delay start of children animations by 0.2 seconds
      },
    },
  };

  // Framer Motion Variants for individual item animations (like list items)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  // Variants for the main content block (left side)
  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variants for the image block (right side)
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  // Framer Motion variants for the overlay card itself (for its initial appearance)
  const cardOverlayVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-8 lg:py-12 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Key Features List */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          variants={contentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 leading-tight">
            Discover Our <br className="hidden sm:inline" />
            <span className="text-blue-700">Core Advantages</span>
          </h2>
          <motion.ul
            className="space-y-4 text-lg text-gray-700 list-none p-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start lg:items-center"
                variants={itemVariants}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1 lg:mt-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Side: Engaging Image with Call to Action */}
        {/* Removed 'group' from this div. We will apply hover directly to the overlay. */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/clg-image-2.jpg" // replace with your actual image path
            alt="Smiling student inviting to admissions"
            // Removed rotation classes from here for cleaner hover on card
            className="w-full  h-100 rounded-xl shadow-2xl object-cover border-4 border-white"
          />
          {/* Creative Admissions Call to Action Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            variants={cardOverlayVariants} // Use its own variants for entrance
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* The actual card div. Add hover effect directly here or wrap in another motion.div for hover */}
            {/* <motion.div
              className="max-w-sm bg-blue-700 text-white p-6 rounded-lg shadow-xl text-center backdrop-blur-xs cursor-pointer" // Added cursor-pointer
              // Framer Motion for hover effect on the card
              whileHover={{ scale: 1.05, opacity: 1 }} // Scale up and become fully opaque on hover
              transition={{ duration: 0.3, ease: "easeOut" }}
              // Set initial opacity slightly lower to imply it becomes more prominent on hover
              // This is its base state after the initial 'whileInView' animation
              style={{ opacity: 0.8 }}
            >
              <h3 className="text-3xl font-extrabold mb-2 leading-tight">ADMISSIONS</h3>
              <p className="text-xl font-semibold mb-4">OPEN</p>
              <p className="text-sm">HOLISTIC EDUCATION, GUIDED BY EXPERT FACULTY AND ENRICHED BY STATE-OF-THE-ART CAMPUS</p>
              <button className="mt-6 px-6 py-2 bg-white text-blue-700 font-bold rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 pointer-events-auto">
                Apply Now
              </button>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background pattern (changed color to match new theme) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H0z\'/%3E%3C/g%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
      }}></div>
    </section>
  );
}