"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Zap, MessageCircle, Code, Database, BarChart2 } from "lucide-react"

interface InteractiveAIBotProps {
  className?: string
}

export default function InteractiveAIBot({ className = "" }: InteractiveAIBotProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [activeIcon, setActiveIcon] = useState<number>(0)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  const [isThinking, setIsThinking] = useState(false)
  const [facialExpression, setFacialExpression] = useState<"neutral" | "happy" | "thinking" | "surprised" | "giggling">(
    "neutral",
  )
  const [expressionTimer, setExpressionTimer] = useState<NodeJS.Timeout | null>(null)

  const messages = [
    "Hello! I can help automate your business processes.",
    "Need help with data analytics? I'm here for you!",
    "I can optimize your workflows and save you time.",
    "Let me help you reduce operational costs with smart automation.",
    "AI-powered solutions for your business challenges.",
    "Ready to transform your business with automation?",
  ]

  const icons = [
    <Cpu key="cpu" className="h-5 w-5" />,
    <Zap key="zap" className="h-5 w-5" />,
    <MessageCircle key="message" className="h-5 w-5" />,
    <Code key="code" className="h-5 w-5" />,
    <Database key="database" className="h-5 w-5" />,
    <BarChart2 key="chart" className="h-5 w-5" />,
  ]

  // Function to set a random facial expression
  const setRandomExpression = () => {
    if (isThinking) return

    const expressions: ("neutral" | "happy" | "surprised")[] = ["neutral", "happy", "surprised"]
    const randomExpression = expressions[Math.floor(Math.random() * expressions.length)]
    setFacialExpression(randomExpression)

    // Reset to neutral after a few seconds
    if (expressionTimer) clearTimeout(expressionTimer)
    const timer = setTimeout(() => {
      setFacialExpression("neutral")
    }, 3000)
    setExpressionTimer(timer)
  }

  // Rotate through icons automatically
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isClicked && !isThinking) {
        setActiveIcon((prev) => (prev + 1) % icons.length)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isClicked, isThinking, icons.length])

  // Handle click interaction
  const handleClick = () => {
    if (isThinking) return

    setIsClicked(true)
    setFacialExpression("giggling")
    setIsThinking(true)
    setShowMessage(false)

    // Simulate AI thinking
    setTimeout(() => {
      setIsThinking(false)
      setMessage(messages[Math.floor(Math.random() * messages.length)])
      setShowMessage(true)

      // Keep giggling for a bit longer
      setTimeout(() => {
        setFacialExpression("happy")

        // Reset after some time
        setTimeout(() => {
          setIsClicked(false)
          setShowMessage(false)
          setFacialExpression("neutral")
        }, 3000)
      }, 2000)
    }, 1500)
  }

  // Occasionally change expressions randomly
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isClicked && !isThinking && Math.random() > 0.7) {
        setRandomExpression()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isClicked, isThinking])

  // Clean up timers
  useEffect(() => {
    return () => {
      if (expressionTimer) clearTimeout(expressionTimer)
    }
  }, [expressionTimer])

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* AI Bot Head */}
        <motion.div
          className="relative"
          animate={{
            scale: isClicked ? 1.05 : isHovered ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {/* Bot body */}
          <motion.div
            className="w-[180px] h-[240px] md:w-[220px] md:h-[280px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl relative overflow-hidden"
            animate={{
              boxShadow: isClicked
                ? "0 0 30px 5px rgba(6, 182, 212, 0.5)"
                : isHovered
                  ? "0 0 20px 2px rgba(6, 182, 212, 0.3)"
                  : "0 0 10px 1px rgba(6, 182, 212, 0.2)",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border border-cyan-500/20 rounded-full"></div>
              <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-cyan-500/30 rounded-full"></div>
              <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] border border-cyan-500/40 rounded-full"></div>
            </div>

            {/* Bot face screen */}
            <motion.div
              className="absolute top-[15%] left-[15%] w-[70%] h-[40%] bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg overflow-hidden border border-slate-600"
              animate={{
                borderColor: isClicked ? "rgba(6, 182, 212, 0.8)" : "rgba(100, 116, 139, 0.8)",
              }}
            >
              {/* AI face - animated expressions */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                {isThinking ? (
                  <div className="flex space-x-2">
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ scale: [0.5, 1, 0.5] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ scale: [0.5, 1, 0.5] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ scale: [0.5, 1, 0.5] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.4 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {facialExpression === "neutral" && (
                      <div className="flex space-x-8">
                        <motion.div
                          className="w-3 h-6 bg-cyan-400 rounded-full"
                          animate={{
                            height: isClicked ? "24px" : isHovered ? "20px" : "16px",
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            height: { duration: 0.3 },
                            opacity: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
                          }}
                        />
                        <motion.div
                          className="w-3 h-6 bg-cyan-400 rounded-full"
                          animate={{
                            height: isClicked ? "24px" : isHovered ? "20px" : "16px",
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            height: { duration: 0.3 },
                            opacity: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
                          }}
                        />
                      </div>
                    )}

                    {facialExpression === "happy" && (
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-8 mb-2">
                          <motion.div
                            className="w-3 h-3 bg-cyan-400 rounded-full"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                          />
                          <motion.div
                            className="w-3 h-3 bg-cyan-400 rounded-full"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5 }}
                          />
                        </div>
                        <motion.div
                          className="w-10 h-5 border-b-2 border-cyan-400 rounded-b-full"
                          animate={{ scaleX: [1, 1.1, 1] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        />
                      </div>
                    )}

                    {facialExpression === "surprised" && (
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-8 mb-2">
                          <motion.div
                            className="w-4 h-4 bg-transparent border-2 border-cyan-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                          />
                          <motion.div
                            className="w-4 h-4 bg-transparent border-2 border-cyan-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                          />
                        </div>
                        <motion.div
                          className="w-6 h-6 bg-transparent border-2 border-cyan-400 rounded-full"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        />
                      </div>
                    )}

                    {facialExpression === "giggling" && (
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-8 mb-2">
                          <motion.div
                            className="w-3 h-0.5 bg-cyan-400 rounded-full"
                            animate={{
                              rotate: [0, 15, 0],
                              y: [0, -1, 0],
                            }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.3 }}
                          />
                          <motion.div
                            className="w-3 h-0.5 bg-cyan-400 rounded-full"
                            animate={{
                              rotate: [0, 15, 0],
                              y: [0, -1, 0],
                            }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.3 }}
                          />
                        </div>
                        <motion.div
                          className="w-10 h-6 border-b-2 border-cyan-400 rounded-b-full"
                          animate={{
                            scaleX: [1, 1.2, 0.9, 1.1, 1],
                            scaleY: [1, 0.9, 1.1, 0.9, 1],
                            y: [0, 1, -1, 1, 0],
                          }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 }}
                        />

                        {/* Giggle particles */}
                        {Array.from({ length: 8 }).map((_, i) => (
                          <motion.div
                            key={`giggle-${i}`}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            initial={{
                              x: 0,
                              y: 0,
                              opacity: 0,
                            }}
                            animate={{
                              x: (Math.random() - 0.5) * 40,
                              y: -10 - Math.random() * 20,
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 0.8,
                              delay: i * 0.1,
                              repeatDelay: 0.2,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Screen scan effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-2 bg-cyan-500/20"
                animate={{
                  top: ["0%", "100%", "0%"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Control panel */}
            <div className="absolute bottom-[15%] left-[15%] w-[70%] h-[30%] bg-slate-800 rounded-lg border border-slate-700 p-2 flex flex-col justify-between">
              {/* Status indicators */}
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-cyan-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  />
                </div>
                <div className="text-[8px] text-cyan-400">MAMBA-AI</div>
              </div>

              {/* Icon display */}
              <motion.div
                className="w-10 h-10 mx-auto bg-slate-900 rounded-full flex items-center justify-center text-cyan-400"
                animate={{
                  scale: isClicked ? 1.2 : 1,
                  boxShadow: isClicked ? "0 0 10px 2px rgba(6, 182, 212, 0.5)" : "0 0 5px 1px rgba(6, 182, 212, 0.2)",
                }}
                onClick={handleClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIcon}
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    {icons[activeIcon]}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Control buttons */}
              <div className="flex justify-between">
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-2 h-1 bg-slate-600 rounded-sm"></div>
                  ))}
                </div>
                <div className="flex space-x-1">
                  {[0, 1].map((i) => (
                    <div key={i} className="w-1 h-1 bg-slate-600 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated circuits */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 200 260"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="rgba(6, 182, 212, 0.3)" fill="none" strokeWidth="1">
                {/* Circuit patterns */}
                <motion.path
                  d="M 20,20 L 20,80 L 60,80 L 60,120 L 100,120 L 100,180"
                  strokeDasharray="200"
                  animate={{
                    strokeDashoffset: [200, 0, 200],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 8,
                    ease: "linear",
                  }}
                />
                <motion.path
                  d="M 180,20 L 180,60 L 140,60 L 140,100 L 100,100 L 100,140 L 60,140 L 60,180"
                  strokeDasharray="300"
                  animate={{
                    strokeDashoffset: [300, 0, 300],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 10,
                    ease: "linear",
                    delay: 1,
                  }}
                />
                <motion.path
                  d="M 100,20 L 100,40 L 140,40 L 140,80 L 60,80 L 60,160 L 100,160 L 100,200"
                  strokeDasharray="250"
                  animate={{
                    strokeDashoffset: [250, 0, 250],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 9,
                    ease: "linear",
                    delay: 2,
                  }}
                />
              </g>
            </svg>
          </motion.div>

          {/* Bot base/stand */}
          <motion.div
            className="w-[140px] h-[20px] mx-auto bg-gradient-to-r from-slate-700 to-slate-800 rounded-b-xl relative -top-1 z-0"
            animate={{
              width: isClicked ? "150px" : "140px",
            }}
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[4px] bg-slate-600 rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Message bubble */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="absolute top-0 right-0 transform -translate-y-full bg-cyan-900/90 text-white p-3 rounded-lg text-sm max-w-[200px] md:max-w-[250px] shadow-lg"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                {message}
                <div className="absolute -bottom-7 left-3/4 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-cyan-900/90"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interaction hint */}
        <motion.div
          className="mt-4 text-center text-cyan-400 text-sm font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered && !isClicked && !showMessage ? 1 : 0,
            y: isHovered && !isClicked && !showMessage ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          Click to interact with AI
        </motion.div>

        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            initial={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: Math.random() * 300 - 150,
              y: Math.random() * 300 - 150,
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
            }}
          />
        ))}
      </div>
    </div>
  )
}
