"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Lock, Mail, ShieldCheck, User } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#F4F9EB] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-lg bg-background shadow-2xl border border-white/20">
        
        {/* Left Side: Illustration & Branding */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-[#93C841] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white/20 rounded-full blur-3xl -ml-40 -mt-40" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -mr-32" />
            
            <Link href="/" className="flex items-center gap-2 relative z-10">
                <div className="w-10 h-10 bg-white text-[#93C841] rounded-xl flex items-center justify-center font-bold text-2xl shadow-xl">
                    S
                </div>
                <span className="text-2xl font-bold tracking-tight">PowerNest</span>
            </Link>

            <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-6 leading-tight">Join the Clean Energy Revolution.</h1>
                <p className="text-[#F4F9EB]/90 text-lg max-w-md leading-relaxed">
                    Create an account to access exclusive hardware deals, professional installation services, and real-time support.
                </p>
            </div>

            <div className="relative z-10 flex items-center gap-2 px-4 py-2 bg-black/10 w-fit rounded-full text-xs font-semibold backdrop-blur-md">
                <ShieldCheck className="h-4 w-4" /> 100% Secure & Environmentally Conscious
            </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Create your account</h2>
                <p className="text-muted-foreground">Already have an account? <Link href="/auth/login" className="text-[#93C841] font-semibold hover:underline">Log in</Link></p>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold ml-1">First Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input 
                                placeholder="John" 
                                className="pl-12 py-7 rounded-2xl bg-muted/30 border-none focus:ring-2 focus:ring-[#93C841]/20 transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold ml-1">Last Name</label>
                        <div className="relative">
                            <Input 
                                placeholder="Doe" 
                                className="pl-4 py-7 rounded-2xl bg-muted/30 border-none focus:ring-2 focus:ring-[#93C841]/20 transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="pl-12 py-7 rounded-2xl bg-muted/30 border-none focus:ring-2 focus:ring-[#93C841]/20 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            type="password" 
                            placeholder="Create a strong password" 
                            className="pl-12 py-7 rounded-2xl bg-muted/30 border-none focus:ring-2 focus:ring-[#93C841]/20 transition-all"
                        />
                    </div>
                </div>

                <div className="flex items-start gap-2 py-2">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-muted text-[#93C841] focus:ring-[#93C841]/20" />
                    <label className="text-xs text-muted-foreground">
                        I agree to the <Link href="#" className="text-foreground font-semibold underline">Terms of Service</Link> and <Link href="#" className="text-foreground font-semibold underline">Privacy Policy</Link>.
                    </label>
                </div>

                <Button className="w-full py-7 rounded-2xl text-lg font-bold shadow-xl shadow-[#93C841]/20 bg-[#93C841] hover:bg-[#82b43a] hover:scale-[1.01] transition-all mt-4">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}
