import Image from 'next/image'
import Link from 'next/link'
import { Code2, Palette, Globe2, Database, Cpu, Layout, GitBranch, Terminal, Figma, Cloud } from 'lucide-react'

const skills = [
  { name: 'Frontend Development', icon: Layout, description: 'Building responsive web interfaces' },
  { name: 'Backend Development', icon: Database, description: 'Creating robust server solutions' },
  { name: 'UI/UX Design', icon: Palette, description: 'Designing user experiences' },
  { name: 'DevOps', icon: Cloud, description: 'Managing deployment pipelines' },
  { name: 'Version Control', icon: GitBranch, description: 'Git workflow management' },
  { name: 'System Architecture', icon: Cpu, description: 'Designing scalable systems' },
  { name: 'Web Performance', icon: Globe2, description: 'Optimizing load times' },
  { name: 'Command Line', icon: Terminal, description: 'Shell scripting & automation' },
  { name: 'Clean Code', icon: Code2, description: 'Writing maintainable code' },
  { name: 'Design Tools', icon: Figma, description: 'Prototyping & wireframing' },
]

const experiences = [
  {
    title: 'Senior Developer',
    company: 'Tech Corp',
    period: '2022 - Present',
    description: 'Leading development of cloud-native applications and mentoring junior developers.',
    image: '/placeholder.svg'
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client projects using modern web technologies.',
    image: '/placeholder.svg'
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Inc',
    period: '2018 - 2020',
    description: 'Developed responsive web applications and improved user experience.',
    image: '/placeholder.svg'
  },
]

export default function Home() {
  return (
    <div className="pt-24">
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Hey! My Name&apos;s <span className="text-[#96c5b4]">Dev</span>, And I&apos;m a <span className="text-[#96c5b4]">Dev</span>eloper.
            </h1>
            <Link
              href="/projects"
              className="inline-block bg-[#96c5b4] text-white px-8 py-3 text-sm tracking-wide hover:bg-[#7ab19a] transition-colors"
            >
              VIEW PROJECTS
            </Link>
          </div>
          <div className="aspect-square relative">
            <Image
              src="/placeholder.svg"
              alt="Creative Work"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      
      <section className="mt-24 py-24 bg-[#96c5b4] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center">
            FEATURED WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[4/5] relative mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={`Project ${item}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">Project Title {item}</h3>
                <p className="text-sm text-white/70">Web Development • 2024</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center">
            EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 relative mb-6">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-[#96c5b4] font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-black/50 mb-4">{exp.period}</p>
                <p className="text-black/70">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24 pb-12 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center text-white">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#96c5b4] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-white font-medium mb-2">{skill.name}</h3>
                <p className="text-white/60 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


