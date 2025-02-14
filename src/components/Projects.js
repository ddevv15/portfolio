import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="aspect-video bg-gray-100"></div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Project One</h3>
              <p className="text-gray-600 mb-4">
                A brief description of the project and its key features.
              </p>
              <a href="#" className="text-cyan-700 hover:text-cyan-800">
                View Project →
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="aspect-video bg-gray-100"></div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Project Two</h3>
              <p className="text-gray-600 mb-4">
                A brief description of the project and its key features.
              </p>
              <a href="#" className="text-cyan-700 hover:text-cyan-800">
                View Project →
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="aspect-video bg-gray-100"></div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Project Three</h3>
              <p className="text-gray-600 mb-4">
                A brief description of the project and its key features.
              </p>
              <a href="#" className="text-cyan-700 hover:text-cyan-800">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
