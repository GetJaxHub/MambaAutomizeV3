"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { scrollToSection } from "@/utils/scroll-utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "/", section: "home" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Services", href: "/#services", section: "services" },
    { name: "Careers", href: "/careers", section: null },
    { name: "Founder", href: "/founder-ceo", section: null },
    { name: "Contact Us", href: "/#contact", section: "contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    if (href.startsWith("/#")) {
      return pathname === "/"
    }
    return pathname === href
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, section?: string | null) => {
    e.preventDefault()

    // If we're already on the homepage and there's a section, scroll to it
    if (pathname === "/" && section && href.startsWith("/#")) {
      scrollToSection(section)
    } else if (href === "/" && pathname === "/") {
      // If we're on homepage and clicking home, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Otherwise navigate to the new page
      router.push(href)
    }

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Mamba Automize Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl md:text-2xl font-bold text-white">Mamba Automize</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.section)}
                className={cn(
                  "text-white transition-colors font-medium cursor-pointer",
                  isActive(link.href) ? "text-cyan-400" : "hover:text-cyan-400",
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact", "contact")} className="hidden md:block">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Get Started</Button>
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-slate-900 z-40 flex flex-col pt-24 px-8 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.section)}
              className={cn(
                "text-white transition-colors text-xl font-medium",
                isActive(link.href) ? "text-cyan-400" : "hover:text-cyan-400",
              )}
            >
              {link.name}
            </a>
          ))}
          <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact", "contact")}>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white w-full mt-4">Get Started</Button>
          </a>
        </nav>
      </div>
    </header>
  )
}
