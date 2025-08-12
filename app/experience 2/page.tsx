import PageLayout from '@/components/page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience | Dev Shah',
  description: 'Professional work experience of Dev Shah - Software engineering, system administration, and leadership roles.',
}

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Argusoft",
      dates: "Jul 2024 – Sep 2024",
      location: "Gujarat, India",
      icon: "💼",
      highlights: [
        "Migrated MedPlat from AngularJS to React + Redux, improving load times 10%",
        "Integrated RESTful APIs with PostgreSQL/Java backend, raising user satisfaction 5%"
      ]
    },
    {
      role: "General Office Aide",
      company: "University of Illinois Chicago – ID Center",
      dates: "Jun 2023 – May 2025",
      location: "Chicago, IL",
      icon: "🏢",
      highlights: [
        "Processed 500+ IDs, trimming turnaround 20%",
        "Managed campus payment systems and real‑time account updates for 300+ users"
      ]
    },
    {
      role: "Intramural Sports Official",
      company: "University of Illinois Chicago",
      dates: "Apr 2023 – Jul 2023",
      location: "Chicago, IL",
      icon: "⚽",
      highlights: [
        "Officiated 15+ games, improving participant feedback 15% and reducing disputes"
      ]
    }
  ]

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-400 pb-4">
          Work Experience
        </h1>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-green-400 rounded p-6 hover:bg-green-400 hover:bg-opacity-5 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl">{exp.icon}</span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-green-400 mb-1">
                    {exp.role}
                  </h2>
                  <h3 className="text-lg text-green-300 mb-2">
                    {exp.company}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-green-300 opacity-80">
                    <span>{exp.dates}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 text-green-300">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
