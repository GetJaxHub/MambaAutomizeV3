"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, BarChart2, Clock, Shield, Cpu, TrendingUp, CheckCircle } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import type { JSX } from "react"
import { scrollToSection } from "@/utils/scroll-utils"

interface Feature {
  icon: JSX.Element
  title: string
  description: string
  benefits: string[]
  color: string
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useMediaQuery("(max-width: 768px)")

  const features: Feature[] = [
    {
      icon: <Zap className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Rapid Automation",
      description:
        "Streamline your workflows and eliminate repetitive tasks with our intelligent automation solutions.",
      benefits: [
        "Reduce manual workload by up to 80%",
        "Minimize human error in repetitive processes",
        "Deploy automation in days, not months",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <BarChart2 className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable business intelligence with advanced analytics.",
      benefits: [
        "Real-time dashboards and reporting",
        "Predictive analytics for forecasting",
        "Custom KPIs tailored to your business",
      ],
      color: "from-purple-500 to-cyan-500",
    },
    {
      icon: <Clock className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Time Efficiency",
      description: "Reclaim valuable time by automating routine tasks and optimizing business processes.",
      benefits: [
        "Reduce processing time by up to 65%",
        "Faster response times to customers",
        "More time for strategic initiatives",
      ],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Enhanced Security",
      description: "Implement robust security measures while streamlining your operational workflows.",
      benefits: [
        "Automated compliance checks",
        "Reduced security vulnerabilities",
        "Audit trails for all automated processes",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Cpu className="h-8 w-8 md:h-10 md:w-10" />,
      title: "AI Integration",
      description: "Leverage artificial intelligence to make smarter decisions and optimize operations.",
      benefits: [
        "Machine learning for process optimization",
        "Natural language processing capabilities",
        "Intelligent document processing",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Scalable Growth",
      description: "Build systems that grow with your business without adding operational complexity.",
      benefits: [
        "Easily scale automation as you grow",
        "Maintain efficiency during expansion",
        "Adapt quickly to changing business needs",
      ],
      color: "from-cyan-500 to-teal-500",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.4 : 0.6 } },
  }

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection("contact")
  }

  return (
    <section className="py-16 md:py-20 bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Discover how our comprehensive suite of features can transform your business operations and drive
            sustainable growth.
          </p>
          <div className="h-1 w-20 bg-cyan-500 mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group">
              <div className="bg-slate-900 rounded-xl p-4 md:p-6 lg:p-8 h-full border border-slate-700 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>

                <div className="flex items-center mb-4 md:mb-6">
                  <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white ml-3 md:ml-4">{feature.title}</h3>
                </div>

                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">{feature.description}</p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-xs md:text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {!isMobile && (
                  <div className="absolute -bottom-2 -right-2 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating animated elements - simplified on mobile */}
        <div className="relative mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center"
          >
            {!isMobile && (
              <>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute -top-10 -left-32 w-16 md:w-24 h-16 md:h-24 bg-cyan-500/10 rounded-full blur-xl"
                ></motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                  className="absolute -bottom-16 -right-20 w-20 md:w-32 h-20 md:h-32 bg-purple-500/10 rounded-full blur-xl"
                ></motion.div>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8 text-center max-w-xs md:max-w-2xl mx-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Ready to transform your business?
              </h3>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                Join hundreds of businesses that have already revolutionized their operations with Mamba Automize.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg text-sm md:text-base"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
