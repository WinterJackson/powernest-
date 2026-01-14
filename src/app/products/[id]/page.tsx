"use client"

import { MainLayout } from "@/components/layout/MainLayout"
import { ProductCard } from "@/components/products/ProductCard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    ArrowRightLeft,
    Check,
    Heart,
    MessageCircle,
    Minus,
    Plus,
    RefreshCw,
    Shield,
    ShoppingCart,
    Star,
    Truck
} from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"

// Mock Product Data
const product = {
  id: "1",
  title: "Smart WiFi Touch Switch 2-Gang",
  price: "KES 2,500",
  oldPrice: "KES 3,000",
  sku: "TR-WIFI-002",
  stock: "In Stock",
  description: "Control your lights from anywhere with the Tronic Smart WiFi Touch Switch. Compatible with Google Home and Alexa, this tempered glass switch adds a modern touch to your home while offering energy efficiency and convenience. Perfect for modern smart homes requiring aesthetic and functionality.",
  features: [
    "Tempered Glass Panel - Scratch Resistant",
    "Voice Control (Alexa/Google Assistant)",
    "Timer & Schedule Function via App",
    "No Hub Required - Direct WiFi",
    "Overload Protection & Fire Retardant"
  ],
  specs: [
      { label: "Voltage", value: "110-240V AC" },
      { label: "Max Load", value: "800W / Gang" },
      { label: "Wireless Freq", value: "2.4GHz 802.11 b/g/n" },
      { label: "Material", value: "Tempered Glass + PC V0" },
      { label: "Dimensions", value: "86mm x 86mm x 35mm" },
      { label: "App Support", value: "Smart Life / Tuya Smart" },
  ],
  images: [
    "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070",
    "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070", 
    "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070"
  ],
  reviews: [
      { user: "James M.", rating: 5, date: "2 days ago", text: "Excellent quality finish. Pairing was instant." },
      { user: "Sarah K.", rating: 4, date: "1 week ago", text: "Works great, but the blue LED is slightly bright at night." },
      { user: "David O.", rating: 5, date: "2 weeks ago", text: "Best value for money smart switch in Nairobi." }
  ]
}

export default function ProductDetailsPage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  return (
    <MainLayout>
      <div className="flex flex-col gap-8 w-full pb-20">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-muted-foreground flex gap-2">
            <span>Home</span> | <span>Switches</span> | <span className="text-foreground font-semibold">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Gallery Section - col-span-5 */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative aspect-square bg-white rounded-lg overflow-hidden border shadow-sm">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110 cursor-zoom-in" 
                        style={{ backgroundImage: `url(${product.images[selectedImage]})` }} 
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-primary hover:bg-primary/90 text-xs py-0.5 shadow-lg w-fit">Best Seller</Badge>
                        <Badge variant="outline" className="bg-background/80 backdrop-blur text-xs py-0.5 w-fit border-border">-15% OFF</Badge>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {product.images.map((img, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-primary ring-2 ring-primary/20 bg-muted' : 'border-transparent hover:border-muted-foreground/30 opacity-70 hover:opacity-100'}`}
                        >
                             <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Info Section - col-span-4 */}
            <div className="lg:col-span-4 flex flex-col gap-6">
                 <div>
                     <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-foreground">{product.title}</h1>
                     <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                         <span className="font-mono bg-muted px-2 py-1 rounded">SKU: {product.sku}</span>
                         <span className="flex items-center gap-1 text-green-600 font-bold bg-green-50 px-2 py-1 rounded uppercase tracking-wider"><Check className="h-3 w-3" /> {product.stock}</span>
                     </div>
                     <div className="flex items-center gap-2 mb-4 cursor-pointer hover:underline decoration-muted-foreground/30 underline-offset-4 w-fit">
                         <div className="flex text-yellow-400">
                             {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                         </div>
                         <span className="text-sm font-medium text-foreground">4.8</span>
                         <span className="text-xs text-muted-foreground">(120 verified reviews)</span>
                     </div>
                     <div className="flex items-end gap-3 pb-6 border-b">
                         <span className="text-3xl font-bold text-primary">{product.price}</span>
                         <span className="text-lg text-muted-foreground line-through decoration-destructive/40 decoration-2">{product.oldPrice}</span>
                     </div>
                 </div>

                 <p className="text-sm text-muted-foreground leading-relaxed">
                     {product.description}
                 </p>

                 {/* Key Features List */}
                 <div className="space-y-2">
                     {product.features.slice(0, 3).map((feat, idx) => (
                         <div key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                             <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 shrink-0">
                                 <Check className="h-3 w-3" />
                             </div>
                             <span>{feat}</span>
                         </div>
                     ))}
                 </div>

                 {/* Sticky Actions Card - Mobile/Medium Screen Position */}
                 <div className="block lg:hidden mt-6">
                    <div className="p-6 rounded-lg border bg-background border-primary/10 shadow-lg space-y-6">
                        <div className="flex items-center justify-between border rounded-lg bg-background p-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-bold w-8 text-center">{quantity}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md" onClick={() => setQuantity(quantity + 1)}>
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="space-y-3">
                            <Button size="lg" className="w-full rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                                onClick={() => {
                                    // Mock Add to Cart
                                    const toast = document.createElement("div");
                                    toast.innerText = "Added to Cart";
                                    toast.className = "fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-in slide-in-from-bottom-5";
                                    document.body.appendChild(toast);
                                    setTimeout(() => toast.remove(), 2000);
                                }}
                            >
                                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                            </Button>
                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" className="rounded-lg font-semibold hover:bg-muted text-xs"
                                    onClick={() => {
                                        // Mock Wishlist
                                        const toast = document.createElement("div");
                                        toast.innerText = "Added to Wishlist";
                                        toast.className = "fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-in slide-in-from-bottom-5";
                                        document.body.appendChild(toast);
                                        setTimeout(() => toast.remove(), 2000);
                                    }}
                                >
                                    <Heart className="mr-2 h-3.5 w-3.5" /> Wishlist
                                </Button>
                                <Button variant="outline" className="rounded-lg font-semibold hover:bg-muted text-xs">
                                    <ArrowRightLeft className="mr-2 h-3.5 w-3.5" /> Compare
                                </Button>
                            </div>
                        </div>

                        <Separator />

                        <div className="grid gap-3 text-xs text-muted-foreground font-medium">
                            <div className="flex items-center gap-3">
                                <Truck className="h-4 w-4" />
                                <span>Free delivery in Nairobi CBD</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shield className="h-4 w-4" />
                                <span>1 Year Official Warranty</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <RefreshCw className="h-4 w-4" />
                                <span>7-Day Return Policy</span>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Sticky Actions Card - col-span-3 (Desktop Only) */}
            <div className="hidden md:block md:col-span-2 lg:col-span-3">
                <div className="sticky top-28 p-6 rounded-lg border bg-background/50 backdrop-blur-sm shadow-xl space-y-6">
                    <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
                        <span>Quantity</span>
                        <span className="text-green-600">Many in stock</span>
                    </div>

                    <div className="flex items-center justify-between border rounded-lg bg-background p-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-bold w-8 text-center">{quantity}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md" onClick={() => setQuantity(quantity + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="space-y-3">
                        <Button size="lg" className="w-full rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                             onClick={() => {
                                // Mock Add to Cart
                                const toast = document.createElement("div");
                                toast.innerText = "Added to Cart";
                                toast.className = "fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-in slide-in-from-bottom-5";
                                document.body.appendChild(toast);
                                setTimeout(() => toast.remove(), 2000);
                            }}
                        >
                            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                        </Button>
                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="rounded-lg font-semibold hover:bg-muted text-xs"
                                onClick={() => {
                                    // Mock Wishlist
                                    const toast = document.createElement("div");
                                    toast.innerText = "Added to Wishlist";
                                    toast.className = "fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-in slide-in-from-bottom-5";
                                    document.body.appendChild(toast);
                                    setTimeout(() => toast.remove(), 2000);
                                }}
                            >
                                <Heart className="mr-2 h-3.5 w-3.5" /> Wishlist
                            </Button>
                            <Button variant="outline" className="rounded-lg font-semibold hover:bg-muted text-xs">
                                <ArrowRightLeft className="mr-2 h-3.5 w-3.5" /> Compare
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    <div className="grid gap-3 text-xs text-muted-foreground font-medium">
                        <div className="flex items-center gap-3">
                            <Truck className="h-4 w-4" />
                            <span>Free delivery in Nairobi CBD</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Shield className="h-4 w-4" />
                            <span>1 Year Official Warranty</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <RefreshCw className="h-4 w-4" />
                            <span>7-Day Return Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Extended Details Tabs */}
        <div className="mt-12">
            <div className="flex gap-8 border-b mb-8 overflow-x-auto">
                {["description", "specs", "reviews", "shipping"].map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-bold uppercase tracking-wide transition-all border-b-2 whitespace-nowrap ${activeTab === tab ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
                    >
                        {tab === "reviews" ? "Reviews (120)" : tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8 min-h-[400px]">
                    {activeTab === "description" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                             <h3 className="text-xl font-bold">Product Description</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {product.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 p-4 bg-muted/20 border rounded-lg">
                                        <Check className="h-4 w-4 text-primary" />
                                        <span className="text-sm font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "specs" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                             <h3 className="text-xl font-bold">Technical Specifications</h3>
                             <div className="border rounded-lg overflow-hidden">
                                {product.specs.map((spec, i) => (
                                    <div key={i} className="flex grid grid-cols-3 border-b last:border-0 bg-background hover:bg-muted/30 transition-colors">
                                        <div className="p-4 bg-muted/30 col-span-1 font-semibold text-sm text-muted-foreground border-r">{spec.label}</div>
                                        <div className="p-4 col-span-2 font-medium text-sm">{spec.value}</div>
                                    </div>
                                ))}
                             </div>
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold">Customer Reviews</h3>
                                <Button className="rounded-lg font-bold">Write a Review</Button>
                            </div>
                            
                            <div className="grid gap-6">
                                {product.reviews.map((rev, i) => (
                                    <div key={i} className="border-b last:border-0 pb-6 last:pb-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">{rev.user.charAt(0)}</div>
                                                <span className="font-bold text-sm">{rev.user}</span>
                                            </div>
                                            <span className="text-xs text-muted-foreground">{rev.date}</span>
                                        </div>
                                        <div className="flex text-yellow-400 mb-2">
                                            {Array.from({length: 5}).map((_, starI) => (
                                                <Star key={starI} className={`h-3 w-3 ${starI < rev.rating ? "fill-current" : "text-muted"}`} />
                                            ))}
                                        </div>
                                        <p className="text-sm text-muted-foreground">{rev.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Ad / Related Actions */}
                <div className="hidden lg:block space-y-6">
                    <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                         <MessageCircle className="h-8 w-8 text-primary mb-4" />
                         <h4 className="font-bold text-lg mb-2">Have questions?</h4>
                         <p className="text-sm text-muted-foreground mb-4">Our engineers are ready to help you ensure this product fits your setup.</p>
                         <Button variant="outline" className="w-full bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-white rounded-lg font-bold">Chat with Engineer</Button>
                    </div>
                </div>
            </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 pt-16 border-t">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                 {[1, 2, 3, 4, 5].map(id => (
                     <ProductCard 
                        key={id}
                        id={id}
                        title={`Related Product ${id}`}
                        category="Accessories"
                        price="KES 1,500"
                        image="https://images.unsplash.com/photo-1581093458791-9f302420fb28?q=80&w=2070"
                        isNew={id === 1}
                     />
                 ))}
            </div>
        </section>
      </div>
    </MainLayout>
  )
}
