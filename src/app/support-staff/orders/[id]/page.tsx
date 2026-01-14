"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle2, CreditCard, Package, Truck, User } from "lucide-react"
import Link from "next/link"

export default function SupportOrderDetailsPage({ params }: { params: { id: string } }) {
  // Mock Order Data
  const order = {
      id: params.id,
      status: "Processing",
      total: "KES 52,000",
      date: "Jan 12, 2024",
      customer: {
          name: "John Doe",
          email: "john@example.com",
          phone: "+254 712 345 678",
          address: "123 Solar St, Westlands, Nairobi"
      },
      items: [
          { name: "Solar Inverter 5kVA", qty: 1, price: "KES 42,000" },
          { name: "Solar Battery 200Ah", qty: 2, price: "KES 5,000" }
      ],
      payment: {
          method: "M-Pesa Express",
          status: "Paid",
          ref: "QWE123ASD"
      }
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
        <Link href="/support-staff/orders">
            <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Orders
            </Button>
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 border-b pb-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Order {order.id}</h1>
                <p className="text-muted-foreground mt-1">Placed on {order.date}</p>
            </div>
            <div className="flex gap-2">
                 <Button variant="outline">Download Invoice</Button>
                 <Button>Mark as Shipped</Button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Package className="h-5 w-5" /> Order Items
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {order.items.map((item, i) => (
                                <div key={i} className="flex justify-between items-center pb-4 border-b last:border-0 last:pb-0">
                                    <div className="flex items-center gap-4">
                                        <div className="h-16 w-16 bg-muted rounded-lg" />
                                        <div>
                                            <p className="font-bold">{item.name}</p>
                                            <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                                        </div>
                                    </div>
                                    <p className="font-bold">{item.price}</p>
                                </div>
                            ))}
                            <div className="flex justify-between pt-4 font-bold text-lg">
                                <span>Total</span>
                                <span>{order.total}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Truck className="h-5 w-5" /> Delivery Info
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row justify-between gap-4 p-4 bg-muted/20 rounded-lg">
                            <div className="space-y-1">
                                <span className="text-xs font-bold uppercase text-muted-foreground">Address</span>
                                <p className="font-medium">{order.customer.address}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-bold uppercase text-muted-foreground">Status</span>
                                <Badge>{order.status}</Badge>
                            </div>
                        </div>
                        <div className="mt-6">
                            {/* Stepper Mock */}
                            <div className="relative flex justify-between">
                                {["Placed", "Confirmed", "Processing", "Shipped", "Delivered"].map((step, i) => (
                                    <div key={step} className="flex flex-col items-center gap-2 z-10">
                                        <div className={`h-4 w-4 rounded-full border-2 ${i <= 2 ? "bg-primary border-primary" : "bg-background border-muted"}`} />
                                        <span className="text-[10px] uppercase font-bold text-muted-foreground">{step}</span>
                                    </div>
                                ))}
                                <div className="absolute top-2 left-0 w-full h-0.5 bg-muted -z-0" />
                                <div className="absolute top-2 left-0 w-[50%] h-0.5 bg-primary -z-0" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" /> Customer Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">JD</div>
                            <div>
                                <p className="font-bold text-sm">{order.customer.name}</p>
                                <p className="text-xs text-muted-foreground">New Customer</p>
                            </div>
                        </div>
                        <Separator />
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Email</span>
                                <span className="font-medium truncate max-w-[150px]">{order.customer.email}</span>
                            </div>
                             <div className="flex justify-between">
                                <span className="text-muted-foreground">Phone</span>
                                <span className="font-medium">{order.customer.phone}</span>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full">View Customer Profile</Button>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" /> Payment
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-green-50 text-green-700 rounded-lg border border-green-100">
                             <span className="font-bold text-sm flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Paid</span>
                             <span className="text-xs font-mono">{order.payment.ref}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Via {order.payment.method}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}
