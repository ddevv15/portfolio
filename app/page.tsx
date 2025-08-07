"use client"

import type React from "react"
import PageLayout from '@/components/page-layout'

export default function HomePage() {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <pre className="text-green-400 text-xs md:text-sm lg:text-base leading-tight ascii-art">
{`██████╗ ███████╗██╗   ██╗    ███████╗██╗  ██╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║   ██║    ██╔════╝██║  ██║██╔══██╗██║  ██║
  ██║  ██║█████╗  ██║   ██║    ███████╗███████║███████║███████║
  ██║  ██║██╔══╝  ╚██╗ ██╔╝    ╚════██║██╔══██║██╔══██║██╔══██║
  ██████╔╝███████╗ ╚████╔╝     ███████║██║  ██║██║  ██║██║  ██║
  ╚═════╝ ╚══════╝  ╚═══╝      ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`}
            </pre>
          </div>
          
          
          
          <p className="text-lg md:text-xl text-green-300 mb-8">
            Software Engineer & React Enthusiast
          </p>
          
          <div className="text-green-400 mb-8">
            <p className="mb-4">
              Welcome to my portfolio.
            </p>
            <p className="text-green-300">
              Explore my work, skills, and experience through the navigation above
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a href="/about" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              About
            </a>
            <a href="/skills" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Skills
            </a>
            <a href="/projects" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Projects
            </a>
            <a href="/experience" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Experience
            </a>
            <a href="/education" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Education
            </a>
            <a href="/contact" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Contact
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}