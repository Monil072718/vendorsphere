import { Sidebar } from "@/components/layout/sidebar"
import { Metadata } from "next"
import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dashboard - VendorSphere",
  description: "Manage your vendors and track performance.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="hidden border-r border-slate-200 bg-white md:block md:w-64 lg:w-72">
        <Sidebar className="h-full" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-slate-900">Vendor Management</h2>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-slate-600" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-slate-600" />
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
