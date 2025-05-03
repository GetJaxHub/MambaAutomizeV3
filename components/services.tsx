"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cpu, BarChart3, Workflow, Database, Bot, LineChart, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

export default function Services() {
  const [activeService, setActiveService] = useState<number>(1)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const services: Service[] = [
    {
      id: 1,
      title: "Business Process Automation",
      description:
        "Streamline your operations with end-to-end process automation that eliminates manual tasks and reduces errors.",
      icon: <Workflow className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
      features: [
        "Workflow automation",
        "Document processing",
        "Approval workflows",
        "Task management",
        "Process monitoring",
      ],
    },
    {
      id: 2,
      title: "Data Analytics & Insights",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions.",
      icon: <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
      features: [
        "Business intelligence dashboards",
        "Predictive analytics",
        "Custom reporting",
        "Data visualization",
        "Performance metrics",
      ],
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description:
        "Leverage the power of artificial intelligence to optimize operations and make data-driven decisions.",
      icon: <Cpu className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
      features: [
        "Predictive maintenance",
        "Customer behavior analysis",
        "Demand forecasting",
        "Anomaly detection",
        "Natural language processing",
      ],
    },
    {
      id: 4,
      title: "Database Management",
      description: "Optimize your data storage and management with our comprehensive database solutions.",
      icon: <Database className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
      features: [
        "Database design & optimization",
        "Data migration",
        "Cloud database solutions",
        "Database security",
        "Performance tuning",
      ],
    },
    {
      id: 5,
      title: "Chatbot & Virtual Assistants",
      description: "Enhance customer service and internal operations with intelligent conversational AI.",
      icon: <Bot className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
      features: [
        "Customer service bots",
        "Internal help desk assistants",
        "Appointment scheduling",
        "FAQ automation",
        "Multi-channel support",
      ],
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Identify bottlenecks and optimize your business processes for maximum efficiency.",
      icon: <LineChart className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />,
      features: [
        "Process analysis",
        "Resource allocation",
        "Cost optimization",
        "Efficiency metrics",
        "Continuous improvement",
      ],
    },
  ]

  const activeServiceData = services.find((service) => service.id === activeService) || services[0]

  return (
    <section id="services" className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Discover how our comprehensive suite of automation and optimization services can transform your business
            operations.
          </p>
          <div className="h-1 w-20 bg-cyan-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Our Solutions</h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.id}>
                      <button
                        onClick={() => setActiveService(service.id)}
                        className={cn(
                          "w-full text-left p-2 md:p-3 rounded-lg flex items-center justify-between transition-all text-sm md:text-base",
                          activeService === service.id
                            ? "bg-cyan-500/20 text-cyan-400"
                            : "text-gray-300 hover:bg-slate-700",
                        )}
                      >
                        <span className="flex items-center gap-2 md:gap-3">
                          {service.icon}
                          <span>{service.title}</span>
                        </span>
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 md:h-5 md:w-5 transition-transform",
                            activeService === service.id ? "rotate-90" : "",
                          )}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg h-full">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  {activeServiceData.icon}
                  <h3 className="text-xl md:text-2xl font-bold text-white">{activeServiceData.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">{activeServiceData.description}</p>

                <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Key Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
                  {activeServiceData.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                      <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm md:text-base">Learn More</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
