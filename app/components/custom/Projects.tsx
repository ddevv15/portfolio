import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  altText: string;
}

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "FaceWay",
      description: "FaceWay is a kiosk app that uses real-time face recognition to deliver personalized experiences and integrated loyalty rewards.",
      imageUrl: "/images/one.jpg",
      projectUrl: "https://github.com/ddevv15/FaceWay",
      altText: "FaceWay Project"
    },
    {
      id: 2,
      title: "GenVars",
      description: "GenVARS is an automated vulnerability exploitation framework that leverages SSH, Telnet, and GPT-4o's capabilities to generate detailed reports and deliver actionable exploitation steps in controlled environments.",
      imageUrl: "/images/two.jpg",
      projectUrl: "https://github.com/ddevv15/GenVars",
      altText: "GenVars Project"
    },
    {
      id: 3,
      title: "PantryConnect",
      description: "PantryConnect is a comprehensive web application designed to streamline food pantry operations and enhance the user experience for both pantry administrators and community members.",
      imageUrl: "/images/three.jpg",
      projectUrl: "https://github.com/ddevv15/PantryConnect",
      altText: "PantryConnect Project"
    },
    {
      id: 4,
      title: "Vaaniyo",
      description: "VAANIYO is a web app that empowers women to report safety issues anonymously. Features a secure reporting system and an admin dashboard for real-time monitoring.",
      imageUrl: "/images/four.jpg",
      projectUrl: "https://github.com/ddevv15/Vaaniyo",
      altText: "Vaaniyo Project"
    },
    {
      id: 5,
      title: "GameReviewApp",
      description: "A full-stack React/Node.js web application for discovering, reviewing, and managing video games, featuring user authentication, game search, detailed reviews, and personalized user profiles.",
      imageUrl: "/images/five.JPG",
      projectUrl: "https://github.com/ddevv15/GameReviewApp",
      altText: "GameReviewApp Project"
    }
  ];

  return (
    <section id="projects" className={`py-20 bg-black ${className || ''}`.trim()}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={project.imageUrl}
                alt={project.altText}
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.projectUrl}
                  className="text-cyan-700 hover:text-cyan-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;