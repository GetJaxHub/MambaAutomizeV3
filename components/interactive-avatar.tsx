"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface InteractiveAvatarProps {
  imageSrc: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function InteractiveAvatar({ imageSrc, alt, width, height, className = "" }: InteractiveAvatarProps) {
  const avatarRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isAnimating, setIsAnimating] = useState(false)
  const [scale, setScale] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarRef.current) return

      const rect = avatarRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from center (normalized)
      const distanceX = (e.clientX - centerX) / (window.innerWidth / 2)
      const distanceY = (e.clientY - centerY) / (window.innerHeight / 2)

      // Limit rotation to a reasonable range (-10 to 10 degrees)
      const rotationX = Math.max(Math.min(distanceY * 10, 10), -10)
      const rotationY = Math.max(Math.min(-distanceX * 10, 10), -10)

      setRotation({ x: rotationX, y: rotationY })
    }

    const handleMouseLeave = () => {
      // Reset rotation when mouse leaves the window
      setIsAnimating(true)
      setRotation({ x: 0, y: 0 })
      setTimeout(() => setIsAnimating(false), 500)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const handleClick = () => {
    // Scale up and down on click
    setScale(0.95)
    setTimeout(() => setScale(1.05), 150)
    setTimeout(() => setScale(1), 300)
  }

  return (
    <div
      ref={avatarRef}
      className={`relative ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
        transition: isAnimating ? "transform 0.5s ease-out" : "transform 0.1s ease-out",
        cursor: "pointer",
      }}
    >
      {/* Main image with mask and crop */}
      <div className="relative overflow-hidden">
        <div
          className="relative"
          style={{
            width: `${width}px`,
            height: `${Math.floor(height * 0.9)}px`, // Crop 10% from bottom
            overflow: "hidden",
            borderRadius: "16px",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Background removal effect with gradient mask */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, transparent 60%, rgba(15, 23, 42, 1) 100%)",
              mixBlendMode: "multiply",
            }}
          />

          {/* Image positioned to crop from bottom */}
          <div className="relative" style={{ marginTop: "-5%" }}>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={alt}
              width={width}
              height={height}
              className="object-cover object-top"
              priority
              style={{
                filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
              }}
            />
          </div>
        </div>

        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0) 70%)",
            opacity: isHovered ? 0.7 : 0,
          }}
        />
      </div>

      {/* Reflection effect */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"
        style={{
          transform: `translateY(${rotation.x * 2}px) translateX(${rotation.y * 2}px)`,
        }}
      />
    </div>
  )
}
