import React from "react";

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/ddevv15",
      icon: "bi-github",
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/devshah1583",
      icon: "bi-linkedin", 
      label: "LinkedIn"
    },
    {
      href: "https://instagram.com/ddevv15",
      icon: "bi-instagram",
      label: "Instagram"
    }
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`bi ${link.icon} text-xl`}></i>
            </a>
          ))}
        </div>
        <p className="text-white">© 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;