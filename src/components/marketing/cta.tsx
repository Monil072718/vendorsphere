import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="cta" className="border-y bg-slate-50">
      <div className="container mx-auto max-w-4xl flex flex-col items-center gap-6 py-20 text-center md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl leading-tight sm:text-4xl md:text-5xl font-bold text-slate-900">
          Ready to transform your vendor management?
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
          Join thousands of companies using VendorSphere to streamline operations and drive growth.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link href="/register">
            <Button size="lg" className="text-base h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg" className="text-base h-12 px-8 border-slate-300 text-slate-700 hover:bg-white">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
