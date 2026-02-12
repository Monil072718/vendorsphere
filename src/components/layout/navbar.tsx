"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Layout } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  
  const routes = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Layout className="h-5 w-5 text-white" />
          </div>
          <span className="hidden font-bold text-lg sm:inline-block text-slate-900">
            VendorSphere
          </span>
        </Link>
        <div className="mr-4 hidden md:flex">
          <nav className="flex items-center gap-8 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`transition-colors hover:text-blue-600 ${
                  pathname === route.href ? "text-blue-600 font-semibold" : "text-slate-600"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-3">
          <nav className="flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                Sign In
              </Button>
            </Link>
             <Link href="/register">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </Link>
          </nav>
           {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-4">
                 {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-slate-600 transition-colors hover:text-blue-600 font-medium"
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/login"><Button variant="outline" className="w-full">Sign In</Button></Link>
                  <Link href="/register"><Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button></Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
