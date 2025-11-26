"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const filters = ["All", "#Drilling", "#LabWork", "#CoreSamples", "#TeamBuilding"]

const galleryImages = [
  {
    id: 1,
    src: "/oil-drilling-rig-industrial-equipment-dark.jpg",
    caption: "Active drilling operations on the North Sea platform",
    tags: ["#Drilling"],
  },
  {
    id: 2,
    src: "/laboratory-scientists-microscope-research-dark.jpg",
    caption: "HPHT lab analysis of subsurface core samples",
    tags: ["#LabWork"],
  },
  {
    id: 3,
    src: "/geological-core-sample-rock-layers-dark.jpg",
    caption: "Stratified core sample from 3,000m depth",
    tags: ["#CoreSamples"],
  },
  {
    id: 4,
    src: "/engineering-students-hard-hats-industrial-dark.jpg",
    caption: "Research team at the CCUS facility",
    tags: ["#TeamBuilding"],
  },
  {
    id: 5,
    src: "/pressure-testing-equipment-laboratory-dark.jpg",
    caption: "High-pressure testing equipment in action",
    tags: ["#LabWork"],
  },
  {
    id: 6,
    src: "/sedimentary-rock-core-sample-geology-dark.jpg",
    caption: "Permian-era sedimentary core sample",
    tags: ["#CoreSamples"],
  },
  {
    id: 7,
    src: "/offshore-platform-helicopter-ocean-dark.jpg",
    caption: "Helicopter arrival at offshore platform",
    tags: ["#Drilling"],
  },
  {
    id: 8,
    src: "/research-team-group-photo-industrial-dark.jpg",
    caption: "2024 expedition team photo",
    tags: ["#TeamBuilding"],
  },
  {
    id: 9,
    src: "/drilling-mud-laboratory-analysis-dark.jpg",
    caption: "Drilling fluid analysis in the field lab",
    tags: ["#LabWork", "#Drilling"],
  },
]

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const filteredImages =
    activeFilter === "All" ? galleryImages : galleryImages.filter((img) => img.tags.includes(activeFilter))

  const handleFilterChange = (filter: string) => {
    setIsAnimating(true)
    setTimeout(() => {
      setActiveFilter(filter)
      setIsAnimating(false)
    }, 150)
  }

  return (
    <section className="py-24 px-4 bg-background">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="text-[#FFC107] text-sm font-semibold tracking-widest uppercase mb-4 block">
          Visual Archive
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Expedition Gallery</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Explore moments captured from our field expeditions and laboratory research.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => handleFilterChange(filter)}
              className={cn(
                "transition-all duration-300",
                activeFilter === filter
                  ? "bg-[#BB0000] hover:bg-[#990000] text-white border-[#BB0000]"
                  : "border-border hover:border-[#FFC107] hover:text-[#FFC107]",
              )}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-150",
            isAnimating && "opacity-0",
          )}
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-foreground text-sm font-medium line-clamp-2">{image.caption}</p>
              </div>
              {/* Tag indicator */}
              <div className="absolute top-3 right-3 flex gap-1">
                {image.tags.map((tag) => (
                  <span key={tag} className="w-2 h-2 rounded-full bg-[#FFC107]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-[#FFC107] transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />
            <p className="text-center text-foreground mt-4 text-lg">{selectedImage.caption}</p>
            <div className="flex justify-center gap-2 mt-2">
              {selectedImage.tags.map((tag) => (
                <span key={tag} className="text-sm text-[#FFC107]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
