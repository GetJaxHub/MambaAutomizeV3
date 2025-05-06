"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import FooterWithPolicies from "@/components/footer-with-policies"
import ChatWidget from "@/components/chat-widget"

export default function FounderCEOPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollY = window.scrollY
      containerRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#001524]">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div
        ref={containerRef}
        className="relative min-h-screen pt-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          background:
            "linear-gradient(90deg, #001524 0%, #001524 40%, #00253a 40%, #00253a 60%, #001524 60%, #001524 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Phone frame on the left - exactly matching reference */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative">
                {/* Using the exact image from the reference with the phone frame already included */}
                <Image
                  src="/images/ceo-portrait-new.png"
                  alt="Jakyz Mamba - Founder & CEO"
                  width={500}
                  height={800}
                  className="w-auto h-auto max-w-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Text content on the right - matching reference */}
            <motion.div initial="hidden" animate="visible" className="space-y-6 md:space-y-8">
              <motion.h1
                custom={0}
                variants={textVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                Hi, I'm Jakyz Mamba
              </motion.h1>

              <motion.h2 custom={1} variants={textVariants} className="text-2xl text-cyan-400 font-medium">
                Founder / CEO
              </motion.h2>

              <motion.p
                custom={3}
                variants={textVariants}
                className="text-gray-300 text-base md:text-lg leading-relaxed"
              >
                Experienced leader with a strong background in business analysis, operational excellence, and process
                optimization. Proven ability to lead teams, drive continuous improvement, and implement data-driven
                solutions that align with organizational goals. Skilled in translating complex business needs into
                actionable insights to support strategic decision-making.
              </motion.p>

              <motion.div custom={4} variants={textVariants}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  We, at MambaAutomize, are on a mission to help businesses streamline operations, reduce costs, and
                  improve efficiency through tailored automation and process improvement solutions. Let us help you
                  unlock your business's full potential.
                </p>
              </motion.div>

              <motion.div custom={5} variants={textVariants} className="flex flex-wrap gap-4 pt-6">
                <Link href="/#services">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">Services</Button>
                </Link>
                <Link href="/#contact">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 px-8 py-6 text-lg"
                  >
                    Let's talk
                  </Button>
                </Link>
              </motion.div>

              <motion.div custom={6} variants={textVariants} className="flex gap-4 pt-6">
                <Link
                  href="https://www.facebook.com/MambaAutomize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-slate-800 p-3 rounded-full border border-slate-700 transition-colors"
                >
                  <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="http://linkedin.com/company/mambaautomize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-slate-800 p-3 rounded-full border border-slate-700 transition-colors"
                >
                  <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="mailto:Jakyz.Mamba@MambaAutomize.com"
                  className="bg-transparent hover:bg-slate-800 p-3 rounded-full border border-slate-700 transition-colors"
                >
                  <svg className="h-6 w-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <FooterWithPolicies />
      <ChatWidget />
    </div>
  )
}
