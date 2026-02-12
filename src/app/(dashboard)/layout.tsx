import { Sidebar } from "@/components/layout/sidebar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
        <Sidebar className="h-full" />
      </div>
      <div className="flex-1 flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
            <span className="font-semibold">VendorSphere</span>
          </header>
        <main className="flex-1 p-6 lg:p-8">
            {children}
        </main>
      </div>
    </div>
  )
}
