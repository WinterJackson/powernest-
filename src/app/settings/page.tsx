"use client"

import { MainLayout } from "@/components/layout/MainLayout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { Bell, CreditCard, Key, Moon, Plus, Smartphone, Trash2, User } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function ClientSettingsPage() {
  const { theme: currentTheme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("profile")
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <MainLayout>
      <div className="w-full space-y-8 pb-12">
        <div className="flex flex-col justify-between gap-4 border-b pb-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Settings & Preferences</h1>
                <p className="text-muted-foreground mt-1 text-sm">Manage your personal account, billing info, and security settings.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Sidebar Navigation - Sticky */}
            <nav className="md:col-span-3 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 h-fit sticky top-24">
                {[
                    { id: "profile", label: "Profile", icon: User },
                    { id: "billing", label: "Billing & Payments", icon: CreditCard },
                    { id: "security", label: "Security & Login", icon: Key },
                    { id: "notifications", label: "Notifications", icon: Bell },
                    { id: "appearance", label: "Appearance", icon: Moon },
                ].map(item => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap text-left",
                            activeTab === item.id 
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Content Area - Full Width */}
            <div className="md:col-span-9 space-y-6 min-h-[600px]">
                {activeTab === "profile" && (
                    <Card className="rounded-lg border-none shadow-sm animate-in fade-in slide-in-from-right-4 duration-500">
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>Update your personal details and public info.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {/* Profile content same as before but ensured full width usage */}
                            <div className="flex items-center gap-6">
                                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary border-4 border-background shadow-lg">JD</div>
                                <div>
                                    <h3 className="font-bold text-lg">John Doe</h3>
                                    <p className="text-sm text-muted-foreground">PowerNest Member</p>
                                </div>
                            </div>
                             <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>First Name</Label>
                                    <Input defaultValue="John" className="rounded-lg bg-muted/30" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Last Name</Label>
                                    <Input defaultValue="Doe" className="rounded-lg bg-muted/30" />
                                </div>
                                 <div className="space-y-2 md:col-span-2">
                                    <Label>Email</Label>
                                    <Input defaultValue="john.doe@example.com" className="rounded-lg bg-muted/30" />
                                </div>
                            </div>
                             <Button className="rounded-lg font-bold px-8 shadow-lg shadow-primary/20" onClick={handleSave} disabled={isLoading}>
                                    {isLoading ? "Saving..." : "Save Changes"}
                             </Button>
                        </CardContent>
                    </Card>
                )}

                {activeTab === "billing" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                         <Card className="rounded-lg border-none shadow-sm">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>Payment Methods</CardTitle>
                                    <CardDescription>Manage your saved cards and M-Pesa numbers.</CardDescription>
                                </div>
                                <Button variant="outline" className="gap-2 rounded-lg font-bold text-primary border-primary/20 bg-primary/5 hover:bg-primary/10">
                                    <Plus className="h-4 w-4" /> Add Method
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between p-4 border rounded-lg bg-background hover:border-primary/50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-14 bg-black rounded flex items-center justify-center">
                                            <span className="text-white font-bold text-[10px] tracking-widest">VISA</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Visa ending in 4242</p>
                                            <p className="text-xs text-muted-foreground">Expires 12/28</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary" className="rounded-lg">Default</Badge>
                                        <Button variant="ghost" size="icon" className="rounded-lg text-muted-foreground hover:text-destructive">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 border rounded-lg bg-background hover:border-primary/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-14 bg-green-600 rounded flex items-center justify-center">
                                            <span className="text-white font-bold text-[10px]">M-PESA</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">M-Pesa ending in 678</p>
                                            <p className="text-xs text-muted-foreground">Registered</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="rounded-lg text-muted-foreground hover:text-destructive">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                         </Card>

                         <Card className="rounded-lg border-none shadow-sm">
                             <CardHeader>
                                 <CardTitle>Billing History</CardTitle>
                                 <CardDescription>View your past invoices.</CardDescription>
                             </CardHeader>
                             <CardContent>
                                 <div className="text-sm text-center py-8 text-muted-foreground bg-muted/30 rounded-lg border border-dashed">
                                     No invoices found for this period.
                                 </div>
                             </CardContent>
                         </Card>
                    </div>
                )}

                {activeTab === "security" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                        <Card className="rounded-lg border-none shadow-sm">
                            <CardHeader>
                                <CardTitle>Password & Authentication</CardTitle>
                                <CardDescription>Secure your account access.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <Label>Current Password</Label>
                                        <Input type="password" className="rounded-lg bg-muted/30" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>New Password</Label>
                                            <Input type="password" className="rounded-lg bg-muted/30" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Confirm Password</Label>
                                            <Input type="password" className="rounded-lg bg-muted/30" />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button className="rounded-lg font-bold">Update Password</Button>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-muted" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                            <Smartphone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Two-Factor Authentication (2FA)</p>
                                            <p className="text-xs text-muted-foreground">Secure your account with 2FA.</p>
                                        </div>
                                    </div>
                                    <Switch />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="rounded-lg border-none shadow-sm border-destructive/20">
                            <CardHeader>
                                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-bold">Delete Account</p>
                                        <p className="text-xs text-muted-foreground">Permanently remove your data.</p>
                                    </div>
                                    <Button variant="destructive" className="rounded-lg font-bold">Delete Account</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
                
                {activeTab === "notifications" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                        <Card className="rounded-lg border-none shadow-sm">
                            <CardHeader>
                                <CardTitle>Notification Preferences</CardTitle>
                                <CardDescription>Choose how you want to be notified.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                {[
                                    {
                                        title: "Email Notifications",
                                        icon: User,
                                        items: [
                                            { label: "Order Updates", desc: "Receive updates about your order status.", default: true },
                                            { label: "Promotions & Offers", desc: "Get emails about new products and sales.", default: false },
                                            { label: "Security Alerts", desc: "Get notified about suspicious login activity.", default: true },
                                        ]
                                    },
                                    {
                                        title: "Push Notifications",
                                        icon: Bell,
                                        items: [
                                            { label: "Desktop Notifications", desc: "Show notifications on your desktop.", default: true },
                                            { label: "Mobile App", desc: "Receive push notifications on the PowerNest app.", default: true },
                                        ]
                                    }
                                ].map((section, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <section.icon className="h-4 w-4" />
                                            </div>
                                            <h3 className="font-bold text-base">{section.title}</h3>
                                        </div>
                                        <div className="grid gap-4">
                                            {section.items.map((item, i) => (
                                                <div key={i} className="flex items-center justify-between p-4 border rounded-lg bg-background hover:bg-muted/30 transition-colors">
                                                    <div className="space-y-0.5">
                                                        <Label className="text-sm font-semibold">{item.label}</Label>
                                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                                                    </div>
                                                    <Switch defaultChecked={item.default} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                )}

                {activeTab === "appearance" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                        <Card className="rounded-lg border-none shadow-sm">
                            <CardHeader>
                                <CardTitle>Appearance</CardTitle>
                                <CardDescription>Customize how PowerNest looks on your device.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className="space-y-4">
                                    <Label className="text-base font-semibold">Theme Preference</Label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {["light", "dark", "system"].map((theme) => (
                                            <button 
                                                key={theme}
                                                onClick={() => setTheme(theme)}
                                                className={cn(
                                                    "flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all hover:bg-muted",
                                                    currentTheme === theme ? "border-primary bg-primary/5" : "border-transparent bg-muted/30"
                                                )}
                                            >
                                                <div className={cn(
                                                    "h-20 w-full rounded-md shadow-sm border mb-2",
                                                    theme === "dark" ? "bg-slate-950 border-slate-800" : theme === "light" ? "bg-white border-slate-200" : "bg-gradient-to-br from-white to-slate-950"
                                                )} />
                                                <span className="capitalize font-bold text-sm">{theme}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="space-y-4 pt-4 border-t">
                                     <Label className="text-base font-semibold">Accessibility</Label>
                                     <div className="flex items-center justify-between p-4 border rounded-lg bg-background">
                                         <div className="space-y-0.5">
                                             <Label>Derived Colors</Label>
                                             <p className="text-xs text-muted-foreground">Automatically adjust interface contrast.</p>
                                         </div>
                                         <Switch defaultChecked />
                                     </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
      </div>
    </MainLayout>
  )
}
