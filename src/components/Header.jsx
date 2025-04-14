import React from 'react'
import profilePic from '../assets/profile.png'

function Header() {
  return (
    <header className="bg-gray-800 text-gray-100 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-white shadow-md"
          />
          <div>
            <h1 className="text-4xl font-bold">tomerw</h1>
            <p className="mt-1 text-lg">Security Researcher & Engineer</p>
          </div>
        </div>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex space-x-4">
            <li><a href="https://www.linkedin.com/in/tomer-wetzler-039498201/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto px-4 mt-6">
        <p className="max-w-xl">
          I'm a security researcher & engineer, using GitHub for some side projects and proof of concepts.
          From LLM-powered hacking tools to ML based filtering of LLM input, I'm currently fascinated by the new wave of AI technologies.
        </p>
      </div>
    </header>
  )
}

export default Header
