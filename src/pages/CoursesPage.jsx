import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen, Briefcase, GraduationCap, Laptop, Lightbulb, UserCheck } from 'lucide-react';

const COURSES_DATA = [
  {
    id: 1,
    title: "Bachelor of Technology (B.Tech)",
    description: "A comprehensive undergraduate program focused on engineering principles and technological innovation across various specializations.",
    category: "Undergraduate",
    details: [
      { label: "Duration", value: "4 Years" },
      { label: "Eligibility", value: "10+2 with PCM" },
      { label: "Specializations", value: "CS, EC, ME, CE" },
    ],
    icon: <Laptop size={32} />,
  },
  {
    id: 2,
    title: "Master of Business Administration (MBA)",
    description: "A prestigious postgraduate program designed to develop advanced business acumen, leadership skills, and strategic management capabilities.",
    category: "Postgraduate",
    details: [
      { label: "Duration", value: "2 Years" },
      { label: "Eligibility", value: "Graduation" },
      { label: "Focus Areas", value: "Finance, Marketing, HR" },
    ],
    icon: <Briefcase size={32} />,
  },
  {
    id: 3,
    title: "Bachelor of Law (LLB)",
    description: "A foundational legal education program covering various aspects of law, preparing students for a career in judiciary or legal practice.",
    category: "Undergraduate",
    details: [
      { label: "Duration", value: "3 Years" },
      { label: "Eligibility", value: "Graduation" },
      { label: "Career Paths", value: "Advocacy, Judiciary" },
    ],
    icon: <BookOpen size={32} />,
  },
  {
    id: 4,
    title: "Bachelor of Computer Applications (BCA)",
    description: "An undergraduate program focused on computer science fundamentals, software development, and application design, leading to IT careers.",
    category: "Undergraduate",
    details: [
      { label: "Duration", value: "3 Years" },
      { label: "Eligibility", value: "10+2" },
      { label: "Skills", value: "Programming, Web Dev" },
    ],
    icon: <Lightbulb size={32} />,
  },
  {
    id: 5,
    title: "Ph.D. Programs",
    description: "Doctoral programs across various disciplines, offering advanced research opportunities and expert mentorship for aspiring scholars.",
    category: "Doctoral",
    details: [
      { label: "Duration", value: "3-5 Years" },
      { label: "Eligibility", value: "Master's Degree" },
      { label: "Research Areas", value: "Varied" },
    ],
    icon: <GraduationCap size={32} />,
  },
  {
    id: 6,
    title: "Diploma in Digital Marketing",
    description: "A practical, short-term program focusing on modern digital marketing strategies, tools, and analytics for career readiness.",
    category: "Diploma",
    details: [
      { label: "Duration", value: "6 Months" },
      { label: "Eligibility", value: "10+2" },
      { label: "Outcomes", value: "Certifications" },
    ],
    icon: <UserCheck size={32} />,
  },
];

const COURSE_CATEGORIES = ['All', 'Undergraduate', 'Postgraduate', 'Doctoral', 'Diploma'];

const ANIMATION_CONFIG = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  delays: {
    header: 0,
    subtitle: 200,
    buttons: 400,
    grid: 600,
    buttonStagger: 50,
    cardStagger: 100,
  },
};

const CourseCard = ({ course, index, isVisible }) => (
  <div
    className={`bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-start transition-all duration-500 ease-out hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:scale-105 cursor-pointer ${
      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}
    style={{
      transitionDelay: isVisible ? `${index * ANIMATION_CONFIG.delays.cardStagger + ANIMATION_CONFIG.delays.grid + 100}ms` : '0ms'
    }}
  >
    <div className="mb-6 p-3 rounded-full bg-indigo-50 text-indigo-700 transition-transform duration-300 hover:scale-110">
      {course.icon}
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
      {course.title}
    </h3>
    
    <p className="text-base text-gray-700 leading-relaxed mb-4 flex-grow">
      {course.description}
    </p>

    <ul className="text-sm text-gray-600 space-y-1 mt-auto w-full border-t border-gray-100 pt-4">
      {course.details.map((detail, idx) => (
        <li key={idx} className="flex justify-between items-center text-left">
          <span className="font-semibold text-gray-800">{detail.label}:</span>
          <span>{detail.value}</span>
        </li>
      ))}
    </ul>

    <button className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 self-start hover:scale-105 active:scale-95">
      Learn More
    </button>
  </div>
);

const FilterButton = ({ category, isActive, onClick, index, isVisible }) => (
  <button
    onClick={() => onClick(category)}
    className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:scale-105 active:scale-95 ${
      isActive
        ? 'bg-indigo-600 text-white shadow-md'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
    style={{
      transitionDelay: isVisible ? `${index * ANIMATION_CONFIG.delays.buttonStagger}ms` : '0ms'
    }}
  >
    {category}
  </button>
);

const CoursesPage = () => {
  const [filter, setFilter] = useState('All');
  const [visibleElements, setVisibleElements] = useState({});

  const filteredCourses = COURSES_DATA.filter(course => 
    filter === 'All' || course.category === filter
  );

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const elementId = entry.target.dataset.animate;
        setVisibleElements(prev => ({
          ...prev,
          [elementId]: true
        }));
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: ANIMATION_CONFIG.threshold,
      rootMargin: ANIMATION_CONFIG.rootMargin
    });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [handleIntersection, filter]);

  return (
    <section className="bg-gray-50 py-8 lg:py-12 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2
          data-animate="header"
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-4 tracking-tight leading-none transition-all duration-1000 ease-out ${
            visibleElements.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Explore Our <span className="text-indigo-700">Courses</span>
        </h2>
        
        <p
          data-animate="subtitle"
          className={`text-xl text-gray-700 text-center mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-800 delay-200 ease-out ${
            visibleElements.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Discover a wide range of programs designed to equip you with the knowledge and skills for a successful future.
        </p>

        <div
          data-animate="buttons"
          className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-600 delay-400 ease-out ${
            visibleElements.buttons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {COURSE_CATEGORIES.map((category, index) => (
            <FilterButton
              key={category}
              category={category}
              isActive={filter === category}
              onClick={setFilter}
              index={index}
              isVisible={visibleElements.buttons}
            />
          ))}
        </div>

        <div
          data-animate="grid"
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-600 delay-600 ease-out ${
            visibleElements.grid ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              isVisible={visibleElements.grid}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;