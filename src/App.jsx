import React from 'react'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'

function App() {
  const projects = [
    {
      name: 'Tarantula',
      description: 'LLM powered web app hacker',
      tech: 'python',
      repoLink: 'https://github.com/Trivulzianus/Tarantula',
      taglines: 'AI, LLM, HACKING, CYBERSECURITY'
    },
    {
      name: 'PRISM',
      description: 'lightweight ML filter for malicious LLM inputs',
      tech: 'python',
      repoLink: 'https://github.com/Trivulzianus/PRISM',
      taglines: 'ML, LLM, CYBERSECURITY'
    },
    {
      name: 'Hackademia',
      description: 'LLM generated mini web app hacking rooms for learning and practice',
      tech: 'python',
      repoLink: 'https://github.com/Trivulzianus/Hackademia',
      taglines: 'LLM, HACKING, CYBERSECURITY, AI'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
