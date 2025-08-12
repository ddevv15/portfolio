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
            {/* Changed: Replaced placeholder div with an img tag */}
            <img
              src="/images/one.jpg"
              alt="FaceWay Project"
              className="w-full h-80 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">FaceWay</h3>
              <p className="text-gray-600 mb-4">
                FaceWay is a kiosk app that uses real-time face recognition to
                deliver personalized experiences and integrated loyalty rewards.
              </p>
              <a
                href="https://github.com/ddevv15/FaceWay"
                className="text-cyan-700 hover:text-cyan-800"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            {/* Changed: Replaced placeholder div with an img tag */}
            <img
              src="/images/two.jpg"
              alt="GenVars Project"
              className="w-full h-80 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">GenVars</h3>
              <p className="text-gray-600 mb-4">
                GenVARS is an automated vulnerability exploitation framework
                that leverages SSH, Telnet, and GPT-4o's capabilities to
                generate detailed reports and deliver actionable exploitation
                steps in controlled environments.
              </p>
              <a
                href="https://github.com/ddevv15/GenVars"
                className="text-cyan-700 hover:text-cyan-800"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg  overflow-hidden shadow-md hover:shadow-lg transition">
            {/* Changed: Replaced placeholder div with an img tag */}
            <img
              src="/images/three.jpg"
              alt="Project Three"
              className="w-full h-80 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">PantryConnect</h3>
              <p className="text-gray-600 mb-4"></p>
              <a
                href="#"
                className="text-cyan-700 hover:text-cyan-800"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            {/* Changed: Replaced placeholder div with an img tag */}
            <img
              src="/images/four.jpg"
              alt="Project Four"
              className="w-full h-80 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">TaskFlow</h3>
              <p className="text-gray-600 mb-4">
                TaskFlow is an innovative task management app with a fully
                customizable dashboard that lets you effortlessly organize and
                prioritize your daily tasks.
              </p>
              <a
                href="https://github.com/ddevv15/TaskFlow"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-700 hover:text-cyan-800"
              >
                View Project →
              </a>
            </div>
          </div>
          {/* Project Card 5*/}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            {/* Changed: Replaced placeholder div with an img tag */}
            <img
              src="/images/five.JPG"
              alt="Project Four"
              className="w-full h-80 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">OpenStreetMaps</h3>
              <p className="text-gray-600 mb-4">
                Open Street Maps is a navigation app that builds a graph from
                UIC East campus data and uses Dijkstra's algorithm to find the
                shortest routes between buildings.
              </p>
              <a
                href="https://github.com/ddevv15/OpenStreetMaps"
                className="text-cyan-700 hover:text-cyan-800"
                target="_blank"
                rel="noreferrer"
              >
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
// import Squares from "./Square";

// function Projects() {
//   return (
//     <section id="projects" className="relative py-20 bg-black">
//       {/* Squares Background - using exact same configuration as other sections */}
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
//           My Projects
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Project Card 1 */}
//           <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//             <img
//               src="/images/one.jpg"
//               alt="FaceWay Project"
//               className="w-full h-80 object-cover object-center"
//             />
//             <div className="p-6">
//               <h3 className="font-semibold text-xl mb-2">FaceWay</h3>
//               <p className="text-gray-600 mb-4">
//                 FaceWay is a kiosk app that uses real-time face recognition to
//                 deliver personalized experiences and integrated loyalty rewards.
//               </p>
//               <a
//                 href="https://github.com/ddevv15/FaceWay"
//                 className="text-cyan-700 hover:text-cyan-800"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>

//           {/* Project Card 2 */}
//           <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//             <img
//               src="/images/two.jpg"
//               alt="GenVars Project"
//               className="w-full h-80 object-cover object-center"
//             />
//             <div className="p-6">
//               <h3 className="font-semibold text-xl mb-2">GenVars</h3>
//               <p className="text-gray-600 mb-4">
//                 GenVARS is an automated vulnerability exploitation framework
//                 that leverages SSH, Telnet, and GPT-4o's capabilities to
//                 generate detailed reports and deliver actionable exploitation
//                 steps in controlled environments.
//               </p>
//               <a
//                 href="https://github.com/ddevv15/GenVars"
//                 className="text-cyan-700 hover:text-cyan-800"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>

//           {/* Project Card 3 */}
//           <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//             <img
//               src="/images/three.jpg"
//               alt="Project Three"
//               className="w-full h-80 object-cover object-center"
//             />
//             <div className="p-6">
//               <h3 className="font-semibold text-xl mb-2">PantryConnect</h3>
//               <p className="text-gray-600 mb-4">
//                 A brief description of the project and its key features.
//               </p>
//               <a
//                 href="#"
//                 className="text-cyan-700 hover:text-cyan-800"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>

//           {/* Project Card 4 */}
//           <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//             <img
//               src="/images/four.jpg"
//               alt="Project Four"
//               className="w-full h-80 object-cover object-center"
//             />
//             <div className="p-6">
//               <h3 className="font-semibold text-xl mb-2">TaskFlow</h3>
//               <p className="text-gray-600 mb-4">
//                 TaskFlow is an innovative task management app with a fully
//                 customizable dashboard that lets you effortlessly organize and
//                 prioritize your daily tasks.
//               </p>
//               <a
//                 href="https://github.com/ddevv15/TaskFlow"
//                 target="_blank"
//                 className="text-cyan-700 hover:text-cyan-800"
//                 rel="noopener noreferrer"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>
//           {/* Project Card 5*/}
//           <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//             <img
//               src="/images/five.JPG"
//               alt="Project Four"
//               className="w-full h-80 object-cover object-center"
//             />
//             <div className="p-6">
//               <h3 className="font-semibold text-xl mb-2">OpenStreetMaps</h3>
//               <p className="text-gray-600 mb-4">
//                 Open Street Maps is a navigation app that builds a graph from
//                 UIC East campus data and uses Dijkstra's algorithm to find the
//                 shortest routes between buildings.
//               </p>
//               <a
//                 href="https://github.com/ddevv15/OpenStreetMaps"
//                 className="text-cyan-700 hover:text-cyan-800"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
