export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold">{project.name}</h3>
      <p className="text-sm mt-1 text-gray-400">{project.tech}</p>
      <p className="mt-2">{project.description}</p>
      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-4 inline-block">View Repository →</a>
    </div>
  )
}
