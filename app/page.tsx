"use client"
import PageLayout from "@/components/page-layout"

export default function HomePage() {
  return (
    <PageLayout>
      <div id="home-container" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8">
        <div id="home-content" className="max-w-4xl mx-auto w-full">
          <div id="ascii-art-container" className="mb-6 sm:mb-8 overflow-x-auto">
            <pre className="text-green-400 text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight mx-auto inline-block">
              {`██████╗ ███████╗██╗   ██╗    ███████╗██╗  ██╗ █████╗ ██╗  ██╗
██╔══██╗██╔════╝██║   ██║    ██╔════╝██║  ██║██╔══██╗██║  ██║
██║  ██║█████╗  ██║   ██║    ███████╗███████║███████║███████║
██║  ██║██╔══╝  ╚██╗ ██╔╝    ╚════██║██╔══██║██╔══██║██╔══██║
██████╔╝███████╗ ╚████╔╝     ███████║██║  ██║██║  ██║██║  ██║
╚═════╝ ╚══════╝  ╚═══╝      ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`}
            </pre>
          </div>

          <p id="title-description" className="text-sm sm:text-lg md:text-xl text-green-300 mb-6 sm:mb-8">
            Software Engineer & React Enthusiast
          </p>

          <div id="welcome-text" className="text-green-400 mb-6 sm:mb-8 space-y-2 sm:space-y-4">
            <p className="text-sm sm:text-base">Welcome to my portfolio.</p>
            <p className="text-green-300 text-xs sm:text-base">
              Explore my work, skills, and experience through the navigation above
            </p>
          </div>

          <div id="navigation-grid" className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <a
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              About
            </a>
            <a
              href="/skills"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              Skills
            </a>
            <a
              href="/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              Projects
            </a>
            <a
              href="/experience"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              Experience
            </a>
            <a
              href="/education"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              Education
            </a>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
