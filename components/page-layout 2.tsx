"use client"

import { useState, useEffect } from 'react'
import TerminalOverlay from './terminal-overlay'
import Navigation from './navigation'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + ` to toggle terminal
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault()
        setIsTerminalOpen(prev => !prev)
      }
      // Escape to close terminal
      if (e.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isTerminalOpen])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navigation onTerminalToggle={() => setIsTerminalOpen(!isTerminalOpen)} />
      
      <main className="relative">
        {children}
      </main>
      
      <TerminalOverlay 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
    </div>
  )
}
