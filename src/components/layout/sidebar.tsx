import Link from "next/link"
import { LayoutDashboard, Building2, FileText, Settings, LogOut, Layout } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: true,
    },
    {
      label: "Vendors",
      icon: Building2,
      href: "/vendors",
      active: false,
    },
    {
      label: "Contracts",
      icon: FileText,
      href: "/contracts",
      active: false,
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      active: false,
    },
  ]

  return (
    <div className={cn("flex flex-col h-full bg-white", className)}>
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-200">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Layout className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-slate-900">VendorSphere</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              route.active
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <route.icon className="h-5 w-5" />
            {route.label}
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-slate-200">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-slate-600 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  )
}
