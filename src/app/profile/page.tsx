"use client"

import { MainLayout } from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Camera, Mail, MapPin, Package, Phone, User } from "lucide-react"
import Link from "next/link"

export default function ClientProfilePage() {
  return (
    <MainLayout>
      <div className="w-full space-y-8 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
                <p className="text-muted-foreground mt-1 text-sm">Manage your personal information and delivery addresses.</p>
            </div>
            <Button className="rounded-lg font-bold">
                Edit Profile
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 lg:col-span-3 space-y-6">
                <div className="relative group mx-auto w-full">
                    <div className="aspect-square w-full sm:w-48 sm:mx-auto rounded-full bg-primary/10 flex items-center justify-center text-5xl font-bold text-primary border-4 border-background shadow-xl">
                        JD
                    </div>
                    <button className="absolute bottom-2 right-1/2 translate-x-12 sm:translate-x-16 p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg border-4 border-background">
                        <Camera className="h-4 w-4" />
                    </button>
                </div>
                <div className="text-center">
                    <h2 className="font-bold text-2xl">John Doe</h2>
                    <p className="text-sm text-muted-foreground font-medium bg-muted/50 py-1 px-3 rounded-lg w-fit mx-auto mt-2">Premium Client</p>
                </div>
                
                <Card className="rounded-lg border shadow-sm">
                    <CardContent className="p-4 space-y-2 text-sm font-medium text-muted-foreground">
                        <div className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer text-primary bg-primary/5">
                            <User className="h-4 w-4" /> Personal Info
                        </div>
                        <Link href="/orders" className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                            <Package className="h-4 w-4" /> My Orders
                        </Link>
                        <div className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                            <MapPin className="h-4 w-4" /> Addresses
                        </div>
                        <div className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                            <Mail className="h-4 w-4" /> Preferences
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="md:col-span-8 lg:col-span-9 space-y-6">
                <Card className="rounded-lg border-none shadow-sm bg-background">
                    <CardHeader className="px-6 pt-6 pb-4 border-b">
                        <CardTitle className="text-lg">Personal Details</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">First Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input defaultValue="John" className="pl-10 h-12 rounded-lg bg-muted/30 border-transparent focus:bg-background focus:border-input transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Last Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input defaultValue="Doe" className="pl-10 h-12 rounded-lg bg-muted/30 border-transparent focus:bg-background focus:border-input transition-all" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input defaultValue="john.doe@example.com" className="pl-10 h-12 rounded-lg bg-muted/30 border-transparent focus:bg-background focus:border-input transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold ml-1">Phone</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input defaultValue="+254 712 345 678" className="pl-10 h-12 rounded-lg bg-muted/30 border-transparent focus:bg-background focus:border-input transition-all" />
                            </div>
                        </div>
                        
                        <div className="flex justify-end pt-4">
                            <Button className="rounded-lg px-8 h-12 font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                Save Changes
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                
                <Card className="rounded-lg border-none shadow-sm bg-background">
                    <CardHeader className="px-6 pt-6 pb-4 border-b flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Delivery Address</CardTitle>
                        <Button variant="ghost" size="sm" className="text-primary font-bold hover:bg-primary/10 rounded-lg">Add New</Button>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-muted group hover:border-primary/50 transition-colors cursor-pointer">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <p className="font-bold text-sm">Home (Default)</p>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        <User className="h-4 w-4" /> {/* Edit Icon placeholder */}
                                    </Button>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    P.O Box 12345 - 00100,<br />
                                    Westlands, Nairobi,<br />
                                    Kenya.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </MainLayout>
  )
}
