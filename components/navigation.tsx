"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavigationProps {
  onTerminalToggle: () => void
}

export default function Navigation({ onTerminalToggle }: NavigationProps) {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/education', label: 'Education' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="border-b border-green-400 bg-black sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-green-400 font-bold text-lg hover:text-green-300 transition-colors">
            dev@portfolio:~$
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? 'text-green-400 border-b border-green-400'
                    : 'text-green-300 hover:text-green-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <button
            onClick={onTerminalToggle}
            className="bg-green-400 text-black px-3 py-1 rounded text-sm hover:bg-green-300 transition-colors"
            title="Toggle Terminal (Ctrl + `)"
          >
            Terminal
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-green-400'
                    : 'text-green-300 hover:text-green-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}