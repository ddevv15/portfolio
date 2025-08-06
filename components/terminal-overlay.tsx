"use client"

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface Command {
  input: string
  output: string[]
  timestamp: string
}

interface TerminalOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function TerminalOverlay({ isOpen, onClose }: TerminalOverlayProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Command[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const commands = {
    help: () => [
      "Available commands:",
      "",
      "  help        - List available commands",
      "  about       - Navigate to about page",
      "  skills      - Navigate to skills page",
      "  projects    - Navigate to projects page",
      "  experience  - Navigate to experience page",
      "  education   - Navigate to education page",
      "  contact     - Navigate to contact page",
      "  home        - Navigate to home page",
      "  clear       - Clear the terminal",
      "  exit        - Close terminal",
      "",
      "Navigation commands will take you to the respective pages!",
    ],

    about: () => {
      router.push('/about')
      onClose()
      return ["Navigating to about page..."]
    },

    skills: () => {
      router.push('/skills')
      onClose()
      return ["Navigating to skills page..."]
    },

    projects: () => {
      router.push('/projects')
      onClose()
      return ["Navigating to projects page..."]
    },

    experience: () => {
      router.push('/experience')
      onClose()
      return ["Navigating to experience page..."]
    },

    education: () => {
      router.push('/education')
      onClose()
      return ["Navigating to education page..."]
    },

    contact: () => {
      router.push('/contact')
      onClose()
      return ["Navigating to contact page..."]
    },

    home: () => {
      router.push('/')
      onClose()
      return ["Navigating to home page..."]
    },

    clear: () => {
      setHistory([])
      return []
    },

    exit: () => {
      onClose()
      return ["Terminal closed."]
    },
  }

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Welcome message when terminal opens
  useEffect(() => {
    if (isOpen && history.length === 0) {
      const welcomeCommand: Command = {
        input: '',
        output: [
          "Terminal overlay activated!",
          'Type "help" to see available commands.',
          'Use navigation commands to jump between pages.',
          "═══════════════════════════════════════════════",
        ],
        timestamp: new Date().toLocaleTimeString(),
      }
      setHistory([welcomeCommand])
    }
  }, [isOpen, history.length])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    const timestamp = new Date().toLocaleTimeString()

    setIsTyping(true)

    let output: string[] = []

    if (command in commands) {
      const result = (commands as any)[command]()
      if (result) output = result
    } else if (command === "") {
      output = []
    } else {
      output = [`Command not found: ${command}`, 'Type "help" to see available commands.']
    }

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 200))

    const newCommand: Command = {
      input: input,
      output: output,
      timestamp: timestamp,
    }

    setHistory((prev) => [...prev, newCommand])
    setInput("")
    setIsTyping(false)
    
    // Immediately refocus the input after command processing
    setTimeout(() => {
      if (inputRef.current && isOpen) {
        inputRef.current.focus()
      }
    }, 0)
  }

  // Add a useEffect to maintain focus after state updates
  useEffect(() => {
    if (!isTyping && inputRef.current && isOpen) {
      inputRef.current.focus()
    }
  }, [isTyping, history, isOpen])

  // Add click handler to refocus input when clicking inside terminal
  const handleTerminalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (inputRef.current && !isTyping) {
      inputRef.current.focus()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-black border border-green-400 rounded w-full max-w-4xl h-96 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-4 border-b border-green-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-green-400">Terminal Overlay</div>
            <button
              onClick={onClose}
              className="text-green-400 hover:text-green-300 text-sm"
            >
              ✕
            </button>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-transparent"
            onClick={handleTerminalClick}
          >
            {/* Command History */}
            <AnimatePresence>
              {history.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  {cmd.input && (
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-300">dev@portfolio:</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-white">$</span>
                      <span className="text-green-400">{cmd.input}</span>
                      <span className="text-gray-500 text-xs ml-auto">{cmd.timestamp}</span>
                    </div>
                  )}
                  {cmd.output.map((line, lineIndex) => (
                    <motion.div
                      key={lineIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: lineIndex * 0.02 }}
                      className="text-green-400 whitespace-pre-wrap leading-relaxed text-sm"
                    >
                      {line}
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Current Input */}
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <span className="text-green-300">dev@portfolio:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$</span>
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={`bg-transparent outline-none w-full font-mono text-sm ${showCursor ? "text-transparent" : "text-green-400"}`}
                  disabled={isTyping}
                  autoComplete="off"
                  spellCheck="false"
                />
                {showCursor && (
                  <span className="absolute left-0 text-green-400 pointer-events-none text-sm">
                    {input}
                    <span className="bg-green-400">█</span>
                  </span>
                )}
              </div>
            </form>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 mt-2 text-sm">
                Processing command...
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}