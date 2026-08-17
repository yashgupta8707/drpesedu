import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Committee", path: "/members" },
  { name: "Facilities", path: "/facilities" },
  { name: "Services", path: "/services" },
  { name: "Institutions", path: "/institutions" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <>
      {/* Blinking Marquee */}
      <div className="w-full bg-black py-0 overflow-hidden">
        <style jsx>{`
          .blinking-marquee {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: bold;
            animation: scroll-left 12s linear infinite, blinkColor 0.5s steps(1) infinite;
            white-space: nowrap;
          }
          @keyframes scroll-left {
            0% {
              transform: translateX(100vw);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          @keyframes blinkColor {
            0%   { color: #ff0000; }
            20%  { color: #ff8800; }
            40%  { color: #ffff00; }
            60%  { color: #00ff00; }
            80%  { color: #00ffff; }
            100% { color: #ff0000; }
          }
        `}</style>
        <div className="blinking-marquee">
          🚀 25 Years of Excellence - Dr. Rajendra Prasad Educational Society - Leading Education Since 2000! 🎉
        </div>
      </div>

      {/* Top Celebration Marquee */}
      {/* <div className="w-full bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] text-white font-bold py-3 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <marquee behavior="scroll" direction="left" className="relative z-10">
          🎉 YE LAGAIYEGA - CELEBRATION 25 YEAR 🎊 Dr. Rajendra Prasad Educational Society Celebrating Silver Jubilee! 🏆 25 Years of Excellence in Education 🌟
        </marquee>
      </div> */}

      {/* Navbar */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-[#E4B062]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* LEFT: Logo with Celebration Badge */}
          <Link to="/" className="flex items-center space-x-3 relative">
            <div className="relative">
              <img
                src="/images/logo.jpg"
                alt="Dr. Rajendra Prasad Educational Society Logo"
                className="h-32 w-auto object-contain"
              />
              {/* 25th Anniversary Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                25th
              </div>
            </div>
            <div className="hidden lg:block">
              <h2 className="text-xl font-bold text-[#003366] leading-tight">
                Dr. Rajendra Prasad Educational Society
              </h2>
              <p className="text-xs text-[#E4B062] font-semibold">
                🎉 Celebrating 25 Years of Excellence
              </p>
            </div>
          </Link>

          {/* RIGHT: Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm tracking-wide">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="relative"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#101935] font-bold border-b-3 border-[#E4B062] pb-1 relative"
                      : "text-[#1e1e1e] hover:text-[#101935] hover:border-b-2 hover:border-[#E4B062] pb-1 transition-all duration-200 font-medium"
                  }
                >
                  {link.name}
                  {/* Special highlight for celebration */}
                  {link.name === "Achievements" && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 bg-[#003366] text-white rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Bottom Enhanced Marquee */}
      <div className="w-full bg-[#003366] text-white font-bold py-3 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#004488] to-[#003366]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
        <marquee behavior="scroll" direction="left" className="relative z-10 font-semibold">
          🆕 NEW: Now Offering 2-Year LL.M. Program — First Private Law College in UP Affiliated with University of Lucknow to Launch LL.M. 📚 Join the Legacy of Excellence! ⭐
        </marquee>
      </div>
    </>
  );
};

export default Navbar;