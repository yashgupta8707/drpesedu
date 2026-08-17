import React from 'react';

const CollegeCard = ({ image, name, campus, description, link }) => {
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
    },
    {
      image: 'images/barabanki-clg.jpg',
      name: 'Barabanki Campus',
      campus: 'Barabanki, Uttar Pradesh',
      description:
        'Barabanki Campus offers an advanced curriculum and top-class faculty to shape the leaders of tomorrow. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.',
        link: '#barabanki-campus',
      },
      {
        image: 'images/chinhat-campus.jpg',
        name: "Chinhat Campus",
        campus: 'Chinhat, Lucknow',
        description:
        'Chinhat Campus provides outstanding academic and extracurricular opportunities for holistic development. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.',
        link: '#chinhat-campus',
      },
      {
        image: 'images/jankipuram.jpg',
        name: 'Jankipuram Campus',
        campus: 'Jankipuram, Lucknow',
        description:
        'Jankipuram Campus provides unparalleled education with cutting-edge research and career-oriented programs. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.',
      link: '#jankipuram-campus',
    },
      {
        image: 'images/ratankhand.jpg',
        name: 'Ratankhand Campus',
        campus: 'Ratankhand, Lucknow',
        description:
        'Ratankhand Campus combines innovation and tradition, offering world-class education and research facilities. Our campus provides a variety of extracurricular activities, ensuring holistic development and career growth.',
      link: '#ratankhand-campus',
    },
      {
        image: 'images/Hospital.png',
        name: 'City Hospital & Institute of Paramedical Sciences',
        campus: 'Barabanki, Uttar Pradesh',
        description:
        'City Hospital & Institute of Paramedical Sciences is a premier healthcare and education facility, dedicated to advancing patient care and paramedical training. With state-of-the-art infrastructure and a commitment to excellence, the hospital provides a blend of clinical service and academic rigor, nurturing the next generation of healthcare professionals.',
      link: '#ratankhand-campus',
    },
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

export default CollegeShowcase;