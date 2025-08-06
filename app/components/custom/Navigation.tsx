"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  // Add scroll event listener to add background when scrolled
  useEffect(() => {
    const handleScroll = (): void => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleToggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleNavClick = (item: string) => {
    if (item === "Gallery") {
      setMenuOpen(false);
      return null; // Let Link handle this
    } else if (item === "Home" && pathname !== "/") {
      setMenuOpen(false);
      return null; // Let Link handle this
    } else {
      return (e: MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, item.toLowerCase());
    }
  };

  const navClasses = scrolled
    ? `fixed w-full bg-black/70 backdrop-blur-sm z-50 transition-all duration-300 ${className || ''}`
    : `fixed w-full bg-transparent z-50 transition-all duration-300 ${className || ''}`;

  const navItems = ["Home", "About", "Projects", "Gallery", "Resume"];

  return (
    <nav className={navClasses.trim()}>
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-white"
          >
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              if (item === "Resume") {
                return (
                  <a
                    key={item}
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-300 transition"
                  >
                    {item}
                  </a>
                );
              } else if (item === "Gallery") {
                return (
                  <Link
                    key={item}
                    href="/gallery"
                    className="text-white hover:text-yellow-300 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              } else if (item === "Home") {
                return (
                  <Link
                    key={item}
                    href="/"
                    className="text-white hover:text-yellow-300 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              } else {
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={handleNavClick(item) || undefined}
                    className="text-white hover:text-yellow-300 transition"
                  >
                    {item}
                  </a>
                );
              }
            })}
          </div>
          <button
            onClick={handleToggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="md:hidden bg-black/80 backdrop-blur-md transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => {
            if (item === "Resume") {
              return (
                <a
                  key={item}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition py-2 border-b border-white/10"
                >
                  {item}
                </a>
              );
            } else if (item === "Gallery") {
              return (
                <Link
                  key={item}
                  href="/gallery"
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-yellow-300 transition py-2 border-b border-white/10"
                >
                  {item}
                </Link>
              );
            } else if (item === "Home") {
              return (
                <Link
                  key={item}
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-yellow-300 transition py-2 border-b border-white/10"
                >
                  {item}
                </Link>
              );
            } else {
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleNavClick(item) || undefined}
                  className="text-white hover:text-yellow-300 transition py-2 border-b border-white/10"
                >
                  {item}
                </a>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;