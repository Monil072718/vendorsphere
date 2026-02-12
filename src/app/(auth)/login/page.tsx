"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Layout, ArrowRight, Mail, Lock } from "lucide-react"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const registered = searchParams.get("registered")
  
  const [formData, setFormData] = useState({
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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Login failed")
      }

      // successful login - the cookie is set by the server
      router.push("/dashboard")
      router.refresh() // Refresh router to update server components/middleware state
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
            Welcome back to the complete vendor management platform
          </h1>
          <p className="text-blue-100 text-lg">
            Streamline your operations, track performance, and optimize your supply chain—all in one place.
          </p>
        </div>

        <div className="space-y-4 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Enterprise-grade security</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Real-time insights and analytics</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
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
            <h2 className="text-3xl font-bold text-slate-900">Sign in to your account</h2>
            <p className="text-slate-600">
              Enter your credentials to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {registered && (
              <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200 flex items-center gap-2">
                <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Registration successful! Please sign in.
              </div>
            )}
            
            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <div className="space-y-4">
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
              {loading ? "Signing in..." : "Sign in"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>

            <div className="text-center text-sm text-slate-600">
              Don't have an account?{" "}
              <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-700">
                Sign up for free
              </Link>
            </div>
          </form>

          <div className="pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
            Protected by enterprise-grade security
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-slate-600">Loading...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
