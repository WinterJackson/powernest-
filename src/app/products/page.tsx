"use client"

import { MainLayout } from "@/components/layout/MainLayout"
import { ProductCard } from "@/components/products/ProductCard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpDown, Filter, X } from "lucide-react"
import { useState } from "react"

// Mock Products
const allProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: i % 2 === 0 ? "Smart WiFi Switch 2-Gang" : "Solar Inverter 5kVA",
    category: i % 2 === 0 ? "Switches" : "Inverters",
    price: i % 2 === 0 ? "KES 2,500" : "KES 45,000",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070",
    isNew: i < 3
}))

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const toggleCategory = (cat: string) => {
      setSelectedCategories(prev => 
          prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
      )
  }

  const filteredProducts = allProducts.filter(p => {
      const price = parseInt(p.price.replace("KES ", "").replace(",", ""))
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1]
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category)
      return matchesPrice && matchesCategory
  })

  return (
    <MainLayout>
      <div className="flex flex-col gap-6 w-full relative min-h-screen pb-20">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-background/50 backdrop-blur-sm p-6 rounded-lg border shadow-sm relative z-20">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Shop All Products</h1>
                <p className="text-sm text-muted-foreground">Showing 12 of 145 items</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                 {/* Search Bar Removed as per request */}
                 
                 <div className="flex gap-2 w-full sm:w-auto">
                     <Button 
                        variant={showFilters ? "secondary" : "outline"} 
                        className="gap-2 rounded-lg flex-1 sm:flex-none border-muted font-bold"
                        onClick={() => setShowFilters(!showFilters)}
                     >
                         <Filter className="h-4 w-4" /> {showFilters ? "Hide Filters" : "Filters"}
                     </Button>

                     <Button variant="outline" className="gap-2 rounded-lg flex-1 sm:flex-none border-muted font-bold">
                         <ArrowUpDown className="h-4 w-4" /> Sort
                     </Button>
                 </div>
            </div>
        </div>

        {/* Floating Filters Card */}
        <AnimatePresence>
            {showFilters && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="z-10 w-full"
                >
                    <Card className="rounded-lg border shadow-xl bg-background/95 backdrop-blur-md">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-lg">Filter Products</h3>
                                <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)} className="h-8 w-8 rounded-full">
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {/* Categories */}
                                <div className="space-y-3">
                                    <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Categories</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                                        {["Switches", "Inverters", "Solar Energy", "Accessories"].map(cat => (
                                            <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedCategories.includes(cat)}
                                                    onChange={() => toggleCategory(cat)}
                                                    className="rounded border-muted text-primary focus:ring-primary/20 accent-primary" 
                                                />
                                                {cat}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div className="space-y-4 md:col-span-2">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Price Range</h4>
                                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">KES {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()}</span>
                                    </div>
                                    <Slider 
                                        defaultValue={[0, 100000]} 
                                        max={100000} 
                                        step={1000} 
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        className="py-4"
                                    />
                                    <div className="flex gap-4">
                                        <div className="flex-1 space-y-1">
                                            <span className="text-[10px] text-muted-foreground uppercase">Min</span>
                                            <Input 
                                                type="number" 
                                                value={priceRange[0]} 
                                                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                                                className="h-9 rounded-lg bg-muted/50" 
                                            />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <span className="text-[10px] text-muted-foreground uppercase">Max</span>
                                            <Input 
                                                type="number" 
                                                value={priceRange[1]} 
                                                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                                className="h-9 rounded-lg bg-muted/50" 
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Brands & Actions */}
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Brands</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Tronic", "PowerNest", "Victron", "SMA", "Luminous"].map(brand => (
                                                <Badge key={brand} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors px-3 py-1 rounded-lg">
                                                    {brand}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <Button variant="outline" className="flex-1 rounded-lg font-bold">Reset</Button>
                                        <Button className="flex-1 rounded-lg font-bold shadow-lg shadow-primary/20">Apply</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8 min-h-[400px]">
            {filteredProducts.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center text-muted-foreground py-20">
                    <p className="text-lg font-medium">No products found matching your filters.</p>
                    <Button variant="link" onClick={() => {
                        setSelectedCategories([])
                        setPriceRange([0, 100000])
                    }}>Clear Filters</Button>
                </div>
            ) : (
                filteredProducts.map((p) => (
                    <ProductCard 
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        category={p.category}
                        price={p.price}
                        image={p.image}
                        isNew={p.isNew}
                    />
                ))
            )}
        </div>

        {/* Load More */}
        <div className="flex justify-center py-12">
            <Button variant="ghost" size="lg" className="rounded-full px-8 border border-muted hover:bg-muted font-semibold tracking-wide">
                Load More Products
            </Button>
        </div>
      </div>
    </MainLayout>
  )
}
