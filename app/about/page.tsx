import PageLayout from '@/components/page-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Dev Shah',
  description: 'Learn about Dev Shah - Software Engineer focused on scalable React apps and legacy-to-modern migrations.',
}

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-400 pb-4">
          About Dev Shah
        </h1>
        
        <div className="space-y-6 text-green-300 leading-relaxed">
          <p className="text-lg">
            Software Engineer focused on scalable React apps and legacy‑to‑modern migrations. 
            Led a government‑scale healthcare platform's shift from AngularJS to React, cutting 
            load times by 10% and boosting modularity.
          </p>
          
          <p>
            Passionate about clean code, cloud integration and security‑minded development. 
            I believe in writing code that not only works but is maintainable, scalable, and secure.
          </p>
          
          <p>
            Currently pursuing B.S.E. Computer Science at University of Illinois Chicago with a 
            focus on Software Engineering and Mathematics minor. Expected graduation: March 2025.
          </p>
          
          <div className="mt-8 p-6 border border-green-400 rounded">
            <h2 className="text-xl font-semibold text-green-400 mb-4">What I'm Working On</h2>
            <ul className="space-y-2">
              <li>• Building scalable React applications with modern tooling</li>
              <li>• Exploring cloud architecture and DevOps practices</li>
              <li>• Contributing to open-source projects</li>
              <li>• Learning advanced system design patterns</li>
            </ul>
          </div>
          
          <div className="mt-8 p-6 border border-green-400 rounded">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Beyond Code</h2>
            <p>
              When I'm not coding, you can find me officiating intramural sports, exploring new 
              technologies, or working on personal projects that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
