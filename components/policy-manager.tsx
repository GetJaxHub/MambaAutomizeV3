"use client"

import { useState } from "react"
import PolicyModal from "./policy-modal"

type PolicyType = "privacy" | "terms" | "cookie"

export default function PolicyManager() {
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null)

  const openPolicy = (type: PolicyType) => {
    setActivePolicy(type)
  }

  const closePolicy = () => {
    setActivePolicy(null)
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
    <>
      {/* Policy trigger links - these would be placed in your footer or elsewhere */}
      <div className="hidden">
        <button onClick={() => openPolicy("privacy")}>Privacy Policy</button>
        <button onClick={() => openPolicy("terms")}>Terms of Service</button>
        <button onClick={() => openPolicy("cookie")}>Cookie Policy</button>
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
    </>
  )
}
