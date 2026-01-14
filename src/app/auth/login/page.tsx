"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Github, Lock, Mail } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F4F9EB] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-lg bg-background shadow-2xl border border-white/20">
        
        {/* Left Side: Illustration & Branding */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-primary text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-48 -mb-48" />
            
            <Link href="/" className="flex items-center gap-2 relative z-10">
                <div className="w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center font-bold text-2xl shadow-xl">
                    S
                </div>
                <span className="text-2xl font-bold tracking-tight">PowerNest</span>
            </Link>

            <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-6 leading-tight">Welcome back to the Future of Energy.</h1>
                <p className="text-primary-foreground/80 text-lg max-w-md leading-relaxed">
                    Manage your ecosystem, track your solar yields, and enjoy seamless energy shopping.
                </p>
            </div>

            <div className="relative z-10 flex gap-4 text-sm font-medium opacity-60">
                <span>&copy; 2025 PowerNest</span>
                <span>Privacy Policy</span>
                <span>Terms</span>
            </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Login to your account</h2>
                <p className="text-muted-foreground">Don't have an account? <Link href="/auth/signup" className="text-primary font-semibold hover:underline">Sign up for free</Link></p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            type="email" 
                            placeholder="name@company.com" 
                            className="pl-12 py-7 rounded-2xl bg-muted/30 border-none focus:ring-2 focus:ring-primary/20 transition-all text-base"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                        <label className="text-sm font-semibold">Password</label>
                        <Link href="#" className="text-xs font-semibold text-primary hover:underline">Forgot password?</Link>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-12 py-7 rounded-2xl bg-muted/30 border-none focus:ring-2 focus:ring-primary/20 transition-all text-base"
                        />
                    </div>
                </div>

                <Button className="w-full py-7 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary-40 hover:scale-[1.01] transition-all mt-4">
                    Sign In <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-muted"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-4 text-muted-foreground font-medium">Or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="py-6 rounded-2xl border-muted hover:bg-muted/50 transition-all font-semibold">
                        <img src="https://www.google.com/favicon.ico" className="h-4 w-4 mr-2" /> Google
                    </Button>
                    <Button variant="outline" className="py-6 rounded-2xl border-muted hover:bg-muted/50 transition-all font-semibold">
                        <Github className="h-4 w-4 mr-2" /> Github
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
