import React from "react";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Boys Hostel",
    description: "Safe, comfortable accommodation with modern amenities, 24/7 security, and a supportive environment for focused academic growth.",
    image: "/images/facility/boys.jpeg",
    features: ["24/7 Security", "WiFi Connectivity", "Common Study Areas", "Mess Facility"]
  },
  {
    title: "Girls Hostel",
    description: "Secure and comfortable living spaces designed specifically for female students with enhanced safety measures and modern facilities.",
    image: "/images/facility/girls.jpeg",
    features: ["Enhanced Security", "Female Wardens", "Recreation Areas", "Nutritious Meals"]
  },
  {
    title: "Digital Classroom",
    description: "State-of-the-art smart classrooms equipped with interactive whiteboards, projectors, and advanced learning technologies.",
    image: "/images/facility/smart_class.png",
    features: ["Smart Boards", "Audio-Visual Systems", "High-Speed Internet", "Interactive Learning"]
  },
  {
    title: "Digital Library",
    description: "Modern library with extensive digital resources, e-books, research databases, and quiet study environments.",
    image: "/images/facility/library.png",
    features: ["E-Book Access", "Research Databases", "Study Pods", "Digital Catalogs"]
  },
  {
    title: "Transportation",
    description: "Reliable and safe transportation services covering major routes across the city with comfortable and well-maintained buses.",
    image: "/images/facility/transport1.JPG",
    features: ["Multiple Routes", "GPS Tracking", "Trained Drivers", "Regular Maintenance"]
  },
  {
    title: "Computer Lab",
    description: "Modern computer laboratory with latest hardware and software for hands-on learning and practical training.",
    image: "/images/facility/computerlab.png",
    features: ["Latest Hardware", "Licensed Software", "High-Speed Internet", "Technical Support"]
  },
  {
    title: "Basketball Court",
    description: "Professional basketball court for sports activities, physical fitness, and recreational games for students.",
    image: "/images/facility/basket_court.png",
    features: ["Professional Court", "Sports Equipment", "Coaching Available", "Tournament Facilities"]
  },
  {
    title: "Biology Lab",
    description: "Well-equipped biology laboratory with modern instruments and specimens for practical learning and research.",
    image: "/images/facility/bio_lab.png",
    features: ["Modern Equipment", "Specimen Collection", "Research Facilities", "Safety Equipment"]
  },
  {
    title: "Classroom",
    description: "Spacious and well-ventilated classrooms designed to provide an optimal learning environment for students.",
    image: "/images/facility/classroom.png",
    features: ["Comfortable Seating", "Good Ventilation", "Natural Lighting", "Audio-Visual Ready"]
  },
  {
    title: "Pharmacy Lab",
    description: "Specialized pharmacy laboratory for pharmaceutical sciences with industry-standard equipment and safety measures.",
    image: "/images/facility/pharmacy_lab.png",
    features: ["Industry Equipment", "Safety Protocols", "Research Facilities", "Quality Testing"]
  },
  {
    title: "Seminar Hall",
    description: "Modern seminar hall with audio-visual facilities for conferences, workshops, and academic presentations.",
    image: "/images/facility/seminar_hall.png",
    features: ["Audio-Visual Systems", "Comfortable Seating", "Air Conditioning", "Stage Facility"]
  },
  {
    title: "Volleyball Court",
    description: "Standard volleyball court for sports activities, tournaments, and recreational play for students and staff.",
    image: "/images/facility/volleyball_court.png",
    features: ["Standard Court", "Net & Equipment", "Tournament Ready", "Spectator Area"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const FacilitiesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Facilities
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our facilities designed to provide students with 
            the best learning environment and comprehensive support services.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                custom={index}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#003366] text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#E4B062] rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Committed to Your Success
              </h3>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                At Dr. Rajendra Prasad Educational Society, we believe that excellent facilities 
                are the foundation of quality education. Our comprehensive amenities ensure that 
                every student has access to the resources they need to excel academically and 
                personally.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-[#003366] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">24/7</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Round-the-Clock Support</h4>
                  <p className="text-sm text-gray-600">Continuous assistance and security</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#E4B062] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">✓</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Modern Equipment</h4>
                  <p className="text-sm text-gray-600">State-of-the-art technology and tools</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#004488] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">♥</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Student-Centric</h4>
                  <p className="text-sm text-gray-600">Designed with student needs in mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;