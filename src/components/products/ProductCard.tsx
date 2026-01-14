"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Eye, Heart, ShoppingCart, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ProductCardProps {
  id: string | number
  title: string
  category: string
  price: string
  image: string
  isNew?: boolean
  className?: string
}

export function ProductCard({ id, title, category, price, image, isNew, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const handleAction = (e: React.MouseEvent, action: string) => {
    e.preventDefault()
    e.stopPropagation()
    
    const toast = document.createElement("div")
    toast.innerText = action
    toast.className = "fixed bottom-8 right-8 bg-foreground text-background px-6 py-3 rounded-lg shadow-2xl z-50 animate-in slide-in-from-bottom-5 font-bold"
    document.body.appendChild(toast)
    setTimeout(() => toast.remove(), 2000)
  }

  return (
    <>
      <Link href={`/products/${id}`} className="group h-full block">
        <Card 
            className={cn(
                "h-full overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg flex flex-col relative", 
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            {/* Badges */}
            {isNew && (
                <div className="absolute top-3 left-3 z-20">
                    <Badge className="bg-primary hover:bg-primary/90 rounded-lg shadow-md">New</Badge>
                </div>
            )}
            
            {/* Image */}
            <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url(${image})` }} 
            />

            {/* Actions Overlay */}
            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center gap-3 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                 <Button 
                    size="icon" 
                    variant="secondary" 
                    className="rounded-lg h-10 w-10 shadow-lg hover:scale-110 transition-transform"
                    onClick={(e) => handleAction(e, "Added to Wishlist")}
                 >
                    <Heart className="h-5 w-5" />
                 </Button>
                 <Button 
                    size="icon" 
                    variant="secondary" 
                    className="rounded-lg h-10 w-10 shadow-lg hover:scale-110 transition-transform"
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setShowPreview(true)
                    }}
                 >
                    <Eye className="h-5 w-5" />
                 </Button>
            </div>

            {/* Quick Add (Mobile/Desktop) */}
            <div className="absolute bottom-4 inset-x-4 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300 z-20">
                <Button 
                    className="w-full rounded-lg font-bold shadow-lg" 
                    onClick={(e) => handleAction(e, "Added to Cart")}
                >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
            </div>
          </div>
          
          <CardContent className="p-4 flex flex-col gap-1 flex-grow bg-card z-10">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{category}</div>
            <h3 className="font-bold text-base line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
            
            <div className="flex text-yellow-400 gap-0.5 mt-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
            </div>

            <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="font-extrabold text-lg text-primary">{price}</span>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden gap-0 rounded-lg">
                <div className="grid md:grid-cols-2">
                    <div className="aspect-square md:aspect-auto relative bg-muted h-[300px] md:h-full">
                         <div 
                            className="w-full h-full bg-cover bg-center" 
                            style={{ backgroundImage: `url(${image})` }} 
                        />
                    </div>
                    <div className="p-8 flex flex-col h-full">
                        <DialogHeader>
                            <Badge className="w-fit mb-2 rounded-lg">{category}</Badge>
                            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                            <DialogDescription className="text-base mt-2">
                                Experience premium quality with this {category.toLowerCase()} item. 
                                Perfect for modern setups and professional environments.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="mt-auto pt-8 space-y-4">
                            <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold text-primary">{price}</span>
                                <span className="text-sm text-muted-foreground mb-1 line-through opacity-60">KES 3,500</span>
                            </div>

                            <div className="flex gap-3">
                                <Button className="flex-1 h-12 rounded-lg font-bold text-base" onClick={(e) => {
                                    setShowPreview(false)
                                    handleAction(e as any, "Added to Cart")
                                }}>
                                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                                </Button>
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-lg shrink-0" onClick={(e) => handleAction(e as any, "Added to Wishlist")}>
                                    <Heart className="h-5 w-5" />
                                </Button>
                            </div>
                            
                            <Link href={`/products/${id}`} onClick={() => setShowPreview(false)} className="block text-center text-sm font-medium text-muted-foreground hover:text-primary hover:underline">
                                View Full Details
                            </Link>
                        </div>
                    </div>
                </div>
            </DialogContent>
      </Dialog>
    </>
  )
}
