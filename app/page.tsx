"use client"

import type React from "react"
import Link from 'next/link'
import PageLayout from '@/components/page-layout'

export default function HomePage() {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <pre className="text-green-400 text-xs md:text-sm lg:text-base leading-tight">
{`██████╗ ███████╗██╗   ██╗    ███████╗██╗  ██╗ █████╗ ██╗  ██╗
██╔══██╗██╔════╝██║   ██║    ██╔════╝██║  ██║██╔══██╗██║  ██║
██║  ██║█████╗  ██║   ██║    ███████╗███████║███████║███████║
██║  ██║██╔══╝  ╚██╗ ██╔╝    ╚════██║██╔══██║██╔══██║██╔══██║
██████╔╝███████╗ ╚████╔╝     ███████║██║  ██║██║  ██║██║  ██║
╚═════╝ ╚══════╝  ╚═══╝      ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`}
            </pre>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-green-400 mb-4">
            Dev Shah
          </h1>
          
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
            <Link href="/about" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              About
            </Link>
            <Link href="/skills" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Skills
            </Link>
            <Link href="/projects" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Projects
            </Link>
            <Link href="/experience" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Experience
            </Link>
            <Link href="/education" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Education
            </Link>
            <Link href="/contact" className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-4 rounded">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
