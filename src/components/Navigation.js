// import React, { useState } from "react";

// function Navigation() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleToggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleSmoothScroll = (e, targetId) => {
//     e.preventDefault();
//     const element = document.getElementById(targetId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setMenuOpen(false);
//   };

//   return React.createElement(
//     "nav",
//     //  { className: "fixed w-full bg-transparent backdrop-blur-sm z-50" },
//     { className: "fixed w-full bg-transparent  z-50" },
//     React.createElement(
//       "div",
//       { className: "container mx-auto px-4 py-4" },
//       React.createElement(
//         "div",
//         { className: "flex justify-between items-center" },
//         React.createElement(
//           "a",
//           {
//             href: "#home",
//             onClick: (e) => handleSmoothScroll(e, "home"),
//             className: "text-2xl font-bold text-white",
//           },
//           "Portfolio"
//         ),
//         React.createElement(
//           "div",
//           { className: "hidden md:flex space-x-8" },
//           ["Home", "About", "Projects", "Resume"].map((item) =>
//             item === "Resume"
//               ? React.createElement(
//                   "a",
//                   {
//                     key: item,
//                     href: "/resume.pdf",
//                     target: "_blank",
//                     rel: "noopener noreferrer",
//                     //download: "resume.pdf",
//                     className: "text-white hover:text-yellow-300 transition",
//                   },
//                   item
//                 )
//               : React.createElement(
//                   "a",
//                   {
//                     key: item,
//                     href: `#${item.toLowerCase()}`,
//                     onClick: (e) => handleSmoothScroll(e, item.toLowerCase()),
//                     className: "text-white hover:text-yellow-300 transition",
//                   },
//                   item
//                 )
//           )
//         ),
//         React.createElement(
//           "button",
//           { className: "md:hidden text-white", onClick: handleToggleMenu },
//           React.createElement("i", { className: "bi bi-list text-2xl" })
//         )
//       )
//     ),
//     menuOpen &&
//       React.createElement(
//         "div",
//         { className: "md:hidden bg-white/10 backdrop-blur-md" },
//         React.createElement(
//           "div",
//           { className: "container mx-auto px-4 py-4 flex flex-col space-y-4" },
//           ["Home", "About", "Projects", "Resume"].map((item) =>
//             item === "Resume"
//               ? React.createElement(
//                   "a",
//                   {
//                     key: item,
//                     href: "/resume.pdf",
//                     target: "_blank",
//                     rel: "noopener noreferrer",
//                     //download: "resume.pdf",
//                     className: "text-white hover:text-yellow-300 transition",
//                   },
//                   item
//                 )
//               : React.createElement(
//                   "a",
//                   {
//                     key: item,
//                     href: `#${item.toLowerCase()}`,
//                     onClick: (e) => handleSmoothScroll(e, item.toLowerCase()),
//                     className: "text-white hover:text-yellow-300 transition",
//                   },
//                   item
//                 )
//           )
//         )
//       )
//   );
// }

// export default Navigation;

"use client";

import React, { useState, useEffect } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navClasses = scrolled
    ? "fixed w-full bg-black/70 backdrop-blur-sm z-50 transition-all duration-300"
    : "fixed w-full bg-transparent z-50 transition-all duration-300";

  return React.createElement(
    "nav",
    { className: navClasses },
    React.createElement(
      "div",
      { className: "container mx-auto px-4 py-3 sm:py-4" },
      React.createElement(
        "div",
        { className: "flex justify-between items-center" },
        React.createElement(
          "a",
          {
            href: "#home",
            onClick: (e) => handleSmoothScroll(e, "home"),
            className: "text-xl sm:text-2xl font-bold text-white",
          },
          "Portfolio"
        ),
        React.createElement(
          "div",
          { className: "hidden md:flex space-x-6 lg:space-x-8" },
          ["Home", "About", "Projects", "Resume"].map((item) =>
            item === "Resume"
              ? React.createElement(
                  "a",
                  {
                    key: item,
                    href: "/resume.pdf",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-white hover:text-yellow-300 transition",
                  },
                  item
                )
              : React.createElement(
                  "a",
                  {
                    key: item,
                    href: `#${item.toLowerCase()}`,
                    onClick: (e) => handleSmoothScroll(e, item.toLowerCase()),
                    className: "text-white hover:text-yellow-300 transition",
                  },
                  item
                )
          )
        ),
        React.createElement(
          "button",
          {
            className:
              "md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors",
            onClick: handleToggleMenu,
            "aria-label": "Toggle menu",
          },
          React.createElement("i", {
            className: `bi bi-${menuOpen ? "x" : "list"} text-2xl`,
          })
        )
      )
    ),
    menuOpen &&
      React.createElement(
        "div",
        {
          className:
            "md:hidden bg-black/80 backdrop-blur-md transition-all duration-300",
          style: {
            maxHeight: menuOpen ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          },
        },
        React.createElement(
          "div",
          { className: "container mx-auto px-4 py-4 flex flex-col space-y-4" },
          ["Home", "About", "Projects", "Resume"].map((item) =>
            item === "Resume"
              ? React.createElement(
                  "a",
                  {
                    key: item,
                    href: "/resume.pdf",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-white hover:text-yellow-300 transition py-2 border-b border-white/10",
                  },
                  item
                )
              : React.createElement(
                  "a",
                  {
                    key: item,
                    href: `#${item.toLowerCase()}`,
                    onClick: (e) => handleSmoothScroll(e, item.toLowerCase()),
                    className:
                      "text-white hover:text-yellow-300 transition py-2 border-b border-white/10",
                  },
                  item
                )
          )
        )
      )
  );
}

export default Navigation;
