import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import FooterWithPolicies from "@/components/footer-with-policies"
import Navbar from "@/components/navbar"
import ChatWidget from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <FooterWithPolicies />
      <ChatWidget />
    </main>
  )
}
