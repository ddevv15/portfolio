import PageLayout from '@/components/page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills | Dev Shah',
  description: 'Technical skills and expertise of Dev Shah - Full-stack development, AI/ML, cloud technologies, and more.',
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
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: ["Gemini AI", "Imagen", "Vertex AI", "Prompt Engineering", "Natural Language Processing", "Image Recognition"]
    }
  ]

  const certifications = [
    {
      name: "Build Real World AI Applications with Gemini and Imagen",
      issuer: "Google",
      date: "July 2025",
      credentialId: "5ad1984f-c3b7-489e-b285-eebb6eec922",
      description: "Image recognition, natural language processing, image generation using Google's Gemini and Imagen models, deploying applications on Vertex AI platform",
      link: "https://www.credly.com/badges/5ad1984f-c3b7-489e-b285-ee8bb6eec922/public_url",
      icon: "🤖"
    },
    {
      name: "JavaScript (Basic)",
      issuer: "HackerRank",
      date: "July 2025",
      credentialId: "DC59A34F7166",
      description: "Fundamental JavaScript programming skills and problem-solving",
      link: "https://www.hackerrank.com/certificates/iframe/dc59a34f7166",
      icon: "📜"
    },
    {
      name: "JavaScript (Intermediate)",
      issuer: "HackerRank Campus Club, AUFS",
      date: "July 2025",
      credentialId: "E629EAA1EB88",
      description: "Advanced JavaScript concepts and intermediate-level programming",
      link: "https://www.hackerrank.com/certificates/iframe/e629eaa1eb88",
      icon: "📜"
    },
    {
      name: "Prompt Design in Vertex AI",
      issuer: "Google",
      date: "July 2025",
      credentialId: "9d2de74d-2698-4745-8764-e7b589f264f7",
      description: "Prompt engineering, image analysis, multimodal generative techniques, and applying Gemini models to real-world marketing scenarios",
      link: "https://www.credly.com/badges/9d2de74d-2698-4745-8764-e7b589f264f7/public_url",
      icon: "🎯"
    },
    {
      name: "Software Engineer",
      issuer: "HackerRank",
      date: "July 2025",
      credentialId: "4C59A340F297",
      description: "Problem solving and SQL skills certification",
      link: "https://www.hackerrank.com/certificates/iframe/4c59a340f297",
      icon: "💼"
    },
    {
      name: "Software Engineer Intern",
      issuer: "HackerRank",
      date: "July 2025",
      credentialId: "089E1EOC7758",
      description: "SQL and problem solving skills for internship level",
      link: "https://www.hackerrank.com/certificates/iframe/089e1e0c7758",
      icon: "💼"
    },
    {
      name: "Software Engineer Intern",
      issuer: "Argusoft",
      date: "October 2024",
      credentialId: "N/A",
      description: "Professional internship experience and certification",
      link: "https://drive.google.com/file/d/1anf4HjibK2B8e2tHuqqeNmrmIKkbyy_3/view?usp=sharing",
      icon: "💼"
    },
    {
      name: "CITI Program – Social/Behavioral Research Investigators",
      issuer: "CITI Program",
      date: "September 2024",
      credentialId: "65387052",
      description: "Group 2. HSP, Social/Behavioral Research Investigators and Key Personnel (Expires Sep 2027)",
      link: "https://www.citiprogram.org/verify/?wf3b247f2-e6d1-466f-8766-5add70075f55-65387052",
      icon: "🔬"
    }
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
            🏆 Certifications & Badges
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-green-400 border-opacity-30 rounded p-4 hover:bg-green-400 hover:bg-opacity-5 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl flex-shrink-0">{cert.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-green-400 font-semibold text-sm mb-1 line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-green-300 text-xs mb-1">
                      {cert.issuer} • {cert.date}
                    </p>
                    {cert.credentialId !== "N/A" && (
                      <p className="text-green-300 text-xs opacity-70">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-green-300 text-xs leading-relaxed mb-3">
                  {cert.description}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors text-xs"
                >
                  <span>View Certificate</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
