import React from "react";

export default function ContactPage() {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Section: Contact Form */}
        <div className="p-6 bg-[#FAFAFA] rounded-lg">
          {/* Note: The image implies a white background for the form area itself */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Full Name"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-gray-700 text-sm font-medium mb-1">
                Mobile
              </label>
              <input
                type="tel" // Use tel for mobile numbers
                id="mobile"
                name="mobile"
                pattern="[0-9]{10}" // Simple pattern for 10 digits
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter 10 digit Mobile No"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-2 bg-[#4B3F72] text-white font-semibold rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Get In Touch & Map */}
        <div className="bg-[#4B3F72] h-70 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-lg">drrajendraprasadeducationsociety@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-lg">+91 81770 01081</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <address className="not-italic text-lg">
                MS-101, Sector-D, Aliganj, Lucknow - 226024. Uttar Pradesh, India.

                </address>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          {/* <div className="mt-8 rounded-lg overflow-hidden w-full h-64 md:h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d222.3968989263392!2d80.94011168549679!3d26.89237299276042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMS-101%20Aliganj%2C%20Lucknow%20Uttar%20pradesh!5e0!3m2!1sen!2sin!4v1753761559047!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe> */}
            {/* IMPORTANT: Replace the 'src' above with your actual Google Maps embed URL */}
            {/* Go to Google Maps, search for your address, click Share -> Embed a map -> Copy HTML */}
          {/* </div> */}
        </div>
      </div>

      {/* Side Notifications (WhatsApp & Notification) - As seen in the screenshot */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
        <a
          href="#"
          className="bg-green-500 text-white text-sm px-3 py-2 rounded-l-md shadow-lg flex items-center justify-center -rotate-90 origin-top-right translate-x-4 translate-y-4"
          style={{ width: '100px', transform: 'rotate(90deg) translateX(50%) translateY(-50%)' }} // Custom rotation to match screenshot
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.898 17.898a3 3 0 01-4.242 0l-3.353-3.353a3 3 0 010-4.242l3.353-3.353a3 3 0 014.242 0l3.353 3.353a3 3 0 010 4.242l-3.353 3.353z"
            />
          </svg>
          WHATSAPP
        </a>
        <a
          href="#"
          className="bg-orange-500 text-white text-sm px-3 py-2 rounded-l-md shadow-lg flex items-center justify-center -rotate-90 origin-top-right translate-x-4 translate-y-4"
          style={{ width: '100px', transform: 'rotate(90deg) translateX(50%) translateY(-50%)' }} // Custom rotation
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          NOTIFICATION
        </a>
      </div>
    </section>
  );
}