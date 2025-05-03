"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Operations Director",
      company: "TechGrowth Inc.",
      content:
        "Implementing Mamba Automize's workflow automation solution has transformed our operations. We've reduced processing time by 65% and virtually eliminated manual errors. The ROI has been incredible.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "Innovate Solutions",
      content:
        "The data analytics platform from Mamba Automize gave us insights we never had before. We can now make decisions based on real-time data, which has helped us stay ahead of market trends and optimize our product development.",
    },
    {
      id: 3,
      name: "Jessica Williams",
      position: "Customer Service Manager",
      company: "Global Retail Group",
      content:
        "Our customer service team was overwhelmed with repetitive inquiries. Mamba Automize's chatbot solution now handles 78% of our customer queries automatically, allowing our team to focus on complex issues that require a human touch.",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-slate-700 rounded-xl p-6 md:p-8 shadow-lg relative">
                    <Quote className="absolute top-6 left-6 h-8 w-8 md:h-12 md:w-12 text-cyan-500/20" />
                    <div className="relative z-10">
                      <p className="text-gray-300 text-base md:text-lg mb-6 italic">"{testimonial.content}"</p>
                      <div>
                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                        <p className="text-cyan-400 text-sm md:text-base">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setAutoplay(false)
                }}
                className={cn(
                  "w-2 md:w-3 h-2 md:h-3 rounded-full transition-all",
                  index === activeIndex ? "bg-cyan-500 w-4 md:w-6" : "bg-slate-600 hover:bg-slate-500",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-slate-700 hover:bg-slate-600 text-white rounded-full p-2 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-slate-700 hover:bg-slate-600 text-white rounded-full p-2 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
