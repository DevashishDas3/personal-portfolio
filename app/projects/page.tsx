import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'Project 1', description: 'A brief description of Project 1', image: '/placeholder.svg' },
  { id: 2, title: 'Project 2', description: 'A brief description of Project 2', image: '/placeholder.svg' },
  { id: 3, title: 'Project 3', description: 'A brief description of Project 3', image: '/placeholder.svg' },
  { id: 4, title: 'Project 4', description: 'A brief description of Project 4', image: '/placeholder.svg' },
  { id: 5, title: 'Project 5', description: 'A brief description of Project 5', image: '/placeholder.svg' },
  { id: 6, title: 'Project 6', description: 'A brief description of Project 6', image: '/placeholder.svg' },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-6 pt-24">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="aspect-[4/3] relative mb-4 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h2 className="text-xl font-medium mb-2">{project.title}</h2>
            <p className="text-sm text-black/70 mb-4">{project.description}</p>
            <Link
              href={`/projects/${project.id}`}
              className="inline-block bg-[#96c5b4] text-white px-4 py-2 text-sm tracking-wide hover:bg-[#7ab19a] transition-colors"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

