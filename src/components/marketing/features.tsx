import { Globe, Shield, Zap, Users, BarChart3, Lock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Globe,
      title: "Global Operations",
      description: "Manage vendors across multiple regions with multi-currency and multi-language support."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC2, GDPR, and industry standards."
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Get instant visibility into vendor performance with advanced analytics dashboards."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Streamline communication with built-in messaging and approval workflows."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor KPIs, SLAs, and vendor scorecards to optimize your supply chain."
    },
    {
      icon: Lock,
      title: "Contract Management",
      description: "Store, track, and manage all vendor contracts in a secure, centralized location."
    }
  ]

  return (
    <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 border border-blue-100">
            Platform Features
          </div>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl md:text-5xl font-bold text-slate-900">
            Everything you need to succeed
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Powerful features designed to help you manage vendors efficiently and scale your operations.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-50 p-3 text-blue-600 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
