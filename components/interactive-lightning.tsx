"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface InteractiveLightningProps {
  className?: string
}

export default function InteractiveLightning({ className = "" }: InteractiveLightningProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [lightningIntensity, setLightningIntensity] = useState(0.5)

  // Handle mouse movement to track position for lightning direction
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

  // Randomly change lightning intensity for ambient effect
  useEffect(() => {
    if (!isHovered && !isClicked) {
      const interval = setInterval(() => {
        setLightningIntensity(0.3 + Math.random() * 0.3)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isHovered, isClicked])

  // Increase intensity when hovered or clicked
  useEffect(() => {
    if (isHovered) {
      setLightningIntensity(0.7)
    } else if (!isClicked) {
      setLightningIntensity(0.5)
    }
  }, [isHovered, isClicked])

  const handleClick = () => {
    setIsClicked(true)
    setLightningIntensity(1)

    // Create lightning flash effect
    setTimeout(() => {
      setLightningIntensity(0.8)
      setTimeout(() => {
        setLightningIntensity(0.6)
        setTimeout(() => {
          setIsClicked(false)
        }, 300)
      }, 100)
    }, 100)
  }

  // Calculate lightning paths based on mouse position
  const getLightningPath = (index: number) => {
    const baseAngle = mousePosition.x * 40 - 20
    const spread = isClicked ? 40 : isHovered ? 30 : 20
    const angle = baseAngle + ((index - 2) * spread) / 5
    const length = isClicked ? 100 : isHovered ? 90 : 80

    // Create zigzag path
    let path = `M 100,0 `
    const segments = 6
    const segmentLength = length / segments

    for (let i = 1; i <= segments; i++) {
      const segmentY = i * segmentLength
      const randomX = 100 + (Math.random() * 30 - 15) + (angle * segmentY) / 100
      path += `L ${randomX},${segmentY} `
    }

    return path
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
        {/* Energy orb */}
        <motion.div
          className="absolute z-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
          animate={{
            width: isClicked ? "120px" : isHovered ? "100px" : "80px",
            height: isClicked ? "120px" : isHovered ? "100px" : "80px",
            boxShadow: `0 0 ${isClicked ? 40 : isHovered ? 30 : 20}px ${isClicked ? 10 : isHovered ? 8 : 5}px rgba(6, 182, 212, ${lightningIntensity})`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Lightning bolts */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
          style={{ filter: `drop-shadow(0 0 5px rgba(6, 182, 212, ${lightningIntensity}))` }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.path
              key={i}
              d={getLightningPath(i)}
              stroke={`rgba(6, 182, 212, ${lightningIntensity * (1 - i * 0.15)})`}
              strokeWidth={isClicked ? 4 - i * 0.5 : isHovered ? 3 - i * 0.5 : 2 - i * 0.3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                rotate: (i - 2) * (isClicked ? 15 : isHovered ? 10 : 5),
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 0.2,
                delay: i * 0.1,
              }}
            />
          ))}
        </svg>

        {/* Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
            }}
            animate={{
              x: (Math.random() - 0.5) * (isClicked ? 200 : isHovered ? 150 : 100),
              y: (Math.random() - 0.5) * (isClicked ? 200 : isHovered ? 150 : 100),
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Text hint */}
        <motion.div
          className="absolute bottom-0 text-center text-cyan-400 text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          Click to energize!
        </motion.div>
      </div>
    </div>
  )
}
