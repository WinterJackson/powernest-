"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"; // Assuming cn utility is available
import { Download, Filter, MoreHorizontal, Search } from "lucide-react"

const orders = [
    { id: "ORD-9921", customer: "Alice Johnson", total: "KES 52,000", status: "Processing", paymentStatus: "Paid", items: 3, risk: "Low", date: "Today" },
    { id: "ORD-9884", customer: "Robert Brown", total: "KES 2,500", status: "Pending", paymentStatus: "Unpaid", items: 1, risk: "Low", date: "Yesterday" },
    { id: "ORD-9840", customer: "Unknown User", total: "KES 150,400", status: "Flagged", paymentStatus: "Paid", items: 12, risk: "High", date: "Jan 10, 2024" },
    { id: "ORD-9721", customer: "John Doe", total: "KES 15,000", status: "Delivered", paymentStatus: "Paid", items: 2, risk: "Medium", date: "Jan 08, 2024" },
]

export default function SupportOrdersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Order Audit</h1>
            <p className="text-muted-foreground mt-1 text-sm">Review, verify, and process customer orders.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter Risk
            </Button>
            <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Export
            </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search orders..." className="pl-10" />
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Risk Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium text-xs text-muted-foreground">{order.id}</TableCell>
                        <TableCell className="font-medium">{order.customer}</TableCell>
                        <TableCell className="font-bold">{order.total}</TableCell>
                        <TableCell>
                             <Badge variant={order.paymentStatus === "Paid" ? "outline" : "destructive"} className="gap-1">
                                {order.paymentStatus}
                             </Badge>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <div className={cn(
                                    "h-2 w-full max-w-[60px] rounded-full overflow-hidden bg-muted",
                                )}>
                                    <div className={cn(
                                        "h-full",
                                        order.risk === "Low" ? "w-[20%] bg-green-500" :
                                        order.risk === "Medium" ? "w-[50%] bg-orange-500" :
                                        "w-[90%] bg-red-500"
                                    )} />
                                </div>
                                <span className="text-xs font-medium">{order.risk}</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant={order.status === "Flagged" ? "destructive" : "secondary"}>
                                {order.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                             <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                             </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </div>
    </div>
  )
}
