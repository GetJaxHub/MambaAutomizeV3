"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import PolicyModal from "./policy-modal"
import { scrollToSection } from "@/utils/scroll-utils"

export default function FooterWithPolicies() {
  const currentYear = new Date().getFullYear()
  const [activePolicy, setActivePolicy] = useState<string | null>(null)
  const router = useRouter()

  const openPolicy = (policy: string) => {
    setActivePolicy(policy)
  }

  const closePolicy = () => {
    setActivePolicy(null)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    if (href.startsWith("/#")) {
      const section = href.substring(2)
      // Check if we're already on the homepage
      if (window.location.pathname === "/") {
        scrollToSection(section)
      } else {
        // Navigate to homepage and then scroll to section
        router.push(`/${href}`)
      }
    } else {
      router.push(href)
    }
  }

  // Define policy content
  const privacyPolicyContent = (
    <>
      <h2 className="text-lg font-semibold text-white mb-2">Privacy Policy</h2>
      <p>Last updated: May 5, 2025</p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">1. Introduction</h3>
      <p>
        Mamba Automize ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">2. Information We Collect</h3>
      <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          Personal Data: Personally identifiable information, such as your name, email address, telephone number, and
          other similar contact data.
        </li>
        <li>Usage Data: Information about how you use our website and services.</li>
        <li>Cookies Data: We use cookies to enhance your experience on our website.</li>
      </ul>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">3. How We Use Your Information</h3>
      <p>We may use the information we collect about you to:</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Provide, operate, and maintain our website and services</li>
        <li>Improve, personalize, and expand our website and services</li>
        <li>Understand and analyze how you use our website and services</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you about our services, updates, and other information</li>
      </ul>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">4. Contact Us</h3>
      <p>
        If you have questions or concerns about this Privacy Policy, please contact us at Jakyz.Mamba@MambaAutomize.com.
      </p>
    </>
  )

  const termsOfServiceContent = (
    <>
      <h2 className="text-lg font-semibold text-white mb-2">Terms of Service</h2>
      <p>Last updated: May 5, 2025</p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">1. Agreement to Terms</h3>
      <p>
        By accessing or using Mamba Automize's website and services, you agree to be bound by these Terms of Service and
        all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using
        or accessing this site.
      </p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">2. Use License</h3>
      <p>
        Permission is granted to temporarily access the materials on Mamba Automize's website for personal,
        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
      </p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">3. Disclaimer</h3>
      <p>
        The materials on Mamba Automize's website are provided on an 'as is' basis. Mamba Automize makes no warranties,
        expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
        implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
        intellectual property or other violation of rights.
      </p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">4. Limitations</h3>
      <p>
        In no event shall Mamba Automize or its suppliers be liable for any damages (including, without limitation,
        damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
        the materials on Mamba Automize's website, even if Mamba Automize or a Mamba Automize authorized representative
        has been notified orally or in writing of the possibility of such damage.
      </p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">5. Contact Us</h3>
      <p>If you have any questions about these Terms, please contact us at Jakyz.Mamba@MambaAutomize.com.</p>
    </>
  )

  const cookiePolicyContent = (
    <>
      <h2 className="text-lg font-semibold text-white mb-2">Cookie Policy</h2>
      <p>Last updated: May 5, 2025</p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">1. What Are Cookies</h3>
      <p>
        Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in
        your web browser and allows the website or a third-party to recognize you and make your next visit easier and
        the website more useful to you.
      </p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">2. How We Use Cookies</h3>
      <p>We use cookies for the following purposes:</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>To enable certain functions of the website</li>
        <li>To provide analytics</li>
        <li>To store your preferences</li>
        <li>To enable advertisements delivery, including behavioral advertising</li>
      </ul>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">3. Types of Cookies We Use</h3>
      <p>We use both session and persistent cookies on our website:</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Essential cookies: These are cookies that are required for the operation of our website.</li>
        <li>
          Analytical/performance cookies: These allow us to recognize and count the number of visitors and to see how
          visitors move around our website when they are using it.
        </li>
        <li>Functionality cookies: These are used to recognize you when you return to our website.</li>
        <li>
          Targeting cookies: These cookies record your visit to our website, the pages you have visited and the links
          you have followed.
        </li>
      </ul>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">4. Your Choices Regarding Cookies</h3>
      <p>
        If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help
        pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might
        not be able to use all of the features we offer.
      </p>

      <h3 className="text-md font-semibold text-white mt-4 mb-2">5. Contact Us</h3>
      <p>If you have any questions about our Cookie Policy, please contact us at Jakyz.Mamba@MambaAutomize.com.</p>
    </>
  )

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl md:text-2xl font-bold text-white">
              Mamba Automize
            </Link>
            <p className="mt-3 md:mt-4 text-gray-400 text-sm md:text-base">
              Supercharging businesses with smart automation, process optimization, and cutting-edge digital solutions.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, "/")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={(e) => handleNavClick(e, "/#about")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "/#services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  onClick={(e) => handleNavClick(e, "/careers")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Services</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "/#services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  Business Process Automation
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "/#services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  Data Analytics & Insights
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "/#services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "/#services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  Database Management
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "/#services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  Chatbot & Virtual Assistants
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Legal</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <button
                  onClick={() => openPolicy("privacy")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy("terms")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy("cookie")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base text-left"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm">© {currentYear} Mamba Automize. All rights reserved.</p>
          <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
            <Link
              href="https://www.facebook.com/MambaAutomize"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="mailto:Jakyz.Mamba@MambaAutomize.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <span className="sr-only">Email</span>
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Policy Modals */}
      <PolicyModal
        title="Privacy Policy"
        content={privacyPolicyContent}
        isOpen={activePolicy === "privacy"}
        onClose={closePolicy}
      />

      <PolicyModal
        title="Terms of Service"
        content={termsOfServiceContent}
        isOpen={activePolicy === "terms"}
        onClose={closePolicy}
      />

      <PolicyModal
        title="Cookie Policy"
        content={cookiePolicyContent}
        isOpen={activePolicy === "cookie"}
        onClose={closePolicy}
      />
    </footer>
  )
}
