import React from "react";
import ProfileCard from "./ProfileCard";

function About() {
  // Function to scroll to contact section when contact button is clicked
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <ProfileCard
              name="Dev Shah"
              title="Software Developer"
              handle="ddevv15"
              status="Available for Work"
              contactText="Contact Me"
              avatarUrl="/images/vaaniyo.jpg"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={handleContactClick}
            />
          </div>
          <div>
            <p className="text-white mb-6 text-3xl">
              Hi, I'm Dev Shah, a Computer Science major at the University of
              Illinois Chicago with a concentration in Software Engineering and
              a minor in Mathematics. Passionate about software development, I
              have experience in full-stack web development, security
              vulnerability assessments, and AI-driven solutions. My work spans
              from optimizing large-scale applications to building innovative
              projects like face recognition-based authentication kiosks. I
              thrive on problem-solving and collaboration, ensuring efficient
              and scalable solutions in every project.
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
// import Squares from "./Square";

// function About() {
//   return (
//     <section id="about" className="relative py-20 bg-black">
//       {/* Squares Background */}
//       <div className="absolute inset-0">
//         <Squares
//           speed={0.5}
//           squareSize={40}
//           direction="diagonal"
//           borderColor="rgb(48, 48, 48)"
//           hoverFillColor="#222"
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <h2 className="text-3xl font-bold text-center mb-12 text-white">
//           About Me
//         </h2>
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="aspect-square bg-gray-100 rounded-lg">
//             <img
//               src="/images/dev_headshot.jpg"
//               alt="Profile"
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div>
//             <p className="text-white mb-6 text-3xl">
//               Hi, I'm Dev Shah, a Computer Science major at the University of
//               Illinois Chicago with a concentration in Software Engineering and
//               a minor in Mathematics. Passionate about software development, I
//               have experience in full-stack web development, security
//               vulnerability assessments, and AI-driven solutions. My work spans
//               from optimizing large-scale applications to building innovative
//               projects like face recognition-based authentication kiosks. I
//               thrive on problem-solving and collaboration, ensuring efficient
//               and scalable solutions in every project.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">
//                 HTML
//               </span>
//               <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">
//                 CSS
//               </span>
//               <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">
//                 JavaScript
//               </span>
//               <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">
//                 React
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
