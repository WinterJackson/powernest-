"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Filter, MoreHorizontal, Pencil, Plus, Search, Trash, Upload } from "lucide-react"

const products = [
    { id: "P001", name: "Smart WiFi Switch 2-Gang", category: "Switches", price: "2,500", stock: 120, status: "Active" },
    { id: "P002", name: "LED Panel Light 12W", category: "Lighting", price: "850", stock: 450, status: "Active" },
    { id: "P003", name: "Solar Inverter 5kVA", category: "Solar", price: "45,000", stock: 5, status: "Low Stock" },
    { id: "P004", name: "Heavy Duty Extension Reel", category: "Accessories", price: "3,200", stock: 0, status: "Out of Stock" },
]

export default function AdminProductsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
          <div>
              <h1 className="text-2xl font-bold tracking-tight">Products</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage your product catalog and inventory.</p>
          </div>

          <Sheet>
              <SheetTrigger asChild>
                  <Button className="gap-2">
                      <Plus className="h-4 w-4" /> Add Product
                  </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto w-[400px] sm:w-[540px]">
                  <SheetHeader>
                      <SheetTitle>Add New Product</SheetTitle>
                      <SheetDescription>
                          Create a new product listing. Click save when you're done.
                      </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-6 py-4">
                      <div className="flex flex-col gap-2">
                           <Label htmlFor="image" className="font-bold">Product Image</Label>
                           <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center gap-2 hover:bg-muted/50 transition-colors cursor-pointer text-muted-foreground hover:text-primary border-muted-foreground/20 hover:border-primary/50">
                               <div className="p-3 bg-muted rounded-full">
                                   <Upload className="h-6 w-6" />
                               </div>
                               <span className="text-xs font-medium">Drag & drop or click to upload</span>
                           </div>
                      </div>
                      <div className="grid gap-2">
                          <Label htmlFor="name">Product Name</Label>
                          <Input id="name" placeholder="e.g. Solar Inverter 5kVA" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                              <Label htmlFor="category">Category</Label>
                              <Input id="category" placeholder="Select category" />
                          </div>
                          <div className="grid gap-2">
                              <Label htmlFor="price">Price (KES)</Label>
                              <Input id="price" type="number" placeholder="0.00" />
                          </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                              <Label htmlFor="stock">Initial Stock</Label>
                              <Input id="stock" type="number" placeholder="0" />
                          </div>
                          <div className="grid gap-2">
                              <Label htmlFor="sku">SKU Code</Label>
                              <Input id="sku" placeholder="Auto-generated" disabled />
                          </div>
                      </div>
                      <div className="grid gap-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea id="description" placeholder="Product details..." rows={4} />
                      </div>
                  </div>
                  <SheetFooter>
                      <Button type="submit" className="w-full">Create Product</Button>
                  </SheetFooter>
              </SheetContent>
          </Sheet>
      </div>

      <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
               <div className="flex items-center gap-2">
                   <div className="relative w-64">
                       <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                       <Input placeholder="Search products..." className="pl-8" />
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
                              <th className="p-4">Product Name</th>
                              <th className="p-4">Category</th>
                              <th className="p-4">Price (KES)</th>
                              <th className="p-4">Stock</th>
                              <th className="p-4">Status</th>
                              <th className="p-4 text-right">Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {products.map((product) => (
                              <tr key={product.id} className="border-t hover:bg-muted/40 transition-colors">
                                  <td className="p-4 font-medium">{product.name}</td>
                                  <td className="p-4">{product.category}</td>
                                  <td className="p-4">{product.price}</td>
                                  <td className="p-4">{product.stock}</td>
                                  <td className="p-4">
                                      <Badge variant={product.status === "Active" ? "default" : product.status === "Out of Stock" ? "destructive" : "secondary"}>
                                          {product.status}
                                      </Badge>
                                  </td>
                                  <td className="p-4 text-right">
                                      <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                              <Button variant="ghost" size="icon">
                                                  <MoreHorizontal className="h-4 w-4" />
                                              </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                              <DropdownMenuItem><Pencil className="mr-2 h-4 w-4" /> Edit</DropdownMenuItem>
                                              <DropdownMenuSeparator />
                                              <DropdownMenuItem className="text-red-600"><Trash className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                                          </DropdownMenuContent>
                                      </DropdownMenu>
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
