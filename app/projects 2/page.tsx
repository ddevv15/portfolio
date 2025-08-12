import PageLayout from '@/components/page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Dev Shah',
  description: 'Featured projects by Dev Shah - Face recognition systems, weather apps, task managers, and security tools.',
}

export default function ProjectsPage() {
  const projects = [
    {
      name: "Faceway – Kiosk Face Recognition",
      dates: "Mar 2025 – Jun 2025",
      stack: ["React", "face‑api.js"],
      description: "99.9%‑uptime kiosk login & rewards system with offline capability.",
      link: "https://github.com/kirtanpatel2003/FaceWay",
      icon: "🔐"
    },
    {
      name: "WeatherGenie – Real‑Time Forecasting",
      dates: "Mar 2025 – Jun 2025",
      stack: ["React", "Node.js", "OpenWeather API", "Arduino"],
      description: "Personalized weather web app with ML‑enhanced hyper‑local predictions.",
      link: "https://www.weathergenie.us",
      icon: "🌤️"
    },
    {
      name: "TaskFlow – Drag‑and‑Drop Task Manager",
      dates: "Sep 2024 – Dec 2024",
      stack: ["React", "Firebase"],
      description: "Customizable dashboards, real‑time feedback and color‑coded categories.",
      icon: "📋"
    },
    {
      name: "GenVARS – Security Assessment & GenAI",
      dates: "Sep 2024 – Dec 2024",
      stack: ["Python", "GPT‑2"],
      description: "Automated security audit detecting 100+ flaws and implementing SOC‑2 controls.",
      icon: "🔒"
    }
  ]

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-400 pb-4">
          Featured Projects
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-green-400 rounded p-6 hover:bg-green-400 hover:bg-opacity-5 transition-colors">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">{project.icon}</span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-green-400 mb-2">
                    {project.name}
                  </h2>
                  <p className="text-green-300 text-sm mb-2">{project.dates}</p>
                </div>
              </div>
              
              <p className="text-green-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-green-400 bg-opacity-10 text-green-300 px-3 py-1 rounded text-sm border border-green-400 border-opacity-30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <span>View Project</span>
                  <span>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
