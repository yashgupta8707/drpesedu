import React from "react";

export default function ChairpersonMessage() {
  return (
    <section className="bg-[#FAFAFA] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src="images/maam.jpg" // Replace with actual image path
            alt="Chairperson"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Message */}
        <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed relative">
          <p className="text-4xl text-gray-400 font-serif mb-4">“</p>
          <p className="text-gray-600">
            Dr. Rajendra Prasad Educational Society stands as a beacon of opportunity and growth,
            dedicated to fostering a community where knowledge flourishes and
            dreams take flight. Our commitment to excellence in education is
            matched only by our dedication to your personal and academic
            success. Together, let's embark on a journey of discovery and
            achievement, shaping a future filled with limitless possibilities.
          </p>
          <p className="text-4xl text-gray-400 font-serif text-right mt-4">”</p>

          {/* Name & Title */}
          <div className="mt-6">
            <h3 className="font-bold text-gray-900 text-xl">
              Dr. Mamta Srivastava
            </h3>
            <p className="text-gray-500 text-base">(President)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
