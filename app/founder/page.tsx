import Image from "next/image"
import Navbar from "@/components/navbar"

export default function FounderPage() {
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
                    className="object\
