// import React from "react";

// function Hero() {
//   return (
//     <section
//       id="home"
//       className="gradient-bg min-h-screen flex items-center pt-16"
//       style={{
//         background: "linear-gradient(135deg, #48a1c7 0%, #1e4d5c 100%)",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Welcome to My Portfolio
//           </h1>
//           <p className="text-xl text-white/90 mb-8">
//             Frontend Developer & UI/UX Enthusiast
//           </p>
//           <a
//             href="#projects"
//             className="bg-white text-cyan-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
//           >
//             View My Work
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="gradient-bg min-h-screen flex items-center pt-16"
      style={{
        background: "linear-gradient(135deg, #48a1c7 0%, #1e4d5c 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-yellow-300">Dev Shah</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-6">
              Frontend Developer & UI/UX Enthusiast
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              I create beautiful, responsive, and user-friendly web applications
              that leave a lasting impression.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="bg-white text-cyan-700 px-8 py-3 rounded-full font-medium hover:bg-yellow-300 hover:text-cyan-800 transition duration-300 ease-in-out transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-cyan-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 mt-8 md:mt-0">
            <img
              src=".portfolio/public/dev_headshot.jpg" // Replace with your actual image path
              alt="Dev Shah"
              className="rounded-full w-64 h-64 mx-auto border-4 border-white shadow-lg"
            />
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-4">Find me on:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/ddevv15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition"
            >
              <i className="bi bi-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/devshah1583"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition"
            >
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
            <a
              href="https://instagram.com/ddevv15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
