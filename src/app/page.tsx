"use client"

import { CategoryGrid } from "@/components/home/CategoryGrid"
import { Hero } from "@/components/home/Hero"
import { MainLayout } from "@/components/layout/MainLayout"
import { ProductCard } from "@/components/products/ProductCard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    ArrowRight,
    MapPin,
    MessageSquare,
    Quote,
    ShieldCheck,
    Star,
    TrendingUp,
    Users,
    Zap
} from "lucide-react"
import Link from "next/link"

const testimonials = [
    {
        name: "Edward Mwangi",
        role: "Farm Owner",
        content: "Switching to PowerNest's solar system reduced my monthly costs by 70%. The support team was fantastic during installation.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop"
    },
    {
        name: "Linda Kemunto",
        role: "Homeowner",
        content: "The smart switches are a game changer. I control my entire home lighting from my phone. Sleek design and easy to use.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop"
    },
    {
        name: "Kevin Otieno",
        role: "Tech Enthusiast",
        content: "Impressive build quality on the inverters. PowerNest is definitely leading the renewable energy market in Kenya.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&fit=crop"
    }
]

const brands = [
    "Tronic", "PowerNest", "SMA", "Victron", "Luminous", "Growatt"
]

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-32 w-full">
        {/* Full-Width Hero */}
        <Hero />

        {/* Dynamic Categories Section */}
        <section className="px-4 sm:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-xl text-left">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none mb-4 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest">
                      Our Solutions
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Shop by Category</h2>
                  <p className="text-muted-foreground mt-4 text-lg">Explore our curated collections of energy-efficient hardware and smart home components.</p>
              </div>
              <Link href="/products">
                <Button variant="ghost" className="group gap-2 text-primary font-bold hover:bg-primary/5 p-0">
                    View All Categories <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
          </div>
          <CategoryGrid />
        </section>

        {/* Interactive Features / Benefits */}
        <section className="bg-primary rounded-lg py-20 px-4 sm:px-12 lg:px-20 text-white relative overflow-hidden mx-4 sm:mx-12 lg:mx-20 shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                <div className="flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                        <Zap className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">High Efficiency</h3>
                    <p className="text-white/80 text-sm">Certified Grade-A components for maximum power output.</p>
                </div>
                <div className="flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">5+ Year Warranty</h3>
                    <p className="text-white/80 text-sm">Peace of mind with our verified long-term hardware support.</p>
                </div>
                <div className="flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                        <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Expert Support</h3>
                    <p className="text-white/80 text-sm">Access to certified solar technicians for every project.</p>
                </div>
                <div className="flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                        <TrendingUp className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Best Valuation</h3>
                    <p className="text-white/80 text-sm">Kenya's most competitive pricing for premium solar gear.</p>
                </div>
            </div>
        </section>

        {/* Featured Products / New Arrivals */}
        <section className="px-4 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold tracking-tight">New Arrivals</h2>
            <Link href="/products">
                <Button variant="outline" className="rounded-full px-6 border-muted hover:bg-muted font-bold">See All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5].map((id) => (
              <ProductCard 
                key={id}
                id={id}
                title={`Premium Product ${id}`}
                category="Solar Energy"
                price="KES 12,500"
                image="https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070"
              />
            ))}
          </div>
        </section>

        {/* Brand Showcase Slider (Static) */}
        <section className="bg-muted px-4 py-16">
            <p className="text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                {brands.map(brand => (
                    <span key={brand} className="text-2xl font-black italic tracking-tighter">{brand}</span>
                ))}
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-4 sm:px-12 lg:px-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight mb-4">What our customers say</h2>
                <div className="flex justify-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                    <Card key={idx} className="rounded-lg p-8 border-none shadow-xl bg-background hover:scale-[1.02] transition-transform duration-500 relative">
                        <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/5" />
                        <CardContent className="p-0 space-y-6">
                            <p className="text-muted-foreground italic leading-relaxed text-lg">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                                <div>
                                    <p className="font-bold">{t.name}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="px-4 pb-20 sm:px-12 lg:px-20">
             <div className="bg-black rounded-lg p-12 lg:p-24 text-white text-center relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                
                <h2 className="text-4xl lg:text-6xl font-black mb-8 relative z-10 tracking-tight leading-tight max-w-4xl">
                    Ready to switch to the most efficient energy in Kenya?
                </h2>
                
                <div className="max-w-md w-full flex flex-col items-center gap-4 relative z-10 mt-4">
                    <p className="text-white/60 text-lg mb-6">Join 5,000+ homes and businesses using PowerNest.</p>
                    <div className="flex w-full p-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-xl">
                        <input 
                            placeholder="Enter your email" 
                            className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder:text-white/40 font-medium" 
                        />
                        <Button className="rounded-full px-8 py-6 font-bold shadow-lg shadow-primary/20">Subscribe</Button>
                    </div>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mt-4">Weekly energy tips & hardware discounts.</p>
                </div>
             </div>
        </section>

        {/* Simple Footer */}
        <footer className="border-t pt-12 pb-24 px-4 sm:px-12 lg:px-20 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
                <p>&copy; 2025 PowerNest</p>
                <div className="flex gap-4 font-semibold text-foreground">
                    <Link href="#" className="hover:text-primary transition-colors">Shop</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Portfolio</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Support</Link>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Nairobi, Kenya
                </div>
                <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" /> Live Chat
                </div>
            </div>
        </footer>
      </div>
    </MainLayout>
  )
}
