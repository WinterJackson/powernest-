"use client"

import { MainLayout } from "@/components/layout/MainLayout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import {
    Box,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Clock,
    CreditCard,
    Package,
    Truck
} from "lucide-react"
import { useState } from "react"

// Extended Mock Data with Steps
const orders = [
    {
        id: "ORD-9921",
        date: "Today, 10:30 AM",
        total: "KES 52,000",
        status: "Processing",
        items: ["Solar Inverter 5kVA", "2x Solar Battery 200Ah"],
        paymentStatus: "Paid",
        trackingStep: 2, // 0: Placed, 1: Confirmed, 2: Processing, 3: Shipped, 4: Delivered
    },
    {
        id: "ORD-9884",
        date: "Yesterday, 4:15 PM",
        total: "KES 2,500",
        status: "Pending Payment",
        items: ["Smart WiFi Switch 2-Gang"],
        paymentStatus: "Unpaid",
        trackingStep: 0,
    },
    {
        id: "ORD-9840",
        date: "Jan 10, 2024",
        total: "KES 15,400",
        status: "Delivered",
        items: ["10x LED Downlights", "Smart Hub"],
        paymentStatus: "Paid",
        trackingStep: 4,
    },
]

const steps = [
    { label: "Order Placed", icon: Box },
    { label: "Confirmed", icon: CheckCircle2 },
    { label: "Processing", icon: Clock },
    { label: "Shipped", icon: Truck },
    { label: "Delivered", icon: Package },
]

export default function ClientOrdersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  const filteredOrders = activeTab === "all" 
    ? orders 
    : orders.filter(o => o.status.toLowerCase().includes(activeTab.replace("-", " ")))

  const toggleExpand = (id: string) => {
      setExpandedOrder(expandedOrder === id ? null : id)
  }

  return (
    <MainLayout>
      <div className="w-full space-y-8 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">My Orders</h1>
                <p className="text-muted-foreground mt-1 text-sm">Track your shipments and view order history.</p>
            </div>
             <div className="flex gap-2 bg-muted/30 p-1 rounded-lg">
                {["all", "processing", "delivered", "unpaid"].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "px-4 py-2 rounded-md text-xs font-bold capitalize transition-all",
                            activeTab === tab 
                                ? "bg-white text-primary shadow-sm" 
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        <div className="space-y-4">
            <AnimatePresence mode="popLayout">
                {filteredOrders.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed rounded-xl"
                    >
                        <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-4">
                            <Box className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="font-bold text-lg">No orders found</h3>
                        <p className="text-muted-foreground max-w-sm mt-2">
                            We couldn't find any orders with this status. Check the "All" tab or browse products.
                        </p>
                        <Button className="mt-6 rounded-lg font-bold" variant="outline">Browse Products</Button>
                    </motion.div>
                ) : (
                    filteredOrders.map((order, i) => (
                        <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Card className={cn(
                                "border-none shadow-sm transition-all duration-300",
                                expandedOrder === order.id ? "ring-2 ring-primary/10 shadow-lg" : "hover:shadow-md"
                            )}>
                                <CardContent className="p-0">
                                    <div 
                                        className="p-6 cursor-pointer flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                                        onClick={() => toggleExpand(order.id)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={cn(
                                                "h-12 w-12 rounded-lg flex items-center justify-center border",
                                                order.status === "Delivered" ? "bg-green-50 border-green-200 text-green-600" :
                                                order.status === "Pending Payment" ? "bg-orange-50 border-orange-200 text-orange-600" :
                                                "bg-blue-50 border-blue-200 text-blue-600"
                                            )}>
                                                {order.status === "Delivered" ? <CheckCircle2 className="h-6 w-6" /> :
                                                 order.status === "Pending Payment" ? <CreditCard className="h-6 w-6" /> :
                                                 <Package className="h-6 w-6" />}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="font-bold text-lg">{order.id}</h3>
                                                    {order.paymentStatus === "Unpaid" && (
                                                        <Badge variant="destructive" className="rounded-md px-1.5 py-0 text-[10px] font-bold">Unpaid</Badge>
                                                    )}
                                                </div>
                                                <p className="text-sm text-muted-foreground">{order.items[0]} {order.items.length > 1 && `+ ${order.items.length - 1} more`}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                            <div className="text-right">
                                                <p className="font-black text-lg">{order.total}</p>
                                                <p className="text-xs text-muted-foreground">{order.date}</p>
                                            </div>
                                            <Button variant="ghost" size="icon" className="rounded-full">
                                                {expandedOrder === order.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    <AnimatePresence>
                                        {expandedOrder === order.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <Separator />
                                                <div className="p-6 bg-muted/10 space-y-8">
                                                    {/* Tracking Stepper */}
                                                    <div className="relative">
                                                        <div className="absolute top-5 left-0 w-full h-1 bg-muted rounded-full overflow-hidden">
                                                            <div 
                                                                className="h-full bg-primary transition-all duration-1000 ease-out"
                                                                style={{ width: `${(order.trackingStep / (steps.length - 1)) * 100}%` }}
                                                            />
                                                        </div>
                                                        <div className="relative flex justify-between">
                                                            {steps.map((step, idx) => {
                                                                const isCompleted = idx <= order.trackingStep
                                                                const isCurrent = idx === order.trackingStep
                                                                const Icon = step.icon
                                                                
                                                                return (
                                                                    <div key={idx} className="flex flex-col items-center gap-2 group">
                                                                        <div className={cn(
                                                                            "h-10 w-10 rounded-full flex items-center justify-center z-10 border-4 transition-all duration-500",
                                                                            isCompleted ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-background border-muted text-muted-foreground"
                                                                        )}>
                                                                            <Icon className="h-4 w-4" />
                                                                        </div>
                                                                        <span className={cn(
                                                                            "text-[10px] font-bold uppercase tracking-wider transition-colors",
                                                                            isCurrent ? "text-primary" : "text-muted-foreground"
                                                                        )}>{step.label}</span>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                                                        <div className="text-sm text-muted-foreground">
                                                            Expected Delivery: <span className="font-bold text-foreground">Tomorrow, by 6pm</span>
                                                        </div>
                                                        <div className="flex gap-3 w-full sm:w-auto">
                                                            <Button variant="outline" className="flex-1 sm:flex-none rounded-lg font-bold border-muted">
                                                                View Invoice
                                                            </Button>
                                                            {order.paymentStatus === "Unpaid" ? (
                                                                 <Button className="flex-1 sm:flex-none rounded-lg font-bold shadow-lg shadow-primary/20 animate-pulse">
                                                                    Pay via M-Pesa
                                                                 </Button>
                                                            ) : (
                                                                <Button className="flex-1 sm:flex-none rounded-lg font-bold">
                                                                    Track Full Details
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))
                )}
            </AnimatePresence>
        </div>
      </div>
    </MainLayout>
  )
}
