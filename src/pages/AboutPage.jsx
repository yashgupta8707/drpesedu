import React from 'react'
import AboutHero from '../components/AboutHero'
import KeyFeatures from '../components/KeyFeatures'
import ValuesVisionSection from '../components/Values-Vision'
import CommitteeMembers from '../components/CommiteeMembers'

export default function AboutPage() {
  return (
    <div>
        <AboutHero />
        <KeyFeatures />
        <ValuesVisionSection />
        <CommitteeMembers />
    </div>
  )
}
