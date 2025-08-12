import PageLayout from '@/components/page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education | Dev Shah',
  description: 'Educational background of Dev Shah - Computer Science degree from University of Illinois Chicago.',
}

export default function EducationPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-400 pb-4">
          Education
        </h1>
        
        <div className="border border-green-400 rounded p-8 hover:bg-green-400 hover:bg-opacity-5 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl">🎓</span>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-green-400 mb-2">
                University of Illinois Chicago
              </h2>
              <h3 className="text-xl text-green-300 mb-2">
                B.S.E. Computer Science (Software Engineering)
              </h3>
              <p className="text-lg text-green-300 mb-2">
                Minor: Mathematics
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-green-300 opacity-80">
                <span>Mar 2022 – Mar 2025</span>
                <span className="hidden sm:inline">•</span>
                <span>Chicago, IL</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-green-300">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">Relevant Coursework</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <span className="bg-green-400 bg-opacity-10 px-3 py-2 rounded border border-green-400 border-opacity-30">Data Structures & Algorithms</span>
                <span className="bg-green-400 bg-opacity-10 px-3 py-2 rounded border border-green-400 border-opacity-30">Software Engineering</span>
                <span className="bg-green-400 bg-opacity-10 px-3 py-2 rounded border border-green-400 border-opacity-30">Database Systems</span>
                <span className="bg-green-400 bg-opacity-10 px-3 py-2 rounded border border-green-400 border-opacity-30">Computer Networks</span>
                <span className="bg-green-400 bg-opacity-10 px-3 py-2 rounded border border-green-400 border-opacity-30">Operating Systems</span>
                <span className="bg-green-400 bg-opacity-10 px-3 py-2 rounded border border-green-400 border-opacity-30">Web Development</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">Academic Focus</h4>
              <p className="leading-relaxed">
                Specializing in Software Engineering with a strong foundation in mathematics. 
                Coursework emphasizes practical application of computer science principles, 
                software design patterns, and modern development methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
