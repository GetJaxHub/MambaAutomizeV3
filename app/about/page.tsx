import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
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
                    Experienced leader with a strong background in business analysis, operational excellence, and
                    process optimization. Proven ability to lead teams, drive continuous improvement, and implement
                    data-driven solutions that align with organizational goals. Skilled in translating complex business
                    needs into actionable insights to support strategic decision-making.
                  </p>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300">
                    We, at MambaAutomize, are on a mission to help businesses streamline operations, reduce costs, and
                    improve efficiency through tailored automation and process improvement solutions. Let us help you
                    unlock your business's full potential.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
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

      <Footer />
    </main>
  )
}
