import PageLayout from '@/components/page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills | Dev Shah',
  description: 'Technical skills and expertise of Dev Shah - Full-stack development, cloud technologies, and more.',
}

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "📋",
      skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS"]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Angular", "Vue.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "Django", "GraphQL"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      title: "DevOps",
      icon: "☁️",
      skills: ["Docker", "CI/CD", "AWS"]
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: ["Git", "Arduino", "Agile"]
    }
  ]

  const certifications = [
    "CITI Program – Social/Behavioral Research Investigators (ID 65387052)",
    "Argusoft Internship Certificate (Jul–Sep 2024)"
  ]

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-400 pb-4">
          Technical Skills
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="border border-green-400 rounded p-6 hover:bg-green-400 hover:bg-opacity-5 transition-colors">
              <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                <span>{category.icon}</span>
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-green-400 bg-opacity-10 text-green-300 px-3 py-1 rounded text-sm border border-green-400 border-opacity-30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border border-green-400 rounded p-6">
          <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center gap-2">
            🏆 Certifications
          </h2>
          <ul className="space-y-2 text-green-300">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
