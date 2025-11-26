import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { GallerySection } from "@/components/gallery-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <CTASection />
    </main>
  )
}
