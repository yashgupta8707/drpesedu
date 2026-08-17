import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Isha Verma",
    role: "Lawyer",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "This platform brought my ideas to life effortlessly. The design is elegant and the flow feels natural. It's a game-changer for anyone looking to innovate.",
  },
  {
    id: 2,
    name: "Ritvik Sharma",
    role: "Full-Stack Developer",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "Super clean UI and incredibly efficient. I loved the attention to detail throughout the experience. Development time was cut in half thanks to this.",
  },
  {
    id: 3,
    name: "Neha Bansal",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?img=5",
    quote:
      "From onboarding to delivery, it just worked. Loved how smooth everything felt. Our customer feedback has been overwhelmingly positive.",
  },
  {
    id: 4,
    name: "Aarav Kumar",
    role: "Marketing Specialist",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      "The insights provided by this tool are invaluable. It helped us fine-tune our strategy and significantly improve our ROI. Highly recommend!",
  },
  {
    id: 5,
    name: "Priya Singh",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=25",
    quote:
      "Managing projects has never been easier. The intuitive interface and powerful features streamlined our workflow and boosted team productivity.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-8 px-8 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
        Testimonials
      </h2>

      <div className="flex space-x-6 overflow-x-auto px-1 pb-4 scroll-smooth scrollbar-hide">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="min-w-[320px] max-w-sm flex-shrink-0 flex flex-col p-6 bg-white rounded-lg shadow-md"
          >
            <p className="text-gray-700 text-lg leading-relaxed italic mb-6 flex-grow">
              “{item.quote}”
            </p>
            <div className="flex items-center space-x-4 mt-auto border-t pt-4 border-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="text-gray-900 font-bold text-lg">{item.name}</div>
                <div className="text-gray-600 text-sm">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}