import React from 'react'

function ProjectCard({ project }) {
  const { name, description, tech, repoLink, taglines } = project

  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="italic text-sm text-gray-500 mb-2">Tech stack: {tech}</p>
      <p className="mb-4">Taglines: {taglines}</p>
      <a
        href={repoLink}
        className="inline-block bg-gray-800 text-gray-100 py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300"
      >
        View Repo
      </a>
    </div>
  )
}

export default ProjectCard
