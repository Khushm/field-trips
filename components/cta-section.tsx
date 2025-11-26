import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-background to-[#1E1E1E]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-[#BB0000]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BB0000]/20 mb-8">
          <Mail className="w-8 h-8 text-[#BB0000]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to Explore the <span className="text-[#FFC107]">Subsurface</span>?
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Join our next expedition and gain hands-on experience in energy research, drilling operations, and sustainable
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#BB0000] hover:bg-[#990000] text-white px-8 py-6 text-lg font-semibold group transition-all duration-300"
            asChild
          >
            <a href="mailto:advisor@osu.edu">
              Contact Faculty Advisor
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10 px-8 py-6 text-lg font-semibold bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Footer note */}
        <p className="mt-16 text-sm text-muted-foreground">
          © 2025 Ohio State University — Subsurface Energy Research Program
        </p>
      </div>
    </section>
  )
}
