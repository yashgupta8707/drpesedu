import React from 'react'
import HeroSection from '../components/HeroSection'
import ChairpersonMessage from '../components/ChairpersonMessage'
import CourseSlider from '../components/CourseSlider'
import LandingGallery from '../components/LandingGallery'
import Testimonials from '../components/Testimonials'
import CollegeShowcase from '../components/CollegeShowcase'

export default function LandingPage() {
  return (
    <div>
        <HeroSection />
        <CollegeShowcase />
        {/* <CourseSlider /> */}
        {/* <LandingGallery /> */}
        <ChairpersonMessage />
        {/* <Testimonials /> */}
    </div>
  )
}
