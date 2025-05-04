"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Code, Database, TrendingUp, ChevronDown, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import FooterWithPolicies from "@/components/footer-with-policies"
import ChatWidget from "@/components/chat-widget"

interface JobPosition {
  id: string
  title: string
  department: string
  type: string
  location: string
  icon: React.ReactNode
  description: string
  responsibilities: string[]
  requirements: string[]
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const jobPositions: JobPosition[] = [
    {
      id: "frontend-developer",
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote / Manila, Philippines",
      icon: <Code className="h-5 w-5 text-cyan-400" />,
      description:
        "We're looking for a talented Frontend Developer to join our team and help build beautiful, responsive, and user-friendly interfaces for our automation solutions.",
      responsibilities: [
        "Develop and maintain responsive web applications using React, Next.js, and TypeScript",
        "Collaborate with designers to implement UI/UX designs with precision",
        "Write clean, maintainable, and efficient code",
        "Optimize applications for maximum speed and scalability",
        "Participate in code reviews and contribute to technical discussions",
      ],
      requirements: [
        "3+ years of experience in frontend development",
        "Strong proficiency in React, Next.js, and TypeScript",
        "Experience with modern CSS frameworks like Tailwind CSS",
        "Knowledge of responsive design principles",
        "Understanding of RESTful APIs and how to integrate them",
        "Familiarity with version control systems (Git)",
        "Bachelor's degree in Computer Science or related field (or equivalent experience)",
      ],
    },
    {
      id: "marketing-associate",
      title: "Marketing Associate",
      department: "Marketing",
      type: "Full-time",
      location: "Manila, Philippines",
      icon: <TrendingUp className="h-5 w-5 text-cyan-400" />,
      description:
        "We're seeking a creative and data-driven Marketing Associate to help grow our brand presence and generate leads for our automation solutions.",
      responsibilities: [
        "Develop and execute marketing campaigns across digital channels",
        "Create engaging content for social media, blog posts, and email newsletters",
        "Analyze marketing metrics and prepare reports on campaign performance",
        "Collaborate with the sales team to develop lead generation strategies",
        "Assist in organizing webinars, events, and other marketing activities",
      ],
      requirements: [
        "2+ years of experience in digital marketing",
        "Strong writing and communication skills",
        "Experience with social media management and content creation",
        "Familiarity with marketing analytics tools",
        "Knowledge of SEO principles",
        "Experience with marketing automation tools is a plus",
        "Bachelor's degree in Marketing, Communications, or related field",
      ],
    },
    {
      id: "database-administrator",
      title: "Database Administrator",
      department: "Engineering",
      type: "Full-time",
      location: "Remote / Manila, Philippines",
      icon: <Database className="h-5 w-5 text-cyan-400" />,
      description:
        "We're looking for an experienced Database Administrator to manage, optimize, and secure our database systems that power our automation solutions.",
      responsibilities: [
        "Install, configure, and maintain database systems",
        "Ensure data security, integrity, and availability",
        "Optimize database performance and structure",
        "Implement backup and recovery procedures",
        "Troubleshoot database issues and provide solutions",
        "Collaborate with development teams to improve data access and usage",
      ],
      requirements: [
        "3+ years of experience as a Database Administrator",
        "Strong knowledge of SQL and database management systems (PostgreSQL, MySQL, SQL Server)",
        "Experience with database performance tuning and optimization",
        "Understanding of data security principles and compliance requirements",
        "Familiarity with cloud database services (AWS RDS, Azure SQL, etc.)",
        "Knowledge of backup and recovery procedures",
        "Bachelor's degree in Computer Science or related field (or equivalent experience)",
      ],
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState((prev) => ({ ...prev, resume: e.target.files![0] }))

      // Clear error when user uploads a file
      if (errors.resume) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors.resume
          return newErrors
        })
      }
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formState.position.trim()) {
      newErrors.position = "Position is required"
    }

    if (!formState.resume) {
      newErrors.resume = "Resume is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("name", formState.name)
      formData.append("email", formState.email)
      formData.append("phone", formState.phone || "Not provided")
      formData.append("position", formState.position)
      formData.append("message", formState.message || "Not provided")
      if (formState.resume) {
        formData.append("resume", formState.resume)
      }

      // Send the form data using Formspree
      const response = await fetch("https://formspree.io/f/mpwpybwg", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        resume: null,
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors({ form: "There was an error sending your application. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectJob = (jobId: string) => {
    setSelectedJob(jobId)
    setFormState((prev) => ({
      ...prev,
      position: jobPositions.find((job) => job.id === jobId)?.title || "",
    }))

    // Scroll to application form
    setTimeout(() => {
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-gray-300 text-lg mb-8">
              We're looking for talented individuals who are passionate about automation, innovation, and making a
              difference. Explore our open positions and become part of our growing team.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
              >
                View Open Positions
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role for your skills and career goals.
            </p>
            <div className="h-1 w-20 bg-cyan-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-slate-700 p-3 rounded-lg">{job.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-gray-400 text-sm">{job.department}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-slate-700 text-cyan-400 text-xs px-2 py-1 rounded-full">{job.type}</span>
                    <span className="bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded-full">{job.location}</span>
                  </div>

                  <p className="text-gray-300 text-sm mb-6">{job.description}</p>

                  <Button onClick={() => selectJob(job.id)} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-16 md:py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Job Details</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Learn more about our open positions and what we're looking for in candidates.
            </p>
            <div className="h-1 w-20 bg-cyan-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {jobPositions.map((job) => (
                <AccordionItem key={job.id} value={job.id} className="border-slate-700">
                  <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-700 p-2 rounded-lg">{job.icon}</div>
                      <div>
                        <h3 className="font-bold">{job.title}</h3>
                        <p className="text-gray-400 text-sm">{job.department}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <div className="space-y-4 pt-2">
                      <p>{job.description}</p>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.requirements.map((item, i) => (
                            <li key={i} className="text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <Button onClick={() => selectJob(job.id)} className="bg-cyan-500 hover:bg-cyan-600 text-white">
                          Apply for this Position
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Apply Now</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Submit your application for one of our open positions. We look forward to learning more about you.
            </p>
            <div className="h-1 w-20 bg-cyan-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-6 md:p-8 shadow-lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 border border-green-700 rounded-lg p-6 flex flex-col items-center gap-4 text-center"
                >
                  <div className="bg-green-700/30 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Application Submitted!</h3>
                  <p className="text-green-300">
                    Thank you for your interest in joining our team. We've received your application and will review it
                    shortly. We'll be in touch if your qualifications match our needs.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
                  {errors.form && (
                    <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-red-300 text-sm">
                      {errors.form}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`bg-slate-700 border-slate-600 text-white mt-1 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`bg-slate-700 border-slate-600 text-white mt-1 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="bg-slate-700 border-slate-600 text-white mt-1"
                        placeholder="+639XXXXXXXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="position" className="text-white">
                        Position <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="position"
                        name="position"
                        value={formState.position}
                        onChange={handleChange}
                        className={`w-full bg-slate-700 border-slate-600 text-white rounded-md mt-1 p-2 ${
                          errors.position ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Select a position</option>
                        {jobPositions.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                      {errors.position && <p className="mt-1 text-xs text-red-500">{errors.position}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">
                      Cover Letter / Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className="bg-slate-700 border-slate-600 text-white min-h-[120px] mt-1"
                      placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume" className="text-white">
                      Resume / CV <span className="text-red-500">*</span>
                    </Label>
                    <div
                      className={`mt-1 border-2 border-dashed rounded-lg p-6 text-center ${
                        errors.resume ? "border-red-500" : "border-slate-600"
                      }`}
                    >
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className="cursor-pointer flex flex-col items-center justify-center text-gray-400"
                      >
                        <Briefcase className="h-10 w-10 mb-2" />
                        <span className="text-sm">
                          {formState.resume ? formState.resume.name : "Click to upload your resume (PDF, DOC, DOCX)"}
                        </span>
                        <span className="text-xs mt-1">Max file size: 5MB</span>
                      </label>
                    </div>
                    {errors.resume && <p className="mt-1 text-xs text-red-500">{errors.resume}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FooterWithPolicies />
      <ChatWidget />
    </div>
  )
}
