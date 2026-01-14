"use client"

import { MainLayout } from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock Cart items
const initialItems = [
    { id: 1, title: "Smart WiFi Switch 2-Gang", price: 2500, quantity: 2, image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070" },
    { id: 2, title: "LED Panel Light 12W", price: 850, quantity: 4, image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2070" },
]

export default function CartPage() {
  const [items, setItems] = useState(initialItems)

  const updateQty = (id: number, delta: number) => {
      setItems(items.map(item => {
          if (item.id === id) {
              return { ...item, quantity: Math.max(1, item.quantity + delta) }
          }
          return item
      }))
  }

  const removeItem = (id: number) => {
      setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const vat = subtotal * 0.16
  const total = subtotal + vat

  return (
    <MainLayout>
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
                {items.length === 0 ? (
                    <div className="text-center py-12 bg-card rounded-xl border">
                        <p className="text-muted-foreground mb-4">Your cart is empty.</p>
                        <Link href="/">
                            <Button>Continue Shopping</Button>
                        </Link>
                    </div>
                ) : (
                    items.map(item => (
                        <Card key={item.id} className="border shadow-sm">
                            <CardContent className="p-4 flex gap-4 items-center">
                                <Link href={`/products/${item.id}`} className="h-20 w-20 bg-muted rounded-md overflow-hidden flex-shrink-0 hover:opacity-80 transition-opacity">
                                     <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                                </Link>
                                <div className="flex-1">
                                    <Link href={`/products/${item.id}`}>
                                        <h3 className="font-medium truncate hover:text-primary transition-colors hover:underline">{item.title}</h3>
                                    </Link>
                                    <p className="text-sm text-muted-foreground">KES {item.price.toLocaleString()}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center border rounded-md">
                                        <button className="p-1 hover:bg-muted" onClick={() => updateQty(item.id, -1)}>
                                            <Minus className="h-3 w-3" />
                                        </button>
                                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                                        <button className="p-1 hover:bg-muted" onClick={() => updateQty(item.id, 1)}>
                                            <Plus className="h-3 w-3" />
                                        </button>
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => removeItem(item.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
                <Card className="sticky top-24 border shadow-md bg-card/50 backdrop-blur-xl">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        <div className="space-y-2 text-sm mb-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>KES {subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">VAT (16%)</span>
                                <span>KES {vat.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                                <span>Total</span>
                                <span className="text-primary">KES {total.toLocaleString()}</span>
                            </div>
                        </div>
                        
                        <Link href="/checkout">
                            <Button className="w-full" size="lg">
                                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        
                        <div className="mt-4">
                            <p className="text-xs text-center text-muted-foreground">We accept M-Pesa, Visa, Mastercard</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </MainLayout>
  )
}
