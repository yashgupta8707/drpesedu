import React from 'react';
import { motion } from 'framer-motion';
// Import specific icons from Lucide React
import { GraduationCap, Leaf, Lightbulb, Users, Scale, Globe } from 'lucide-react';

const valuesData = [
  {
    id: 1,
    title: "Excellence in Education",
    description: "We are committed to fostering a rigorous academic environment that encourages intellectual curiosity, critical thinking, and a lifelong passion for learning.",
    icon: <GraduationCap />, // Lucide React Icon
  },
  {
    id: 2,
    title: "Holistic Development",
    description: "Beyond academics, we nurture the intellectual, emotional, social, and physical well-being of every student, fostering responsible and compassionate individuals.",
    icon: <Leaf />, // Lucide React Icon
  },
  {
    id: 3,
    title: "Innovation & Research",
    description: "We encourage pioneering thought and cutting-edge research, providing resources and mentorship to empower students and faculty to push the boundaries of knowledge.",
    icon: <Lightbulb />, // Lucide React Icon
  },
  {
    id: 4,
    title: "Community & Inclusivity",
    description: "We cultivate a diverse, inclusive, and supportive community where every voice is heard, respected, and valued, fostering a sense of belonging for all.",
    icon: <Users />, // Lucide React Icon
  },
  {
    id: 5,
    title: "Ethical Leadership",
    description: "We instill strong moral principles and leadership qualities, empowering students to act with integrity, responsibility, and a commitment to positive societal impact.",
    icon: <Scale />, // Lucide React Icon
  },
  {
    id: 6,
    title: "Global Perspective",
    description: "We prepare students to thrive in an interconnected world, fostering cultural understanding, global awareness, and the skills needed for international collaboration.",
    icon: <Globe />, // Lucide React Icon
  },
];

export default function ValuesVisionSection() {
  // Framer Motion variants for the header text
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Framer Motion variants for the staggered grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly increased stagger for more deliberate feel
        delayChildren: 0.25,   // Slightly increased initial delay
      },
    },
  };

  // Framer Motion variants for individual value cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start further down for a smoother slide-up
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 10 } }, // Softer spring animation
  };

  return (
    <section className="bg-gray-50 py-8 lg:py-12 px-4 md:px-12"> {/* Softer background, more vertical padding */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-4 tracking-tight leading-none"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Core <span className="text-indigo-700">Principles</span> {/* Changed highlight color to a deeper indigo */}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 text-center mb-6 max-w-3xl mx-auto leading-relaxed" /* More margin-bottom */
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Driving our mission and shaping every student's journey, these principles are the foundation of our vibrant community.
        </motion.p>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" /* Increased gap */
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {valuesData.map((value) => (
            <motion.div
              key={value.id}
              className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center group transition-all duration-300 ease-in-out hover:border-indigo-300 hover:bg-white" /* Enhanced border and background on hover, no shadow */
              variants={cardVariants}
            >
              <div className="mb-8 p-3 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors duration-300">{value.icon}</div> {/* Icon wrapped in a circle with subtle hover */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                {value.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}