import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white border-b">
      <div className="container mx-auto flex max-w-6xl flex-col items-center gap-8 text-center px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 border border-blue-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Now in Beta - Join Early Access
        </div>
        
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-slate-900 max-w-4xl">
          Streamline Your Vendor Management
        </h1>
        
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          The complete platform to manage vendors, track performance, and optimize your supply chain operations—all in one place.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link href="/register">
            <Button size="lg" className="text-base h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg" className="text-base h-12 px-8 border-slate-300 text-slate-700 hover:bg-slate-50">
              View Pricing
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center gap-6 mt-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>14-day free trial</span>
          </div>
        </div>
      </div>
    </section>
  )
}
