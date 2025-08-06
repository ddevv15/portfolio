import React from "react";
import Lightning from "./Lightning";

interface SocialLinkProps {
  href: string;
  icon: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-yellow-300 transition"
      aria-label={`Visit ${icon} profile`}
    >
      <i className={`bi bi-${icon} text-2xl sm:text-3xl`}></i>
    </a>
  );
};

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const socialLinks: Array<{ href: string; icon: string }> = [
    { href: "https://github.com/ddevv15", icon: "github" },
    { href: "https://linkedin.com/in/devshah1583", icon: "linkedin" },
    { href: "https://instagram.com/ddevv15", icon: "instagram" },
    { href: "https://vsco.co/ddevv15/gallery", icon: "camera" },
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className || ''}`.trim()}
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
            {socialLinks.map((link) => (
              <SocialLink
                key={link.icon}
                href={link.href}
                icon={link.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;