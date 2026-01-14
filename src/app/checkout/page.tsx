"use client"

import { MainLayout } from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

// Simple Label Component Mock in-file to avoid dependency blocks if shadcn failed
function SimpleLabel({ children, className, ...props }: any) {
    return <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>{children}</label>
}

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CheckoutPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleCheckout = (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
          setLoading(false)
          router.push("/orders")
      }, 2000)
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        <form onSubmit={handleCheckout} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
                {/* Shipping Info */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Shipping Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <SimpleLabel>First Name</SimpleLabel>
                                <Input placeholder="John" required />
                            </div>
                            <div className="space-y-2">
                                <SimpleLabel>Last Name</SimpleLabel>
                                <Input placeholder="Doe" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <SimpleLabel>Phone Number (M-Pesa)</SimpleLabel>
                            <Input placeholder="07XX XXX XXX" required type="tel" />
                        </div>
                        <div className="space-y-2">
                            <SimpleLabel>Address / Location</SimpleLabel>
                            <Input placeholder="Apartment, Street, City" required />
                        </div>
                    </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                     <CardHeader>
                        <CardTitle className="text-base">Payment Method</CardTitle>
                    </CardHeader>
                     <CardContent>
                         <div className="grid grid-cols-1 gap-4">
                             <div className="flex items-center space-x-2 border p-4 rounded-lg bg-primary/10 border-primary cursor-pointer relative">
                                 <div className="h-4 w-4 rounded-full border border-primary bg-primary flex items-center justify-center">
                                     <div className="h-2 w-2 rounded-full bg-white" />
                                 </div>
                                 <div className="flex-1">
                                     <p className="font-medium">M-Pesa Express</p>
                                     <p className="text-xs text-muted-foreground">Prompt will be sent to your phone</p>
                                 </div>
                                 <CheckCircle2 className="h-5 w-5 text-primary" />
                             </div>
                             <div className="flex items-center space-x-2 border p-4 rounded-lg opacity-50 cursor-not-allowed">
                                 <div className="h-4 w-4 rounded-full border border-muted" />
                                 <div className="flex-1">
                                     <p className="font-medium">Card Payment</p>
                                     <p className="text-xs text-muted-foreground">Coming soon</p>
                                 </div>
                             </div>
                         </div>
                     </CardContent>
                </Card>
            </div>

            {/* Order Review */}
            <div>
                 <Card className="sticky top-24 bg-card/50 backdrop-blur">
                    <CardHeader>
                        <CardTitle>Order Review</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex justify-between items-center text-sm">
                             <span>Smart WiFi Switch 2-Gang x 2</span>
                             <span className="font-medium">KES 5,000</span>
                         </div>
                         <div className="flex justify-between items-center text-sm">
                             <span>LED Panel Light 12W x 4</span>
                             <span className="font-medium">KES 3,400</span>
                         </div>
                         
                         <div className="border-t pt-4 mt-4 space-y-2">
                             <div className="flex justify-between font-bold text-lg">
                                 <span>Total</span>
                                 <span className="text-primary">KES 8,400</span>
                             </div>
                         </div>

                         <Button className="w-full mt-6 rounded-lg font-bold" size="lg" type="submit" disabled={loading}>
                             {loading ? "Processing..." : "Pay Now (KES 8,400)"}
                         </Button>
                         
                         <p className="text-xs text-center text-muted-foreground mt-4">
                             By placing this order, you agree to our Terms of Service.
                         </p>
                    </CardContent>
                 </Card>
            </div>
        </form>
      </div>
    </MainLayout>
  )
}
