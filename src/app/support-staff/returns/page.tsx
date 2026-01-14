"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MoreHorizontal, RefreshCcw } from "lucide-react"

const returns = [
    { id: "RET-001", order: "ORD-9840", customer: "Robert Brown", item: "Solar Inverter 5kVA", reason: "Defective Unit", status: "Pending Approval", date: "Jan 11, 2024" },
    { id: "RET-002", order: "ORD-9721", customer: "Sarah Smith", item: "10x LED Downlights", reason: "Wrong Color Temperature", status: "Approved", date: "Jan 10, 2024" },
]

export default function ReturnsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Returns & Refunds</h1>
            <p className="text-muted-foreground mt-1 text-sm">Process RMA requests and product returns.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="destructive" className="gap-2">
                <RefreshCcw className="h-4 w-4" /> Process Return
            </Button>
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Return ID</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[1, 2, 3].map((i) => (
                    <TableRow key={i}>
                        <TableCell className="font-medium">RET-{202400 + i}</TableCell>
                        <TableCell>ORD-{9920 + i}</TableCell>
                        <TableCell>Alice Johnson</TableCell>
                        <TableCell>Solar Inverter 5kVA</TableCell>
                        <TableCell className="text-muted-foreground">Defective product</TableCell>
                        <TableCell>
                            <Badge variant="outline">Pending Review</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                                 <Button size="sm" variant="outline" className="h-8 border-green-200 text-green-600 hover:bg-green-50 hover:text-green-700">
                                     Approve
                                 </Button>
                                 <Button size="sm" variant="ghost" className="h-8 text-red-500 hover:bg-red-50 hover:text-red-600">
                                     Reject
                                 </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </div>
    </div>
  )
}
