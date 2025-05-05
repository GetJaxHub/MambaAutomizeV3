"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface InteractiveTeslaCoilProps {
  className?: string
}

export default function InteractiveTeslaCoil({ className = "" }: InteractiveTeslaCoilProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [intensity, setIntensity] = useState(0.5)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Ambient animation
  useEffect(() => {
    if (!isHovered && !isClicked) {
      const interval = setInterval(() => {
        setIntensity(0.3 + Math.random() * 0.3)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [isHovered, isClicked])

  // Increase intensity when hovered or clicked
  useEffect(() => {
    if (isHovered) {
      setIntensity(0.7)
    } else if (!isClicked) {
      setIntensity(0.5)
    }
  }, [isHovered, isClicked])

  const handleClick = () => {
    setIsClicked(true)
    setIntensity(1)

    // Create power surge effect
    setTimeout(() => {
      setIntensity(0.8)
      setTimeout(() => {
        setIntensity(0.6)
        setTimeout(() => {
          setIsClicked(false)
        }, 300)
      }, 100)
    }, 100)
  }

  // Generate lightning arcs based on mouse position and intensity
  const generateArcs = () => {
    const arcs = []
    const arcCount = isClicked ? 8 : isHovered ? 6 : 4

    for (let i = 0; i < arcCount; i++) {
      const angle = (i / arcCount) * Math.PI * 2
      const length = isClicked ? 120 : isHovered ? 100 : 80

      // Calculate end point based on angle and length
      const endX = 100 + Math.cos(angle) * length * (0.7 + Math.random() * 0.3)
      const endY = 100 + Math.sin(angle) * length * (0.7 + Math.random() * 0.3)

      // Create zigzag path for lightning
      let path = `M 100,100 `
      const segments = 6

      let currentX = 100
      let currentY = 100

      for (let j = 1; j <= segments; j++) {
        const ratio = j / segments
        const targetX = 100 + (endX - 100) * ratio
        const targetY = 100 + (endY - 100) * ratio

        // Add some randomness to make it look like lightning
        const randomOffsetX = (Math.random() - 0.5) * 30 * ratio
        const randomOffsetY = (Math.random() - 0.5) * 30 * ratio

        currentX = targetX + randomOffsetX
        currentY = targetY + randomOffsetY

        path += `L ${currentX},${currentY} `
      }

      arcs.push({
        path,
        opacity: intensity * (1 - i * 0.1),
        width: isClicked ? 3 - i * 0.2 : isHovered ? 2 - i * 0.2 : 1.5 - i * 0.1,
        delay: i * 0.05,
      })
    }

    return arcs
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Tesla coil base */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-40 bg-gradient-to-t from-slate-700 to-slate-600 rounded-lg"
          animate={{
            height: isClicked ? 45 : 40,
            width: isClicked ? 22 : 20,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Coil middle section */}
        <motion.div
          className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-slate-600 to-slate-500 rounded-full"
          animate={{
            bottom: isClicked ? 45 : 40,
            height: isClicked ? 18 : 16,
            width: isClicked ? 18 : 16,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Energy sphere */}
        <motion.div
          className="absolute z-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
          style={{
            bottom: "60px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          animate={{
            width: isClicked ? "60px" : isHovered ? "50px" : "40px",
            height: isClicked ? "60px" : isHovered ? "50px" : "40px",
            boxShadow: `0 0 ${isClicked ? 30 : isHovered ? 20 : 15}px ${isClicked ? 8 : isHovered ? 6 : 4}px rgba(6, 182, 212, ${intensity})`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Lightning arcs */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
          style={{ filter: `drop-shadow(0 0 5px rgba(6, 182, 212, ${intensity}))` }}
        >
          {generateArcs().map((arc, i) => (
            <motion.path
              key={i}
              d={arc.path}
              stroke={`rgba(6, 182, 212, ${arc.opacity})`}
              strokeWidth={arc.width}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 0.1,
                delay: arc.delay,
              }}
            />
          ))}
        </svg>

        {/* Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
            }}
            animate={{
              x: (Math.random() - 0.5) * (isClicked ? 180 : isHovered ? 140 : 100),
              y: (Math.random() - 0.5) * (isClicked ? 180 : isHovered ? 140 : 100),
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              bottom: "60px",
              left: "50%",
            }}
          />
        ))}

        {/* Text hint */}
        <motion.div
          className="absolute bottom-0 text-center text-cyan-400 text-sm font-medium w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          Click to power up!
        </motion.div>
      </div>
    </div>
  )
}
