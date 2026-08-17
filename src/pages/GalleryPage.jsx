import React, { useState } from 'react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop', alt: 'Modern Classroom', category: 'Academics' },
  { id: 2, src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop', alt: 'University Library', category: 'Facilities' },
  { id: 3, src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop', alt: 'Advanced Science Laboratory', category: 'Academics' },
  { id: 4, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop', alt: 'Campus Exterior', category: 'Campus Life' },
  { id: 5, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', alt: 'Auditorium Interior', category: 'Events' },
  { id: 6, src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop', alt: 'Sports Field', category: 'Campus Life' },
  { id: 7, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop', alt: 'Student Collaboration', category: 'Academics' },
  { id: 8, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop', alt: 'Graduation Day', category: 'Events' },
  { id: 9, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', alt: 'Cafeteria Fun', category: 'Campus Life' },
  { id: 10, src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', alt: 'Science Lab 2', category: 'Academics' },
  { id: 11, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop', alt: 'Modern Classroom 2', category: 'Academics' },
  { id: 12, src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop', alt: 'Campus Exterior 2', category: 'Campus Life' },
];

const categories = ['All', 'Academics', 'Campus Life', 'Facilities', 'Events'];

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');
  const filtered = galleryImages.filter(img => filter === 'All' || img.category === filter);

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-4 animate-fade-in">
          Campus <span className="text-blue-600">Gallery</span>
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-600 text-lg mb-6 animate-fade-in-delay">
          A glimpse into life on campus — from classrooms to celebrations.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm rounded-full border transition-all duration-300 hover:scale-105 ${
                filter === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, index) => (
            <div
              key={img.id}
              className="overflow-hidden group rounded-lg shadow-sm hover:shadow-lg transition-all duration-500"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInScale 0.4s ease-out forwards'
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-60 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.97);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.1s both;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default GalleryPage;