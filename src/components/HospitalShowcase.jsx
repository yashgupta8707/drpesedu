import React from 'react';

const HospitalShowcase = ({ image, name, campus, description, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between transition-transform hover:scale-[1.01] duration-200 h-full relative group">
      <div className="h-64 w-full overflow-hidden relative">
        <img
          src={image}
          alt={`${name} campus`}
          className="w-full h-full object-cover transition-all duration-300 cursor-pointer"
          loading="lazy"
        />
        
        {/* Hover Overlay - Full Size Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:fixed group-hover:inset-0 group-hover:bg-black group-hover:bg-opacity-75 group-hover:z-50 group-hover:flex group-hover:items-center group-hover:justify-center transition-all duration-300">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <img
              src={image}
              alt={`${name} campus - Full View`}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 text-white text-2xl font-bold cursor-pointer hover:text-gray-300">
              ×
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 flex-1">
        <h3 className="text-center text-lg font-bold text-gray-800 mb-2">
          {name} <span className="text-sm font-medium text-gray-500">({campus})</span>
        </h3>
        <p className="text-center text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const CollegeShowcase = () => {
  const colleges = [
    {
      image: 'images/clg-image-1.jpg',
      name: 'Ansal Campus',
      campus: 'Shushant Golf City, Lucknow',
      description:
        'Ansal Campus is known for cutting-edge facilities, modern classrooms, and a serene academic environment. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.',
      link: '#Ansal-Campus',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Our Campuses
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {colleges.map((college, index) => (
          <CollegeCard
            key={index}
            image={college.image}
            name={college.name}
            campus={college.campus}
            description={college.description}
            link={college.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HospitalShowcase;