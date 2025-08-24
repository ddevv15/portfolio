import PageLayout from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Dev Shah",
  description:
    "Featured projects by Dev Shah - React chess game, face recognition systems, weather apps, task managers, security tools, JavaFX Blackjack game, OpenStreetMaps navigation system, priority queue implementation, MineSweeper ASCII game, and IMDB data explorer.",
}

export default function ProjectsPage() {
  const projects = [
    {
      name: "MCP Chat",
      dates: "January 2025",
      stack: ["Python", "Anthropic API", "MCP Protocol", "CLI", "Document Retrieval"],
      description: "A command-line interface application that enables interactive chat capabilities with AI models through the Anthropic API. Features document retrieval, command-based prompts, and extensible tool integrations via the MCP (Model Control Protocol) architecture.",
      link: "https://github.com/ddevv15/Introduction-to-model-context-protocol",
      icon: "🤖",
    },
    {
      name: "React Chess Game",
      dates: "August 2025",
      stack: ["React", "CSS Modules", "Jest", "GitHub Pages"],
      description: "A sleek, modern chess game with full rule support, real-time legal move validation, check/checkmate detection, and responsive design with smooth animations.",
      link: "https://ddevv15.github.io/ChessGame",
      icon: "♟️",
    },
    {
      name: "Faceway – Kiosk Face Recognition",
      dates: "Mar 2025 – Jun 2025",
      stack: ["React", "face‑api.js"],
      description: "99.9%‑uptime kiosk login & rewards system with offline capability.",
      link: "https://github.com/kirtanpatel2003/FaceWay",
      icon: "🔐",
    },
    {
      name: "WeatherGenie – Real‑Time Forecasting",
      dates: "Mar 2025 – Jun 2025",
      stack: ["React", "Node.js", "OpenWeather API", "Arduino"],
      description: "Personalized weather web app with ML‑enhanced hyper‑local predictions.",
      link: "https://www.weathergenie.us",
      icon: "🌤️",
    },
    {
      name: "TaskFlow – Drag‑and‑Drop Task Manager",
      dates: "Sep 2024 – Dec 2024",
      stack: ["React", "Firebase"],
      description: "Customizable dashboards, real‑time feedback and color‑coded categories.",
      link: "https://github.com/ddevv15/TaskFlow",
      icon: "📋",
    },
    {
      name: "GenVARS – Security Assessment & GenAI",
      dates: "Sep 2024 – Dec 2024",
      stack: ["Python", "GPT‑2"],
      description: "Automated security audit detecting 100+ flaws and implementing SOC‑2 controls.",
      icon: "🔒",
    },
    {
      name: "JavaFX Blackjack Game",
      dates: "Fall 2023",
      stack: ["Java", "JavaFX", "Maven", "JUnit"],
      description: "A complete Blackjack game with betting system, dealer logic, deck management, and comprehensive GUI. Features standard 52-card deck, hit/stand actions, and full game rules.",
      link: "https://github.com/ddevv15/BlackJack",
      icon: "🃏",
    },
    {
      name: "OpenStreetMaps Navigation System",
      dates: "Fall 2023",
      stack: ["C++", "XML Parsing", "Dijkstra's Algorithm", "TinyXML2"],
      description: "Navigation system using real OpenStreetMap data to find shortest paths between UIC campus buildings. Features graph construction with adjacency lists, XML parsing, and efficient pathfinding algorithms.",
      link: "https://github.com/ddevv15/OpenStreetMaps",
      icon: "🗺️",
    },
    {
      name: "Priority Queue Implementation",
      dates: "Fall 2023",
      stack: ["C++", "Binary Search Trees", "Templates", "Catch Framework"],
      description: "Custom priority queue using binary search tree with duplicate priority handling. Features templated design, iterator functions, memory management, and comprehensive testing with Catch framework.",
      link: "https://github.com/ddevv15/PriorityQueue",
      icon: "🔢",
    },
    {
      name: "MineSweeper ASCII Game",
      dates: "Spring 2023",
      stack: ["C++", "Arrays", "Recursion", "Game Logic"],
      description: "Terminal-based MineSweeper game with complete game mechanics including flagging, revealing, and recursive auto-reveal. Features 8x5 grid, mine detection algorithms, and command-based interface.",
      link: "https://github.com/ddevv15/MineSweeper",
      icon: "💣",
    },
    {
      name: "IMDB Data Explorer",
      dates: "Fall 2022",
      stack: ["C++", "File I/O", "Data Structures", "TSV Parsing"],
      description: "Interactive movie database search tool processing TSV files with 3M+ records. Features movie and actor search functionality, cast information display, and efficient data loading with error handling.",
      link: "https://github.com/ddevv15/IMDB",
      icon: "🎬",
    },
  ]

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-6 sm:mb-8 border-b border-green-400 pb-4">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-green-400 rounded p-4 sm:p-6 hover:bg-green-400 hover:bg-opacity-5 transition-colors"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-xl sm:text-2xl flex-shrink-0">{project.icon}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-green-400 mb-2 break-words">{project.name}</h2>
                  <p className="text-green-300 text-xs sm:text-sm mb-2">{project.dates}</p>
                </div>
              </div>

              <p className="text-green-300 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-green-400 bg-opacity-10 text-green-300 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm border border-green-400 border-opacity-30"
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
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
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
