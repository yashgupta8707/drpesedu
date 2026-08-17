import React from "react";
import { motion } from "framer-motion"; // Make sure Framer Motion is installed

const campusData = [
  {
    id: 1,
    title: "Ansal Campus",
    location: "Shushant Golf City, Lucknow",
    description:
      "Ansal Campus is known for cutting-edge facilities, modern classrooms, and a serene academic environment. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.",
    image: "images/architecture/image.png",
    link: "#Ansal-Campus",
  },
  {
    id: 2,
    title: "Barabanki Campus",
    location: "Barabanki, Uttar Pradesh",
    description:
      "Barabanki Campus offers an advanced curriculum and top-class faculty to shape the leaders of tomorrow. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.",
    image: "images/barabanki-clg.jpg",
    link: "#barabanki-campus",
  },
  {
    id: 3,
    title: "Chinhat Campus",
    location: "Chinhat, Lucknow",
    description:
      "Chinhat Campus provides outstanding academic and extracurricular opportunities for holistic development. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.",
    image: "images/chinhat-campus.jpg",
    link: "#chinhat-campus",
  },
  {
    id: 4,
    title: "Jankipuram Campus",
    location: "Jankipuram, Lucknow",
    description:
      "Jankipuram Campus provides unparalleled education with cutting-edge research and career-oriented programs. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.",
    image: "images/jankipuram.jpg",
    link: "#jankipuram-campus",
  },
  {
    id: 5,
    title: "Ratankhand Campus",
    location: "Ratankhand, Lucknow",
    description:
      "Ratankhand Campus combines innovation and tradition, offering world-class education and research facilities. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.",
    image: "images/ratankhand.jpg",
    link: "#ratankhand-campus",
  },
];

const colleges = [
  "City Academy Law College (Chinhat)",
  "City Academy Degree College (Chinhat)",
  "City College of Management (Chinhat)",
  "City College of Management & Technology (Chinhat)",
  "City College (Chinhat)",
  "Central Law College (Ansal API, Sushant Golf City)",
  "City Girls College (Ratankhand)",
  "City Women College (Jankipuram Extension)",
  "City Law College (Jankipuram Extension)",
  "Vedanta Law College (Jankipuram Extension)",
  "City School of Pharmacy (Barabanki)",
  "City College of Pharmacy (Barabanki)",
  "LBS College of Pharmacy (Barabanki)",
  "City Hospital & Institute of Paramedical Sciences (Barabanki)",
  "City College Of Para-Veterinary Sciences (Barabanki) - Proposed",
  "City Law College (Barabanki)",
  "City College (Barabanki)",
];

const InstitutionsPage = () => {
  // Framer Motion variants for the main content blocks (image + text)
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
    <section className="bg-gray-50 px-4 md:px-12 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-tight leading-tight">
          Explore Our <span className="text-blue-600">Campuses</span>
        </h2>

        <div className="space-y-10 lg:space-y-16">
          {campusData.map((item, index) => (
            <motion.div
              key={item.id} // Always use a unique ID for the key prop
              initial="hidden"
              whileInView="show"
              variants={itemVariants}
              transition={{ delay: index * 0.08 }} // Subtle stagger for overall block
              viewport={{ once: true, amount: 0.4 }} // Trigger when 40% of block is visible
              className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 rounded-xl shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 md:h-80 lg:h-96 object-cover object-center transition-transform duration-500 hover:scale-105" // Standard hover zoom
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg font-medium text-gray-600">
                  {item.location}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="mt-20">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-10 tracking-tight leading-tight">
    Explore Our <span className="text-blue-600">Colleges</span>
  </h2>

  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 text-lg font-medium">
    {colleges.map((name, idx) => (
      <li
        key={idx}
        className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300"
      >
        {name}
      </li>
    ))}
  </ul>
</section>
   </> 
  );
};

export default InstitutionsPage;