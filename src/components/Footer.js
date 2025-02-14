import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="bi bi-github text-xl"></i>
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="bi bi-linkedin text-xl"></i>
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="bi bi-instagram text-xl"></i>
          </a>
        </div>
        <p className="text-white">© 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
