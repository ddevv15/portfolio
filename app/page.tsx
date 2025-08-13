"use client"
import PageLayout from "@/components/page-layout"

export default function HomePage() {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-6 sm:mb-8 overflow-x-auto">
            <pre className="text-green-400 text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight mx-auto inline-block">
              {`██████╗ ███████╗██╗   ██╗    ███████╗██╗  ██╗ █████╗ ██╗  ██╗
██╔══██╗██╔════╝██║   ██║    ██╔════╝██║  ██║██╔══██╗██║  ██║
██║  ██║█████╗  ██║   ██║    ███████╗███████║███████║███████║
██║  ██║██╔══╝  ╚██╗ ██╔╝    ╚════██║██╔══██║██╔══██║██╔══██║
██████╔╝███████╗ ╚████╔╝     ███████║██║  ██║██║  ██║██║  ██║
╚═════╝ ╚══════╝  ╚═══╝      ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`}
            </pre>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-green-400 mb-3 sm:mb-4">
            Dev Shah
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-green-300 mb-6 sm:mb-8">
            Software Engineer & React Enthusiast
          </p>

          <div className="text-green-400 mb-6 sm:mb-8 space-y-2 sm:space-y-4">
            <p className="text-sm sm:text-base">Welcome to my portfolio.</p>
            <p className="text-green-300 text-xs sm:text-base">
              Explore my work, skills, and experience through the navigation above
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <a
              href="/about"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              About
            </a>
            <a
              href="/skills"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              Skills
            </a>
            <a
              href="/projects"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              Projects
            </a>
            <a
              href="/experience"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              Experience
            </a>
            <a
              href="/education"
              className="border border-green-400 hover:bg-green-400 hover:text-black transition-colors p-3 sm:p-4 rounded text-xs sm:text-sm"
            >
              Education
            </a>
            <a
              href="/contact"
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
