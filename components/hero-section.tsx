"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/oil-rig-drilling-platform-workers-industrial-dark.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1A1A1A]/70 to-[#1A1A1A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative element */}
        <div className="flex justify-center mb-6">
          <div className="h-1 w-24 bg-[#BB0000] rounded-full" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
          Subsurface Exploration: <span className="text-[#FFC107]">The Field & Lab Journal</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty">
          From the Core to the Rig: Real-World Experience in Energy and Sustainability.
        </p>

        <Button
          size="lg"
          className="bg-[#BB0000] hover:bg-[#990000] text-white px-8 py-6 text-lg font-semibold group transition-all duration-300"
          onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
        >
          View Latest Expedition
          <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#FFC107] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
