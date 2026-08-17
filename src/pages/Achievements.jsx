import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "/images/pages_header1.png";


// Dummy Achievement Data
const achievements = [
  {
    id: 1,
    title: "Excellence in Education Award",
    description: 'City Group of Colleges was Awarded the prestigious "TIMES OF INDIA EXCELLENCE IN EDUCATION AWARD - 2025" for its contribution in the field of education.',
    image: "/images/times-award-2025.png",
    category: "Ansal",
  },
  {
    id: 2,
    title: "Best Infrastructure Award 2025",
    description: "Recognized for outstanding campus facilities.",
    image: "/images/achievement/2.png",
    category: "Barabanki",
  },
  {
    id: 3,
    title: "Outstanding Research Contribution",
    description: "Awarded for groundbreaking research in AI & ML.",
    image: "/images/achievement/3.png",
    category: "Chinhat",
  },
  {
    id: 4,
    title: "Top Emerging College of the Year",
    description: "Ranked among the best emerging institutions.",
    image: "/images/achievement/4.png",
    category: "Jankipuram",
  },
  {
    id: 5,
    title: "Best Placement Record 2025",
    description: "Awarded for highest job placements.",
    image: "/images/achievement/5.png",
    category: "Ratankhand",
  },
  {
    id: 6,
    title: "Excellence in Sports & Athletics",
    description: "For exceptional achievements in national sports.",
    image: "/images/achievement/06.png",
    category: "Ansal",
  },
];
  
const categories = [
  "All",
  "Ansal",
  "Barabanki",
  "Chinhat",
  "Jankipuram",
  "Ratankhand",
];

const placeholders = [
  "Search for excellence awards...",
  "Find top educational achievements...",
  "Looking for top rankings?",
  "Explore research awards...",
  "Discover placement achievements...",
];

export default function Achievements() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [placeholder, setPlaceholder] = useState(placeholders[0]);

  // Dynamic Placeholder Change
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(
        placeholders[Math.floor(Math.random() * placeholders.length)]
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Filtered Achievements
  const filteredAchievements = achievements.filter(
    (achievement) =>
      achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" ||
        achievement.category === selectedCategory)
  );

  return (
    <div className="w-full overflow-x-hidden">
      {/* <SEOMeta 
        title="CGC Achievements - Awards, Rankings & Recognition"
        description="Discover City Group of Colleges' achievements including awards, rankings, accreditations, and recognition for academic excellence."
        url="/pages/achievements"
        keywords="CGC achievements, college awards, academic rankings, accreditation, recognition, excellence"
      /> */}

      {/* Hero Section */}
      <motion.section
        className="relative h-[150px] sm:h-[200px] md:h-[200px] lg:h-[250px] xl:h-[250px] flex items-center justify-center text-white text-4xl font-bold"
        style={{
          // backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "teal",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 " />
        <h2 className="relative z-10 text-center px-4 text-4xl md:text-7xl">
          Our Achievements
        </h2>
      </motion.section>

      

      {/* Achievements Grid */}
      <section className="bg-white py-16 px-4 md:px-12">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {filteredAchievements.length > 0 ? (
            filteredAchievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover max-w-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {achievement.description}
                  </p>
                  {/* <p className="text-gray-500 text-xs mt-2">
                    Campus: {achievement.category}
                  </p> */}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-gray-600 col-span-full text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No achievements found.
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* <Copyright /> */}
    </div>
  );
}


// Search & Filter Section
//       <div className="bg-gray-100 py-10 px-4 md:px-12">
//         <div className="max-w-4xl mx-auto">
//           {/* Search Bar */}
//           <motion.input
//             type="text"
//             placeholder={placeholder}
//             className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 text-gray-700"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             whileFocus={{ scale: 1.05 }}
//           />

//           {/* Category Filters */}
//           <div className="flex flex-wrap gap-3 mt-4 justify-center">
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 className={`px-4 py-2 rounded-lg text-white ${
//                   selectedCategory === category
//                     ? "bg-yellow-600"
//                     : "bg-gray-700 hover:bg-gray-800"
//                 }`}
//                 onClick={() => setSelectedCategory(category)}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </div>
//         </div>
//       </div>