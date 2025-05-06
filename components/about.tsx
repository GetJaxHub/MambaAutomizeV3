"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function About() {
  const benefits = [
    "Increased operational efficiency",
    "Reduced manual errors",
    "Cost savings through automation",
    "Improved customer experience",
    "Data-driven decision making",
    "Scalable business processes",
  ]

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Mamba Automize</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              At Mamba Automize, we're on a mission to transform how businesses operate through intelligent automation
              and process optimization. We believe that every business deserves access to cutting-edge technology that
              can streamline operations, reduce costs, and drive growth.
            </p>

            <div className="h-1 w-20 bg-cyan-500 my-8"></div>

            <h3 className="text-2xl font-bold text-white mb-6">Who We Are</h3>

            <p className="text-gray-300 mb-6">
              We are a team of automation experts with decades of combined experience. We understand the challenges
              businesses face in today's fast-paced digital landscape. Our solutions are designed to address these
              challenges head-on, providing customized automation strategies that deliver real results.
            </p>

            <p className="text-gray-300">
              Whether you're a small startup looking to scale efficiently or an established enterprise seeking to
              optimize existing processes, Mamba Automize has the expertise and technology to help you succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-700 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
