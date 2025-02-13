import React, { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Smooth scroll function: scroll to ID
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu if open
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
            className="text-2xl font-bold text-cyan-700"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="text-gray-600 hover:text-cyan-700 transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="text-gray-600 hover:text-cyan-700 transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="text-gray-600 hover:text-cyan-700 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="text-gray-600 hover:text-cyan-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={handleToggleMenu}>
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="text-gray-600 hover:text-cyan-700 transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="text-gray-600 hover:text-cyan-700 transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="text-gray-600 hover:text-cyan-700 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="text-gray-600 hover:text-cyan-700 transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
