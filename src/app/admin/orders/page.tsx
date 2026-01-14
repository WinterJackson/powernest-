"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, Filter, Search } from "lucide-react"

const orders = [
    { id: "ORD-7829", customer: "John Doe", date: "Jan 12, 2025", total: "KES 5,400", status: "Processing", payment: "M-Pesa" },
    { id: "ORD-7828", customer: "Jane Smith", date: "Jan 11, 2025", total: "KES 1,200", status: "Delivered", payment: "Card" },
    { id: "ORD-7827", customer: "Robert Brown", date: "Jan 11, 2025", total: "KES 23,000", status: "Cancelled", payment: "M-Pesa" },
    { id: "ORD-7826", customer: "Alice Johnson", date: "Jan 10, 2025", total: "KES 12,500", status: "Delivered", payment: "Cash" },
]

export default function AdminOrdersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
          <div>
              <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage customer orders and shipments.</p>
          </div>
          <Button variant="outline">
               Export Orders
          </Button>
      </div>

      <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
               <div className="flex items-center gap-2">
                   <div className="relative w-64">
                       <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                       <Input placeholder="Search orders..." className="pl-8" />
                   </div>
                   <Button variant="outline" size="icon">
                       <Filter className="h-4 w-4" />
                   </Button>
               </div>
          </CardHeader>
          <CardContent>
              <div className="rounded-md border">
                  <table className="w-full text-sm text-left">
                      <thead className="bg-muted/50 text-muted-foreground font-medium">
                          <tr>
                              <th className="p-4">Order ID</th>
                              <th className="p-4">Customer</th>
                              <th className="p-4">Date</th>
                              <th className="p-4">Payment</th>
                              <th className="p-4">Total</th>
                              <th className="p-4">Status</th>
                              <th className="p-4 text-right">Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {orders.map((order) => (
                              <tr key={order.id} className="border-t hover:bg-muted/40 transition-colors">
                                  <td className="p-4 font-medium">{order.id}</td>
                                  <td className="p-4">{order.customer}</td>
                                  <td className="p-4 text-muted-foreground">{order.date}</td>
                                  <td className="p-4">{order.payment}</td>
                                  <td className="p-4 font-medium">{order.total}</td>
                                  <td className="p-4">
                                      <Badge variant={order.status === "Delivered" ? "outline" : order.status === "Cancelled" ? "destructive" : "default"}>
                                          {order.status}
                                      </Badge>
                                  </td>
                                  <td className="p-4 text-right">
                                      <Button variant="ghost" size="sm">
                                          <Eye className="mr-2 h-4 w-4" /> View
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
