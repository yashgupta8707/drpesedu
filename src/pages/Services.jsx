import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Vocational Training",
    description: "Comprehensive skill-based training programs designed to prepare students for immediate employment in various industries with hands-on experience.",
    icon: "🛠️",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Industry-Relevant Skills", "Hands-on Training", "Job Placement Assistance", "Certified Instructors"],
    programs: ["Computer Applications", "Digital Marketing", "Accounting & Finance", "Healthcare Support"]
  },
  {
    title: "Internship Programs",
    description: "Strategic internship opportunities connecting students with leading organizations to gain real-world experience and professional exposure.",
    icon: "💼",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Industry Partnerships", "Mentorship Support", "Performance Evaluation", "Career Guidance"],
    programs: ["Corporate Internships", "NGO Placements", "Government Departments", "Startup Opportunities"]
  },
  {
    title: "Certificate Programs",
    description: "Short-term specialized certificate courses to enhance skills and knowledge in specific domains with industry-recognized certifications.",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Industry Recognition", "Flexible Schedule", "Expert Faculty", "Practical Assessment"],
    programs: ["Data Analytics", "Project Management", "Language Proficiency", "Technical Certifications"]
  },
  {
    title: "Professional Development",
    description: "Continuous learning programs for working professionals to upgrade their skills and advance their careers in competitive markets.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Weekend Classes", "Online Learning", "Industry Experts", "Networking Events"],
    programs: ["Leadership Training", "Communication Skills", "Technology Updates", "Business Strategy"]
  },
  {
    title: "Skill Enhancement Workshops",
    description: "Interactive workshops and seminars focusing on contemporary skills required in today's dynamic professional environment.",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Interactive Sessions", "Practical Learning", "Group Activities", "Expert Facilitators"],
    programs: ["Soft Skills Training", "Interview Preparation", "Resume Building", "Public Speaking"]
  },
  {
    title: "Research & Innovation",
    description: "Research-oriented programs encouraging innovation and academic excellence with access to modern research facilities and guidance.",
    icon: "🔬",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Research Guidance", "Modern Equipment", "Publication Support", "Innovation Labs"],
    programs: ["Academic Research", "Industry Projects", "Innovation Challenges", "Patent Assistance"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#003366] via-[#004488] to-[#0066CC] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#E4B062]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Empowering careers through comprehensive training, internships, and 
              professional development programs designed for the modern workforce.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Educational Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From vocational training to professional certifications, we offer a complete 
              range of services to help you achieve your career goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                custom={index}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-4xl bg-white/90 rounded-full w-16 h-16 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#003366] text-sm mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <div className="w-2 h-2 bg-[#E4B062] rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#003366] text-sm mb-2">Available Programs:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#003366] to-[#004488] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful graduates who have transformed their careers 
              through our comprehensive training programs and professional development services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E4B062] mb-2">25+</div>
                <div className="text-white">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E4B062] mb-2">5000+</div>
                <div className="text-white">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E4B062] mb-2">95%</div>
                <div className="text-white">Placement Success</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;