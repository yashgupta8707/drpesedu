import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const courses = [
  {
    title: "LL.B (3 Years)",
    description:
      "At Central Law College, we are proud to offer a rigorous and comprehensive Bachelor of Legislative Law...",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80", // law books
  },
  {
    title: "B.B.A (3 Years)",
    description:
      "Central Law College proudly introduces its BBA program, designed to provide a robust foundation...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80", // business workspace
  },
  {
    title: "M.B.A (2 Years)",
    description:
      "Our MBA program is uniquely positioned to prepare students for leadership in a dynamic world...",
    image: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=800&q=80", // business planning
  },
  {
    title: "B.Com (3 Years)",
    description:
      "Specialized B.Com designed for accounting, finance, and business foundations...",
    image: "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=800&q=80", // finance
  },
  {
    title: "B.A. (3 Years)",
    description:
      "Holistic B.A. program with a focus on humanities, critical thinking and more...",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80", // open book + glasses
  },
]


export default function CourseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length)
  }

  const getVisibleCourses = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(courses[(currentIndex + i) % courses.length])
    }
    return visible
  }

  return (
    <div className="relative w-full mx-auto p-10 bg-[#FAFAFA]">
      <h2 className="text-3xl font-bold text-center mb-8">OUR COURSES</h2>
      
      <div className="relative px-16">
        {/* Previous Button */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-700 p-3 rounded-full shadow-lg transition-colors duration-200"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Cards Container */}
        <div className="grid grid-cols-3 gap-6">
          {getVisibleCourses().map((course, idx) => (
            <div
              key={`${currentIndex}-${idx}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[4rem]">
                  {course.description}
                </p>
                <button className="w-full px-6 py-2 text-sm font-semibold border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white rounded-lg transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-700 p-3 rounded-full shadow-lg transition-colors duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {courses.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              idx === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}