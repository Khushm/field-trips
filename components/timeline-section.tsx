"use client"

import { HardHat, Microscope, Atom, Flame } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const timelineEvents = [
  {
    year: "2025",
    title: "Offshore Rig Visit",
    description:
      "Hands-on experience with drilling operations, safety protocols, and real-time data monitoring on an active offshore platform.",
    icon: HardHat,
    focus: "Safety and Drilling Operations",
    tag: "Field Work",
  },
  {
    year: "2024",
    title: "HPHT Research Lab",
    description:
      "Advanced laboratory work analyzing core samples under high-pressure, high-temperature conditions to simulate subsurface environments.",
    icon: Microscope,
    focus: "Lab Work & HPHT Systems",
    tag: "Research",
  },
  {
    year: "2023",
    title: "CCUS Storage Site",
    description:
      "Field study at a carbon capture, utilization, and storage facility, examining sustainable energy solutions and CO₂ sequestration methods.",
    icon: Atom,
    focus: "Carbon Storage & Sustainable Energy",
    tag: "Sustainability",
  },
  {
    year: "2022",
    title: "Geothermal Exploration",
    description:
      "Exploration of geothermal energy extraction techniques and subsurface thermal mapping for renewable energy applications.",
    icon: Flame,
    focus: "Renewable Energy Systems",
    tag: "Energy",
  },
]

export function TimelineSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="timeline"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1A1A 0%, #1E2530 50%, #1A2840 100%)",
      }}
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-[#FFC107] text-sm font-semibold tracking-widest uppercase mb-4 block">
          Expedition Timeline
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Drilling Through History</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Follow our journey through geological layers of discovery, from cutting-edge research to hands-on field
          experience.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Drill Pipe Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-3 bg-gradient-to-b from-[#4A4A4A] via-[#3A3A3A] to-[#2A2A2A] rounded-full shadow-[inset_-2px_0_4px_rgba(0,0,0,0.5),inset_2px_0_4px_rgba(255,255,255,0.1)]">
          {/* Pipe texture lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-4 border-b border-white/10" style={{ marginTop: `${i * 40}px` }} />
            ))}
          </div>
        </div>

        {/* Timeline Events */}
        <div className="relative space-y-16 md:space-y-24">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            const isEven = index % 2 === 0
            const isHovered = hoveredIndex === index

            return (
              <div
                key={event.year}
                className={cn("relative flex items-center gap-8", isEven ? "md:flex-row" : "md:flex-row-reverse")}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Content Card */}
                <div
                  className={cn(
                    "flex-1 md:w-1/2",
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left",
                    "text-left pl-20 md:pl-0",
                  )}
                >
                  <div
                    className={cn(
                      "bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300",
                      isHovered && "border-[#FFC107]/50 shadow-lg shadow-[#FFC107]/10 scale-[1.02]",
                    )}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#BB0000]/20 text-[#BB0000] rounded-full mb-3">
                      {event.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-3 text-pretty">{event.description}</p>
                    <p className="text-sm font-medium text-[#FFC107]">Focus: {event.focus}</p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center z-10">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-4",
                      isHovered
                        ? "bg-[#FFC107] border-[#FFC107] shadow-[0_0_20px_rgba(255,193,7,0.5)]"
                        : "bg-card border-border",
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-6 h-6 transition-colors duration-300",
                        isHovered ? "text-[#1A1A1A]" : "text-[#FFC107]",
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "mt-2 text-lg font-bold transition-colors duration-300",
                      isHovered ? "text-[#FFC107]" : "text-muted-foreground",
                    )}
                  >
                    {event.year}
                  </span>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </div>
            )
          })}
        </div>

        {/* Drill bit at bottom */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-8 h-8">
          <div className="w-full h-full bg-gradient-to-b from-[#4A4A4A] to-[#2A2A2A] rotate-45 transform origin-center" />
        </div>
      </div>
    </section>
  )
}
