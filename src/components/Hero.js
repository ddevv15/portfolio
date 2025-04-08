// import React from "react";
// import Aurora from "./Aurora";
// import Lightning from "./Lightning";

// function Hero() {
//   // Fixed aurora RGB codes
//   const auroraColors = ["#0A2647", "#144272", "#205295"];

//   return React.createElement(
//     "section",
//     {
//       id: "home",
//       className: "relative min-h-screen flex items-center justify-center",
//     },
//     React.createElement(Aurora, { colorStops: auroraColors, speed: 0.5 }),
//     React.createElement(
//       "div",
//       { className: "container mx-auto px-4 text-center z-10" },
//       React.createElement(
//         "h1",
//         { className: "text-5xl md:text-7xl font-bold text-white mb-6" },
//         "Hi, I'm ",
//         React.createElement(
//           "span",
//           { className: "text-yellow-300" },
//           "Dev Shah"
//         )
//       ),
//       React.createElement(
//         "h2",
//         { className: "text-3xl md:text-5xl font-semibold text-white/90 mb-8" },
//         "Software Developer/ AI Enthusiast"
//       ),
//       React.createElement(
//         "p",
//         {
//           className:
//             "text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto",
//         },
//         "I create beautiful, responsive, and user-friendly web applications that leave a lasting impression."
//       ),
//       React.createElement(
//         "div",
//         {
//           className:
//             "flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16",
//         },
//         React.createElement(
//           "a",
//           {
//             href: "#projects",
//             className:
//               "bg-white text-cyan-700 px-10 py-4 rounded-full font-medium text-lg hover:bg-yellow-300 hover:text-cyan-800 transition duration-300 ease-in-out transform hover:scale-105",
//           },
//           "View My Work"
//         ),
//         React.createElement(
//           "a",
//           {
//             href: "#contact",
//             className:
//               "bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-cyan-700 transition duration-300 ease-in-out transform hover:scale-105",
//           },
//           "Contact Me"
//         )
//       ),
//       React.createElement(
//         "div",
//         null,
//         React.createElement(
//           "p",
//           { className: "text-white/70 mb-4 text-lg" },
//           "Find me on:"
//         ),
//         React.createElement(
//           "div",
//           { className: "flex justify-center space-x-8" },
//           React.createElement(SocialLink, {
//             href: "https://github.com/ddevv15",
//             icon: "github",
//           }),
//           React.createElement(SocialLink, {
//             href: "https://linkedin.com/in/devshah1583",
//             icon: "linkedin",
//           }),
//           React.createElement(SocialLink, {
//             href: "https://instagram.com/ddevv15",
//             icon: "instagram",
//           })
//         )
//       )
//     )
//   );
// }

// function SocialLink({ href, icon }) {
//   return React.createElement(
//     "a",
//     {
//       href: href,
//       target: "_blank",
//       rel: "noopener noreferrer",
//       className: "text-white hover:text-yellow-300 transition",
//     },
//     React.createElement("i", { className: `bi bi-${icon} text-3xl` })
//   );
// }

// export default Hero;

/////////////////////////////////////

// import React from "react";
// import Lightning from "./Lightning";

// function Hero() {
//   return React.createElement(
//     "section",
//     {
//       id: "home",
//       className: "relative min-h-screen flex items-center justify-center",
//     },
//     React.createElement(Lightning, {
//       hue: 280, // Purple hue
//       xOffset: 0,
//       speed: 0.5,
//       intensity: 1.5, // Slightly increased intensity for better purple visibility
//       size: 1,
//     }),
//     React.createElement(
//       "div",
//       { className: "container mx-auto px-4 text-center z-10" },
//       React.createElement(
//         "h1",
//         { className: "text-5xl md:text-7xl font-bold text-white mb-6" },
//         "Hi, I'm ",
//         React.createElement(
//           "span",
//           { className: "text-yellow-300" },
//           "Dev Shah"
//         )
//       ),
//       React.createElement(
//         "h2",
//         { className: "text-3xl md:text-5xl font-semibold text-white/90 mb-8" },
//         "Software Developer/ AI Enthusiast"
//       ),
//       React.createElement(
//         "p",
//         {
//           className:
//             "text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto",
//         },
//         "I create beautiful, responsive, and user-friendly web applications that leave a lasting impression."
//       ),
//       React.createElement(
//         "div",
//         {
//           className:
//             "flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16",
//         },
//         React.createElement(
//           "a",
//           {
//             href: "#projects",
//             className:
//               "bg-white text-cyan-700 px-10 py-4 rounded-full font-medium text-lg hover:bg-yellow-300 hover:text-cyan-800 transition duration-300 ease-in-out transform hover:scale-105",
//           },
//           "View My Work"
//         ),
//         React.createElement(
//           "a",
//           {
//             href: "#contact",
//             className:
//               "bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-cyan-700 transition duration-300 ease-in-out transform hover:scale-105",
//           },
//           "Contact Me"
//         )
//       ),
//       React.createElement(
//         "div",
//         null,
//         React.createElement(
//           "p",
//           { className: "text-white/70 mb-4 text-lg" },
//           "Find me on:"
//         ),
//         React.createElement(
//           "div",
//           { className: "flex justify-center space-x-8" },
//           React.createElement(SocialLink, {
//             href: "https://github.com/ddevv15",
//             icon: "github",
//           }),
//           React.createElement(SocialLink, {
//             href: "https://linkedin.com/in/devshah1583",
//             icon: "linkedin",
//           }),
//           React.createElement(SocialLink, {
//             href: "https://instagram.com/ddevv15",
//             icon: "instagram",
//           })
//         )
//       )
//     )
//   );
// }

// function SocialLink({ href, icon }) {
//   return React.createElement(
//     "a",
//     {
//       href: href,
//       target: "_blank",
//       rel: "noopener noreferrer",
//       className: "text-white hover:text-yellow-300 transition",
//     },
//     React.createElement("i", { className: `bi bi-${icon} text-3xl` })
//   );
// }

// export default Hero;

// import React from "react";
// import Lightning from "./Lightning";

// function Hero() {
//   return React.createElement(
//     "section",
//     {
//       id: "home",
//       className:
//         "relative min-h-screen flex items-center justify-center overflow-hidden",
//     },
//     React.createElement(Lightning, {
//       hue: 280, // Purple hue
//       xOffset: 0,
//       speed: 0.5,
//       intensity: 1.5, // Slightly increased intensity for better purple visibility
//       size: 1,
//     }),
//     React.createElement(
//       "div",
//       {
//         className: "container mx-auto px-4 py-8 text-center z-10",
//         style: { maxWidth: "1200px" },
//       },
//       React.createElement(
//         "h1",
//         {
//           className:
//             "text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6",
//         },
//         "Hi, I'm ",
//         React.createElement(
//           "span",
//           { className: "text-yellow-300" },
//           "Dev Shah"
//         )
//       ),
//       React.createElement(
//         "h2",
//         {
//           className:
//             "text-2xl sm:text-3xl md:text-5xl font-semibold text-white/90 mb-4 sm:mb-8",
//         },
//         "Software Developer/ AI Enthusiast"
//       ),
//       React.createElement(
//         "p",
//         {
//           className:
//             "text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-2",
//         },
//         "I create beautiful, responsive, and user-friendly web applications that leave a lasting impression."
//       ),
//       React.createElement(
//         "div",
//         {
//           className:
//             "flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-16 px-4",
//         },
//         React.createElement(
//           "a",
//           {
//             href: "#projects",
//             className:
//               "bg-white text-cyan-700 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-yellow-300 hover:text-cyan-800 transition duration-300 ease-in-out transform hover:scale-105",
//           },
//           "View My Work"
//         ),
//         React.createElement(
//           "a",
//           {
//             href: "#contact",
//             className:
//               "bg-transparent border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-white hover:text-cyan-700 transition duration-300 ease-in-out transform hover:scale-105",
//           },
//           "Contact Me"
//         )
//       ),
//       React.createElement(
//         "div",
//         { className: "mt-4" },
//         React.createElement(
//           "p",
//           { className: "text-white/70 mb-3 text-base sm:text-lg" },
//           "Find me on:"
//         ),
//         React.createElement(
//           "div",
//           { className: "flex justify-center space-x-6 sm:space-x-8" },
//           React.createElement(SocialLink, {
//             href: "https://github.com/ddevv15",
//             icon: "github",
//           }),
//           React.createElement(SocialLink, {
//             href: "https://linkedin.com/in/devshah1583",
//             icon: "linkedin",
//           }),
//           React.createElement(SocialLink, {
//             href: "https://instagram.com/ddevv15",
//             icon: "instagram",
//           }),
//           React.createElement(SocialLink, {
//             href: "https://twitter.com/ddevv15",
//             icon: "Camera",
//           })
//         )
//       )
//     )
//   );
// }

// function SocialLink({ href, icon }) {
//   return React.createElement(
//     "a",
//     {
//       href: href,
//       target: "_blank",
//       rel: "noopener noreferrer",
//       className: "text-white hover:text-yellow-300 transition",
//     },
//     React.createElement("i", {
//       className: `bi bi-${icon} text-2xl sm:text-3xl`,
//     })
//   );
// }

// export default Hero;

// Make sure Lightning is properly imported from the correct path
// If Lightning.js is in the same directory as Hero.js:
import Lightning from "./Lightning";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Lightning
        hue={280} // Purple hue
        xOffset={0}
        speed={0.5}
        intensity={1.5} // Slightly increased intensity for better purple visibility
        size={1}
      />
      <div
        className="container mx-auto px-4 py-8 text-center z-10"
        style={{ maxWidth: "1200px" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
          Hi, I'm <span className="text-yellow-300">Dev Shah</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white/90 mb-4 sm:mb-8">
          Software Developer/ AI Enthusiast
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
          I create beautiful, responsive, and user-friendly web applications
          that leave a lasting impression.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-16 px-4">
          <a
            href="#projects"
            className="bg-white text-cyan-700 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-yellow-300 hover:text-cyan-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
        <div className="mt-4">
          <p className="text-white/70 mb-3 text-base sm:text-lg">Find me on:</p>
          <div className="flex justify-center space-x-6 sm:space-x-8">
            <SocialLink href="https://github.com/ddevv15" icon="github" />
            <SocialLink
              href="https://linkedin.com/in/devshah1583"
              icon="linkedin"
            />
            <SocialLink href="https://instagram.com/ddevv15" icon="instagram" />
            <SocialLink href="https://vsco.co/ddevv15/gallery" icon="camera" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-yellow-300 transition"
    >
      <i className={`bi bi-${icon} text-2xl sm:text-3xl`}></i>
    </a>
  );
}

export default Hero;
