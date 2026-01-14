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
import { cn } from "@/lib/utils"
import { AlertTriangle, Box, Check, Filter, Search } from "lucide-react"

const inventory = [
    { id: "INV-001", name: "Solar Panel 450W Monocrystalline", category: "Solar Panels", stock: 120, location: "Warehouse A", status: "In Stock" },
    { id: "INV-002", name: "Hybrid Inverter 5kVA", category: "Inverters", stock: 5, location: "Warehouse B", status: "Low Stock" },
    { id: "INV-003", name: "Lithium Battery 200Ah", category: "Batteries", stock: 0, location: "Warehouse A", status: "Out of Stock" },
    { id: "INV-004", name: "Smart WiFi Switch", category: "Components", stock: 500, location: "Shelf C2", status: "In Stock" },
    { id: "INV-005", name: "Mounting Rail (2m)", category: "Installation", stock: 200, location: "Yard", status: "In Stock" },
]

export default function SupportInventoryPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Inventory Lookup</h1>
            <p className="text-muted-foreground mt-1 text-sm">Check stock availability for replacement parts and sales.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter Category
            </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search SKU or Product Name..." className="pl-10" />
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">SKU</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Stock Level</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {inventory.map((item) => (
                    <TableRow key={item.id} className={cn(
                        item.status === "Low Stock" ? "bg-orange-50/50 hover:bg-orange-50" : 
                        item.status === "Out of Stock" ? "bg-red-50/50 hover:bg-red-50" : ""
                    )}>
                        <TableCell className="font-mono text-xs text-muted-foreground">{item.id}</TableCell>
                        <TableCell className="font-medium">
                            {item.name}
                            {item.status === "Low Stock" && <span className="ml-2 text-[10px] text-orange-600 font-bold uppercase animate-pulse">Low Stock</span>}
                        </TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell className="text-muted-foreground">{item.location}</TableCell>
                        <TableCell className="font-bold">{item.stock}</TableCell>
                        <TableCell>
                            <Badge variant={item.status === "In Stock" ? "default" : item.status === "Low Stock" ? "secondary" : "destructive"} className="gap-1 pointer-events-none">
                                {item.status === "In Stock" && <Check className="h-3 w-3" />}
                                {item.status === "Low Stock" && <AlertTriangle className="h-3 w-3 text-orange-600" />}
                                {item.status === "Out of Stock" && <Box className="h-3 w-3" />}
                                {item.status}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </div>
    </div>
  )
}
