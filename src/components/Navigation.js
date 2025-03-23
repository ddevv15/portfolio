import React, { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return React.createElement(
    "nav",
    //  { className: "fixed w-full bg-transparent backdrop-blur-sm z-50" },
    { className: "fixed w-full bg-transparent  z-50" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4 py-4" },
      React.createElement(
        "div",
        { className: "flex justify-between items-center" },
        React.createElement(
          "a",
          {
            href: "#home",
            onClick: (e) => handleSmoothScroll(e, "home"),
            className: "text-2xl font-bold text-white",
          },
          "Portfolio"
        ),
        React.createElement(
          "div",
          { className: "hidden md:flex space-x-8" },
          ["Home", "About", "Projects", "Resume"].map((item) =>
            item === "Resume"
              ? React.createElement(
                  "a",
                  {
                    key: item,
                    href: "/resume.pdf",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    //download: "resume.pdf",
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
          { className: "md:hidden text-white", onClick: handleToggleMenu },
          React.createElement("i", { className: "bi bi-list text-2xl" })
        )
      )
    ),
    menuOpen &&
      React.createElement(
        "div",
        { className: "md:hidden bg-white/10 backdrop-blur-md" },
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
                    //download: "resume.pdf",
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
        )
      )
  );
}

export default Navigation;
