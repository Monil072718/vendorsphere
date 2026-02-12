import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, DollarSign, TrendingUp, Users, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Vendors",
      value: "248",
      change: "+12.3%",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Contracts",
      value: "186",
      change: "+8.1%",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Total Spend",
      value: "$2.4M",
      change: "+15.2%",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Savings",
      value: "$184K",
      change: "+24.5%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const recentVendors = [
    { name: "Acme Corp", status: "Active", spend: "$125,400", rating: 4.8 },
    { name: "TechFlow Solutions", status: "Active", spend: "$98,200", rating: 4.6 },
    { name: "Global Logistics Ltd", status: "Pending", spend: "$76,900", rating: 4.2 },
    { name: "DataSync Inc", status: "Active", spend: "$54,300", rating: 4.9 },
    { name: "CloudNet Services", status: "Active", spend: "$43,100", rating: 4.5 },
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-1">Welcome back! Here's what's happening with your vendors.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Vendor
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
              <div className={`${stat.bgColor} ${stat.color} p-2 rounded-lg`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Vendors Table */}
      <Card className="border-slate-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-900">Recent Vendors</CardTitle>
              <CardDescription>Manage and track your vendor relationships</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search vendors..." className="pl-9 w-64" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="pb-3 text-sm font-semibold text-slate-600">Vendor Name</th>
                  <th className="pb-3 text-sm font-semibold text-slate-600">Status</th>
                  <th className="pb-3 text-sm font-semibold text-slate-600">Total Spend</th>
                  <th className="pb-3 text-sm font-semibold text-slate-600">Rating</th>
                  <th className="pb-3 text-sm font-semibold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentVendors.map((vendor, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="font-medium text-slate-900">{vendor.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge
                        variant={vendor.status === "Active" ? "default" : "secondary"}
                        className={vendor.status === "Active" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"}
                      >
                        {vendor.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-slate-900 font-medium">{vendor.spend}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <span className="text-yellow-500">★</span>
                        {vendor.rating}
                      </div>
                    </td>
                    <td className="py-4">
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
