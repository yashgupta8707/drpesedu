import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import CoursesPage from "./pages/CoursesPage";
import InstitutionsPage from "./pages/InstitutionsPage";
import Achievements from "./pages/Achievements";
import CommitteePage from "./pages/CommitteePage.JSX";
import FacilitiesPage from "./pages/FacilitiesPage";
import ServicesPage from "./pages/Services";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/institutions" element={<InstitutionsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/members" element={<CommitteePage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
