"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { scrollToSection } from "@/utils/scroll-utils"
import PolicyModal from "@/components/policy-modal"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [activePolicy, setActivePolicy] = useState<"privacy" | "terms" | "cookies" | null>(null)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    if (href.startsWith("/#")) {
      scrollToSection(href.substring(1))
    } else {
      window.location.href = href
    }
  }

  const privacyPolicyContent = (
    <>
      <h3 className="text-lg font-semibold text-white mb-2">Privacy Policy</h3>
      <p>Last updated: {currentYear}-05-05</p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">1. Information We Collect</h4>
      <p>
        We collect information you provide directly to us when you fill out a form, subscribe to our newsletter, or
        contact us. This information may include your name, email address, phone number, company name, and any other
        information you choose to provide.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">2. How We Use Your Information</h4>
      <p>
        We use the information we collect to provide, maintain, and improve our services, to communicate with you, to
        respond to your comments, questions, and requests, and to provide customer service.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">3. Sharing of Information</h4>
      <p>
        We do not share, sell, or otherwise disclose your personal information for purposes other than those outlined in
        this Privacy Policy. We may disclose your information to our service providers who perform functions on our
        behalf.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">4. Data Security</h4>
      <p>
        We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized
        access, disclosure, alteration, and destruction.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">5. Your Rights</h4>
      <p>
        You have the right to access, correct, or delete your personal information. You may also have the right to
        object to or restrict certain processing of your data or to withdraw your consent.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">6. Contact Us</h4>
      <p>If you have any questions about this Privacy Policy, please contact us at Jakyz.Mamba@MambaAutomize.com.</p>
    </>
  )

  const termsOfServiceContent = (
    <>
      <h3 className="text-lg font-semibold text-white mb-2">Terms of Service</h3>
      <p>Last updated: {currentYear}-05-05</p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">1. Acceptance of Terms</h4>
      <p>
        By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to these
        Terms, you may not access or use our website.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">2. Use of Services</h4>
      <p>
        You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use
        our services in any way that could damage, disable, overburden, or impair our servers or networks.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">3. Intellectual Property</h4>
      <p>
        All content, features, and functionality on our website, including but not limited to text, graphics, logos,
        icons, images, and software, are owned by Mamba Automize and are protected by copyright, trademark, and other
        intellectual property laws.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">4. Limitation of Liability</h4>
      <p>
        In no event shall Mamba Automize be liable for any indirect, incidental, special, consequential, or punitive
        damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">5. Governing Law</h4>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the Philippines, without regard to
        its conflict of law provisions.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">6. Changes to Terms</h4>
      <p>
        We reserve the right to modify or replace these Terms at any time. It is your responsibility to check these
        Terms periodically for changes.
      </p>
    </>
  )

  const cookiePolicyContent = (
    <>
      <h3 className="text-lg font-semibold text-white mb-2">Cookie Policy</h3>
      <p>Last updated: {currentYear}-05-05</p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">1. What Are Cookies</h4>
      <p>
        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They
        are widely used to make websites work more efficiently and provide information to the website owners.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">2. How We Use Cookies</h4>
      <p>
        We use cookies to understand how you use our website and to improve your experience. This includes personalizing
        content, providing social media features, and analyzing our traffic.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">3. Types of Cookies We Use</h4>
      <p>
        <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
        <br />
        <strong>Preference Cookies:</strong> These cookies remember your preferences and settings.
        <br />
        <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website.
        <br />
        <strong>Marketing Cookies:</strong> These cookies track your online activity to help advertisers deliver more
        relevant advertising.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">4. How to Control Cookies</h4>
      <p>
        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer
        and you can set most browsers to prevent them from being placed. However, if you do this, you may have to
        manually adjust some preferences every time you visit a site.
      </p>

      <h4 className="text-md font-semibold text-white mt-4 mb-2">5. More Information</h4>
      <p>For more information about cookies and how to manage them, visit www.allaboutcookies.org.</p>
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
                <Link
                  href="/founder"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base"
                >
                  Founder
                </Link>
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
                  onClick={() => setActivePolicy("privacy")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("terms")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("cookies")}
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
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-4.048-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772 4.902 4.902 0 0 1 1.772-1.153c.636-.247 1.363-.416 2.427-.465C9.528 2.013 9.867 2 12.235 2h.08z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
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
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-4.048-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772 4.902 4.902 0 0 1 1.772-1.153c.636-.247 1.363-.416 2.427-.465C9.528 2.013 9.867 2 12.235 2h.08z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <PolicyModal
        activePolicy={activePolicy}
        setActivePolicy={setActivePolicy}
        privacyPolicyContent={privacyPolicyContent}
        termsOfServiceContent={termsOfServiceContent}
        cookiePolicyContent={cookiePolicyContent}
      />
    </footer>
  )
}
