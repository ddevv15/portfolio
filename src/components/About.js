import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gray-100 rounded-lg"></div>
          <div>
            <p className="text-gray-600 mb-6">
              I'm a passionate frontend developer with a keen eye for design and
              user experience. I love creating beautiful and functional websites
              that make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">
                HTML
              </span>
              <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">
                CSS
              </span>
              <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">
                React
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
