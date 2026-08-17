import React from 'react'
import CommitteeMembers from '../components/CommiteeMembers'

const CommitteePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Committee Members
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide our educational mission with vision, 
            expertise, and unwavering commitment to excellence.
          </p>
        </div>
      </div> */}

      {/* Committee Members Section */}
      <CommitteeMembers />

      {/* Additional Info Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Leadership That Inspires Excellence
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our committee members bring together decades of experience in education, 
              administration, and community service. They work tirelessly to ensure that 
              Dr. Rajendra Prasad Educational Society continues to provide world-class 
              education and opportunities for growth to all our students.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommitteePage