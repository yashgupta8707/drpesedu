import React from "react";
import { motion } from "framer-motion";

const committeeMembers = [
  {
    name: "Dr. Mamta Srivastava",
    role: "President",
    image: "/images/mamta-mam.jpg",
    message: `Dr. Rajendra Prasad Educational Society stands as a beacon of opportunity and growth, dedicated to fostering a community where knowledge flourishes and dreams take flight. Our commitment to excellence in education is matched only by our dedication to your personal and academic success. Together, let's embark on a journey of discovery and achievement, shaping a future filled with limitless possibilities.`,
  },
  {
    name: "Mr. Amrit Srivastava",
    role: "Manager",
    image: "/images/amrit-sir.jpg",
    message: `Welcome to the official website of Dr. Rajendra Prasad Educational Society — a space dedicated to igniting minds, shaping futures, and empowering education with purpose.

At our core, we believe that education is not just about imparting knowledge, but about building character, inspiring innovation, and unlocking true potential. Through our Educational Institutes and Training Programs, we aim to create opportunities for learners to grow as professionals and responsible citizens.

This platform is more than just information — it's an invitation to be part of a growing movement where education meets excellence. Let’s build a brighter future — together.`,
  },
  {
    name: "Mr. Anmol Srivastava",
    role: "Treasurer",
    image: "/images/anmol-sir.jpg",
    message: `At Dr. Rajendra Prasad Educational Society, we believe that strong financial foundations are essential to building strong educational institutions. I am entrusted with overseeing all financial operations — ensuring transparency, accountability, and sustainable growth.

From budgeting and audits to funding development, every initiative is backed by a system that values efficiency and integrity. Our goal is to invest in futures — keeping education impactful and future-ready.`,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const CommitteeMembers = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          <span className="text-blue-600"> Key Committee Members</span>
        </h2>
        <p className="text-xl ont-extrabold text-center text-gray-800 mb-10">
            Meet the dedicated leaders who guide our educational mission with vision, 
            expertise, and unwavering commitment to excellence.
          </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-50 rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow duration-300"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              custom={index}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <div className="text-xl font-semibold text-gray-900">
                {member.name}
              </div>
              <div className="text-blue-600 font-medium mt-1 mb-4">{member.role}</div>
              <p className="text-sm text-gray-700 text-left leading-relaxed whitespace-pre-wrap">
                {member.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeMembers;
