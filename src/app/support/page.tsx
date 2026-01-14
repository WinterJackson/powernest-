"use client"

import { MainLayout } from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import { useState } from "react"

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      // Simulate submission
      setTimeout(() => {
          setIsSubmitting(false)
          alert("Message sent! We'll get back to you shortly.")
      }, 1500)
  }

  return (
    <MainLayout>
      <div className="w-full max-w-5xl mx-auto space-y-12 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6 mb-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Support</h1>
                <p className="text-muted-foreground mt-1 text-sm">Our certified solar technicians and support staff are here to assist with installations, product queries, and orders.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:scale-105 transition-transform duration-300">
                <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Phone className="h-6 w-6" />
                    </div>
                    <CardTitle>Call Us</CardTitle>
                    <CardDescription>Mon-Fri from 8am to 5pm</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-bold text-lg">+254 712 345 678</p>
                </CardContent>
            </Card>
            <Card className="text-center hover:scale-105 transition-transform duration-300">
                <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Mail className="h-6 w-6" />
                    </div>
                    <CardTitle>Email Us</CardTitle>
                    <CardDescription>We reply within 2 hours</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-bold text-lg">support@powernest.co.ke</p>
                </CardContent>
            </Card>
            <Card className="text-center hover:scale-105 transition-transform duration-300">
                <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-2">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <CardTitle>Visit HQ</CardTitle>
                    <CardDescription>Westlands, Nairobi</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-bold text-lg">PowerNest Headquarters, 4th Floor</p>
                </CardContent>
            </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>First Name</Label>
                            <Input placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                            <Label>Last Name</Label>
                            <Input placeholder="Doe" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label>Message</Label>
                        <Textarea placeholder="Tell us more about your inquiry..." className="min-h-[150px]" required />
                    </div>
                    <Button type="submit" size="lg" className="w-full font-bold" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </div>

            <div className="space-y-6 bg-muted/30 p-8 rounded-2xl border">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" /> FAQ
                </h2>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="font-bold text-base">Do you offer installation services?</h3>
                        <p className="text-muted-foreground text-sm">Yes, we have a team of certified technicians who can install solar systems and smart home devices countrywide.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-base">What is the warranty period?</h3>
                        <p className="text-muted-foreground text-sm">Most solar panels come with a 25-year warranty, while inverters and batteries typically have 5-10 year warranties.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-base">Can I return items?</h3>
                        <p className="text-muted-foreground text-sm">We accept returns within 14 days of purchase, provided the items are in their original condition and packaging.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </MainLayout>
  )
}
