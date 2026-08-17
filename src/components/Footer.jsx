import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2A203F] text-[#E0E1DD] py-8 px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        
        {/* Logo and Social Media */}
        <div>
          <h1 className="text-2xl font-bold text-yellow-600 mb-2">Dr. Rajendra Prasad Educational Society</h1>
          {/* <p className="text-gray-400 mb-4">Empowering Legal Minds Since 1989</p> */}
          
          {/* Follow Us */}
          {/* <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-[#3A86FF]">
              <Facebook className="h-5 w-5 hover:scale-110 transition" />
              <Instagram className="h-5 w-5 hover:scale-110 transition" />
              <Twitter className="h-5 w-5 hover:scale-110 transition" />
            </div>
          </div> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Institutions</li>
            <li className="hover:text-white transition">Courses</li>
            <li className="hover:text-white transition">Gallery</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Our Campuses</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">Chinhat Campus</li>
            <li className="hover:text-white transition">Ansal Campus</li>
            <li className="hover:text-white transition">Barabanki Campus</li>
            <li className="hover:text-white transition">Jankipuram Campus</li>
            <li className="hover:text-white transition">Ratankhand Campus</li>
          </ul>
        </div>
        {/* Courses */}
        <div>
          <h3 className="text-white font-semibold mb-3">Our Colleges</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">City Academy Law College (Chinhat)</li>
            <li className="hover:text-white transition">LBS College of Pharmacy (Barabanki)</li>
            <li className="hover:text-white transition">Central Law College (Ansal, Sushant Golf City)</li>
            <li className="hover:text-white transition">City Law College (Jankipuram)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-8 mt-1" />
              MS-101, Sector-D, Aliganj, Lucknow - 226024. Uttar Pradesh, India.
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 81770 01081
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-8" /> drrajendraprasadeducationsociety@gmail.com
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-6 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dr. Rajendra Prasad Educational Society. All rights reserved.
      </div>
    </footer>
  );
}
