"use client"

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
import { cn } from "@/lib/utils"
import { Filter, Mail, MapPin, MoreHorizontal, Phone, Search, User } from "lucide-react"

const customers = [
    { id: "CUST-1001", name: "Alice Johnson", email: "alice@example.com", phone: "+254 712 345 678", location: "Westlands", orders: 12, spent: "KES 450,000", lastActive: "2m ago", status: "Active" },
    { id: "CUST-1002", name: "Robert Brown", email: "robert@test.com", phone: "+254 722 111 222", location: "Karen", orders: 3, spent: "KES 85,000", lastActive: "2d ago", status: "Active" },
    { id: "CUST-1003", name: "Sarah Smith", email: "sarah.smith@demo.com", phone: "+254 733 444 555", location: "Lavington", orders: 1, spent: "KES 15,000", lastActive: "1w ago", status: "Inactive" },
    { id: "CUST-1004", name: "John Doe", email: "john.doe@gmail.com", phone: "+254 700 999 888", location: "Kilimani", orders: 5, spent: "KES 120,000", lastActive: "5h ago", status: "Active" },
]

export default function SupportCustomersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Customer Directory</h1>
            <p className="text-muted-foreground mt-1 text-sm">Search and manage client profiles.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button>
                <User className="mr-2 h-4 w-4" /> Add Customer
            </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by name, email, or phone..." className="pl-10" />
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {customers.map((c) => (
                    <TableRow key={c.id}>
                        <TableCell className="font-medium text-xs text-muted-foreground">{c.id}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs relative">
                                    {c.name.charAt(0)}
                                    <span className={cn("absolute bottom-0 right-0 w-2 h-2 rounded-full border border-background", c.status === "Active" ? "bg-green-500" : "bg-gray-300")} />
                                </div>
                                <span className="font-bold">{c.name}</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex flex-col gap-1 text-sm">
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <Mail className="h-3 w-3" /> {c.email}
                                </div>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <Phone className="h-3 w-3" /> {c.phone}
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-1 text-muted-foreground">
                                <MapPin className="h-3 w-3" /> {c.location}
                            </div>
                        </TableCell>
                        <TableCell>{c.orders}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{c.lastActive}</TableCell>
                        <TableCell className="text-right">
                             <Button variant="ghost" size="icon">
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
