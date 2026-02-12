import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h1>
        <p className="text-muted-foreground mt-4">Choose the plan that works for you.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Basic Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>For individuals starting out.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$0<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Feature 1</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Feature 2</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Feature 3</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>
        {/* Pro Plan */}
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For professionals and teams.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> All Basic Features</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Advanced Analytics</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Priority Support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="default">Upgrade to Pro</Button>
          </CardFooter>
        </Card>
        {/* Enterprise Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For large organizations.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">Custom</div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> All Pro Features</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Dedicated Support</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> SSC Integration</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
