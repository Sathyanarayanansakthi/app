import React from 'react';

const FeaturesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">🔍 What Can You Do with CrackIt?</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Whether you're building job-winning resumes, tailoring cover letters, organizing vital documents, or analyzing job posts — 
          CrackIt helps you do it faster, smarter, and better.
        </p>
      </div>

      {/* Core Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        {/* CrackIt */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-blue-500/20 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">🧠 CrackIt</h2>
          <p className="text-gray-300">
            Crack the perfect resume format and beat the ATS with AI-backed suggestions.
          </p>
        </div>

        {/* TrackIt */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-purple-500/20 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-400 mb-2">📄 TrackIt</h2>
          <p className="text-gray-300">
            Track every job application, resume version, and interview response — all in one place.
          </p>
        </div>

        {/* StackIt */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-amber-500/20 shadow-lg">
          <h2 className="text-2xl font-bold text-amber-400 mb-2">🧱 StackIt</h2>
          <p className="text-gray-300">
            Stack up resumes, cover letters, Aadhar, PAN, certificates, eSign docs, and more — securely stored for anytime use.
          </p>
        </div>
      </div>

      {/* Features Section Title */}
      <h2 className="text-3xl font-bold text-center text-white mb-8">✨ Smart Features for Resume Rockstars</h2>

      {/* Lead Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* AI Resume Builder - Feature 1 (Larger) */}
        <div className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-cyan-500/20 shadow-lg">
          <div className="flex items-start mb-3">
            <span className="text-green-400 mr-2">✅</span>
            <h3 className="text-xl font-bold text-white">AI Resume Builder</h3>
          </div>
          <p className="text-gray-300 pl-6">
            Create modern, professional resumes tailored to any job post in minutes. Our AI analyzes job descriptions 
            and optimizes your resume to beat applicant tracking systems and catch recruiters' attention.
          </p>
        </div>

        {/* Cover Letter Crafter - Feature 2 */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-green-500/20 shadow-lg">
          <div className="flex items-start mb-3">
            <span className="text-green-400 mr-2">✅</span>
            <h3 className="text-xl font-bold text-white">Cover Letter Crafter</h3>
          </div>
          <p className="text-gray-300 pl-6">
            Instantly generate personalized cover letters that match your resume and job goals.
          </p>
        </div>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Job Post Analyzer */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-blue-500/20 shadow-lg">
          <div className="flex items-start mb-3">
            <span className="text-green-400 mr-2">✅</span>
            <h3 className="text-xl font-bold text-white">Job Post Analyzer</h3>
          </div>
          <p className="text-gray-300 pl-6">
            Upload any job description, and our AI highlights key terms, skills, and optimization tips to align your application with exactly what recruiters are looking for.
          </p>
        </div>

        {/* Secure Document Vault */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-purple-500/20 shadow-lg">
          <div className="flex items-start mb-3">
            <span className="text-green-400 mr-2">✅</span>
            <h3 className="text-xl font-bold text-white">Secure Document Vault</h3>
          </div>
          <p className="text-gray-300 pl-6">
            Keep all your important documents in one place — easy access, zero stress. Your data is encrypted and secured with industry-best practices.
          </p>
        </div>

        {/* Resume Progress Tracker */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-yellow-500/20 shadow-lg">
          <div className="flex items-start mb-3">
            <span className="text-green-400 mr-2">✅</span>
            <h3 className="text-xl font-bold text-white">Resume Progress Tracker</h3>
          </div>
          <p className="text-gray-300 pl-6">
            Monitor how many jobs you've applied to, resume tweaks you've made, and interview status. Get insights into what's working and what needs improvement.
          </p>
        </div>

        {/* Skill Gap Finder */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-red-500/20 shadow-lg">
          <div className="flex items-start mb-3">
            <span className="text-green-400 mr-2">✅</span>
            <h3 className="text-xl font-bold text-white">Skill Gap Finder</h3>
          </div>
          <p className="text-gray-300 pl-6">
            Get real-time feedback on skills you're missing for your dream role and how to upskill. Identify your strengths and areas for improvement to become the ideal candidate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;