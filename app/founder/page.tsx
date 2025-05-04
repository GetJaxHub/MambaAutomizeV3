import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import FooterWithPolicies from "@/components/footer-with-policies"
import ChatWidget from "@/components/chat-widget"

export default function FounderPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              {/* Phone frame with founder image */}
              <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px]">
                {/* Phone outline */}
                <div className="absolute inset-0 rounded-[40px] border-[12px] border-white bg-transparent shadow-xl"></div>

                {/* Notch */}
                <div className="absolute top-[12px] left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[14px] z-10"></div>

                {/* Founder image */}
                <div className="absolute inset-[12px] overflow-hidden rounded-[28px] bg-slate-900">
                  <Image
                    src="https://sjc.microlink.io/6o3ds-S1uhTZqTbUpqruRyRCLJVUbutIMokUGMGsArZk0kZtRQqb3ExZ1mrsvGQjedhF23Yhm8XkBds3jDUnoA.jpeg"
                    alt="Jakyz Mamba - Founder & CEO"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Hi, I'm Jakyz Mamba</h1>
                <p className="text-2xl text-cyan-400 font-medium">Founder / CEO</p>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    As the founder of Mamba Automize, I bring over 15 years of experience in business process
                    optimization and automation. My journey began in enterprise software development, where I witnessed
                    firsthand how the right technology solutions could transform business operations.
                  </p>
                  <p className="text-gray-300 mt-4">
                    I founded Mamba Automize with a clear vision: to make cutting-edge automation accessible to
                    businesses of all sizes. Our team combines technical expertise with business acumen to deliver
                    solutions that drive real results.
                  </p>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">My Philosophy</h2>
                  <p className="text-gray-300">
                    I believe that technology should serve people, not the other way around. Every automation solution
                    we develop is designed with the end user in mind, ensuring that it enhances human capabilities
                    rather than replacing them. This human-centered approach is at the core of everything we do at Mamba
                    Automize.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <Link href="/#services">
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">Our Services</Button>
                  </Link>
                  <Link href="/#contact">
                    <Button
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 px-8 py-6 text-lg"
                    >
                      Let's Connect
                    </Button>
                  </Link>
                </div>

                <div className="flex gap-4 pt-6">
                  <Link
                    href="https://www.facebook.com/MambaAutomize"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent hover:bg-slate-800 p-3 rounded-full border border-slate-700 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-cyan-400" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="http://linkedin.com/company/mambaautomize"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent hover:bg-slate-800 p-3 rounded-full border border-slate-700 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-cyan-400" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:Jakyz.Mamba@MambaAutomize.com"
                    className="bg-transparent hover:bg-slate-800 p-3 rounded-full border border-slate-700 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-cyan-400" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">My Journey</h2>
            <div className="space-y-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-12 h-12 flex items-center justify-center">
                    2023
                  </div>
                  <h3 className="text-xl font-bold text-white">Founded Mamba Automize</h3>
                </div>
                <p className="text-gray-300">
                  Launched Mamba Automize with a mission to transform how businesses operate through intelligent
                  automation and process optimization.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-12 h-12 flex items-center justify-center">
                    2018
                  </div>
                  <h3 className="text-xl font-bold text-white">Head of Digital Transformation</h3>
                </div>
                <p className="text-gray-300">
                  Led digital transformation initiatives for a Fortune 500 company, resulting in 40% operational cost
                  reduction and improved customer satisfaction scores.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-12 h-12 flex items-center justify-center">
                    2012
                  </div>
                  <h3 className="text-xl font-bold text-white">Senior Solutions Architect</h3>
                </div>
                <p className="text-gray-300">
                  Designed and implemented enterprise-level automation solutions for clients across finance, healthcare,
                  and manufacturing sectors.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-12 h-12 flex items-center justify-center">
                    2008
                  </div>
                  <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                </div>
                <p className="text-gray-300">
                  Started career as a software engineer specializing in business process management systems and workflow
                  automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterWithPolicies />
      <ChatWidget />
    </div>
  )
}
