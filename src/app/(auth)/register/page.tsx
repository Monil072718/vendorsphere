"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Layout, ArrowRight, Mail, Lock, User } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Registration failed")
      }

      // successful registration
      router.push("/login?registered=true")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex flex-col justify-between bg-blue-600 p-12 text-white">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
            <Layout className="h-6 w-6 text-blue-600" />
          </div>
          <span className="font-bold text-xl">VendorSphere</span>
        </Link>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Start managing your vendors like a pro
          </h1>
          <p className="text-blue-100 text-lg">
            Join thousands of companies using VendorSphere to streamline operations and drive growth.
          </p>
          
          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-blue-500 p-1 mt-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Free 14-day trial</h3>
                <p className="text-sm text-blue-100">No credit card required</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-blue-500 p-1 mt-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Quick setup</h3>
                <p className="text-sm text-blue-100">Up and running in minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-blue-500 p-1 mt-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Cancel anytime</h3>
                <p className="text-sm text-blue-100">No long-term commitments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-blue-100">
          Trusted by 10,000+ companies worldwide
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <Link href="/" className="flex lg:hidden items-center justify-center space-x-2 mb-8">
            <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <Layout className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900">VendorSphere</span>
          </Link>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Create your account</h2>
            <p className="text-slate-600">
              Start your free trial today—no credit card required
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700">Full name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="pl-10 h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    className="pl-10 h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Minimum 8 characters"
                    required 
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                    className="pl-10 h-11"
                  />
                </div>
              </div>
            </div>

            <Button 
              className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white" 
              type="submit" 
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>

            <div className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
                Sign in
              </Link>
            </div>
          </form>

          <div className="pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-slate-700">Terms</Link> and{" "}
            <Link href="/privacy" className="underline hover:text-slate-700">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
