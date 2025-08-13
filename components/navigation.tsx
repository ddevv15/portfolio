"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

interface NavigationProps {
  onTerminalToggle: () => void
}

export default function Navigation({ onTerminalToggle }: NavigationProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="border-b border-green-400 bg-black sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="text-green-400 font-bold text-sm sm:text-lg hover:text-green-300 transition-colors">
            dev@portfolio:~$
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors text-sm ${
                  pathname === item.href
                    ? "text-green-400 border-b border-green-400"
                    : "text-green-300 hover:text-green-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-green-400 hover:text-green-300 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button
              onClick={onTerminalToggle}
              className="bg-green-400 text-black px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm hover:bg-green-300 transition-colors"
              title="Toggle Terminal (Ctrl + `)"
            >
              Terminal
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-green-400 mt-2 pt-4">
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xs sm:text-sm transition-colors p-2 rounded ${
                    pathname === item.href
                      ? "text-green-400 bg-green-400 bg-opacity-10"
                      : "text-green-300 hover:text-green-400 hover:bg-green-400 hover:bg-opacity-5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
