"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const categories = [
  { 
    name: "Solar Solutions", 
    description: "Complete kits for off-grid power.",
    span: "md:col-span-2 md:row-span-2", 
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
    href: "/products?category=Solar"
  },
  { 
    name: "Smart Switches", 
    description: "WiFi-enabled control.",
    span: "md:col-span-1 md:row-span-1", 
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070",
    href: "/products?category=Switches"
  },
  { 
    name: "Lighting", 
    description: "Efficient LED panels.",
    span: "md:col-span-1 md:row-span-1", 
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2070",
    href: "/products?category=Lighting"
  },
  { 
    name: "Protection", 
    description: "Breakers & Voltage guards.",
    span: "md:col-span-1 md:row-span-1", 
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070",
    href: "/products?category=Protection"
  },
  { 
    name: "Batteries", 
    description: "Long-lasting storage.",
    span: "md:col-span-1 md:row-span-1", 
    image: "https://images.unsplash.com/photo-1619641476906-e7e12739097e?q=80&w=2070",
    href: "/products?category=Batteries"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export function CategoryGrid() {
  return (
    <section className="mb-20">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[500px]"
      >
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className={cn("relative group overflow-hidden rounded-2xl cursor-pointer", cat.span)}
          >
            <Link href={cat.href} className="block w-full h-full">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${cat.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{cat.name}</h3>
                        <p className="text-white/70 text-sm mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{cat.description}</p>
                        
                        <Button size="sm" variant="outline" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-black font-bold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                             Shop Now <ArrowUpRight className="ml-2 h-3 w-3" />
                        </Button>
                    </div>
                </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
