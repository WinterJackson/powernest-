"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const slides = [
  {
    id: 1,
    title: "Eco-Friendly Solar Solutions",
    description: "Power your home with clean energy. Get up to 40% off on solar panels.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    cta: "Shop Solar",
    color: "bg-primary"
  },
  {
    id: 2,
    title: "Premium Lighting Collection",
    description: "Transform your space with our modern, energy-efficient LED fixtures.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2070&auto=format&fit=crop",
    cta: "View Collection",
    color: "bg-secondary"
  },
  {
    id: 3,
    title: "Smart Home Automation",
    description: "Control your switches and sockets with just a tap.",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop",
    cta: "Discover Smart",
    color: "bg-blue-600"
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mx-auto mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl text-white">
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight"
                >
                    {slides[currentSlide].title}
                </motion.h1>
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg"
                >
                    {slides[currentSlide].description}
                </motion.p>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Button size="lg" className={`${slides[currentSlide].color} text-white hover:opacity-90 border-0 text-base px-8 h-12 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                        {slides[currentSlide].cta} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-primary" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
