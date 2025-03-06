// import React, { useState } from "react";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you for your message! I will get back to you soon.");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section id="contact" className="py-20 bg-black">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-white">
//           Get In Touch
//         </h2>
//         <div className="max-w-lg mx-auto">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block text-white mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-700"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-white mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-700"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-white mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows="4"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-700"
//                 value={formData.message}
//                 onChange={handleChange}
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-cyan-700 text-white py-3 rounded-lg hover:bg-cyan-800 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

"use client";

import { useState } from "react";
import Squares from "./Square";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 bg-black">
      {/* Squares Background - using exact same configuration as other sections */}
      <div className="absolute inset-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="rgb(48, 48, 48)"
          hoverFillColor="#222"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>
        <div className="max-w-lg mx-auto">
          <form
            className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-700"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-700"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-700"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-700 text-white py-3 rounded-lg hover:bg-cyan-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
