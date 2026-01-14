"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Bell,
    Database,
    Globe,
    Palette,
    RefreshCcw,
    Save,
    Shield,
    Upload
} from "lucide-react"
import { useState } from "react"

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  const tabs = [
    { id: "general", label: "General Settings", icon: Globe },
    { id: "branding", label: "Theme & Branding", icon: Palette },
    { id: "security", label: "Security & Access", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "backup", label: "Backup & Recovery", icon: Database },
  ]

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="border-b pb-6">
          <h1 className="text-2xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground mt-1 text-sm">Configure global application parameters, security, and integration levels.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Settings Tabs */}
          <div className="lg:col-span-1 space-y-2">
            {tabs.map((tab) => (
                <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "secondary" : "ghost"}
                    className={`w-full justify-start py-6 rounded-2xl gap-3 shadow-none border-none ${
                        activeTab === tab.id 
                            ? "text-primary bg-primary/10" 
                            : "text-muted-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    <tab.icon className="h-5 w-5" /> {tab.label}
                </Button>
            ))}
          </div>

          {/* Settings Canvas */}
          <div className="lg:col-span-2 space-y-8">
              {/* General Settings Content */}
              {activeTab === "general" && (
                <>
                  <Card className="rounded-lg border-none shadow-xl bg-background overflow-hidden relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                      <CardHeader className="px-8 pt-8">
                          <CardTitle>App Information</CardTitle>
                          <CardDescription>Basic configuration for the storefront identity.</CardDescription>
                      </CardHeader>
                      <CardContent className="px-8 pb-8 space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                  <Label className="text-sm font-bold ml-1">Store Name</Label>
                                  <Input defaultValue="PowerNest" className="rounded-xl py-6 bg-muted/30 border-none px-4" />
                              </div>
                              <div className="space-y-2">
                                  <Label className="text-sm font-bold ml-1">Support Email</Label>
                                  <Input defaultValue="hello@powernest.co.ke" className="rounded-xl py-6 bg-muted/30 border-none px-4" />
                              </div>
                          </div>
                          <div className="space-y-2">
                              <Label className="text-sm font-bold ml-1">Store Description</Label>
                              <textarea 
                                className="w-full rounded-2xl bg-muted/30 border-none p-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                rows={3}
                                defaultValue="The ultimate destination for clean energy hardware in East Africa."
                              />
                          </div>
                      </CardContent>
                  </Card>

                  <Card className="rounded-lg border-none shadow-xl bg-background">
                      <CardHeader className="px-8 pt-8">
                          <CardTitle>Regional Configuration</CardTitle>
                          <CardDescription>Currency, tax rates, and default logistics.</CardDescription>
                      </CardHeader>
                      <CardContent className="px-8 pb-8 space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              <div className="space-y-2">
                                  <Label className="text-sm font-bold ml-1">Currency</Label>
                                  <div className="flex items-center gap-2 p-4 bg-muted/30 rounded-xl font-medium text-sm">
                                      <span>KES (Kenyan Shilling)</span>
                                  </div>
                              </div>
                              <div className="space-y-2">
                                  <Label className="text-sm font-bold ml-1">VAT Rate (%)</Label>
                                  <Input defaultValue="16" type="number" className="rounded-xl py-6 bg-muted/30 border-none px-4" />
                              </div>
                              <div className="space-y-2">
                                  <Label className="text-sm font-bold ml-1">Default Shipping</Label>
                                  <Input defaultValue="500" type="number" className="rounded-xl py-6 bg-muted/30 border-none px-4" />
                              </div>
                          </div>
                      </CardContent>
                  </Card>
                </>
              )}

              {/* Theme & Branding Content */}
              {activeTab === "branding" && (
                  <Card className="rounded-lg border-none shadow-xl bg-background">
                      <CardHeader className="px-8 pt-8">
                          <CardTitle>Brand Identity</CardTitle>
                          <CardDescription>Manage logos, colors, and visual assets.</CardDescription>
                      </CardHeader>
                      <CardContent className="px-8 pb-8 space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <Label className="font-bold">Primary Logo</Label>
                                    <div className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-muted/10 hover:bg-muted/30 transition-colors cursor-pointer">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Upload className="h-6 w-6" />
                                        </div>
                                        <p className="text-xs text-muted-foreground font-medium">Click to replace logo</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <Label className="font-bold">Brand Color</Label>
                                    <div className="flex items-center gap-4">
                                        <div className="h-16 w-16 rounded-xl bg-primary shadow-lg ring-4 ring-primary/20" />
                                        <div className="space-y-2 flex-1">
                                            <Input defaultValue="#74C044" className="uppercase font-mono tracking-widest" />
                                            <p className="text-xs text-muted-foreground">Main accent color used in buttons & links.</p>
                                        </div>
                                    </div>
                                </div>
                          </div>
                      </CardContent>
                  </Card>
              )}

              {/* Security & Access Content */}
              {activeTab === "security" && (
                  <Card className="rounded-lg border-none shadow-xl bg-background">
                      <CardHeader className="px-8 pt-8">
                          <CardTitle>Security Policies</CardTitle>
                          <CardDescription>Enforce authentication rules and access controls.</CardDescription>
                      </CardHeader>
                      <CardContent className="px-8 pb-8 space-y-6">
                          <div className="flex items-center justify-between p-4 rounded-xl border bg-card">
                              <div className="space-y-0.5">
                                  <Label className="text-base font-bold">Two-Factor Authentication (2FA)</Label>
                                  <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
                              </div>
                              <Switch />
                          </div>
                          <div className="flex items-center justify-between p-4 rounded-xl border bg-card">
                              <div className="space-y-0.5">
                                  <Label className="text-base font-bold">Force Password Reset (90 days)</Label>
                                  <p className="text-sm text-muted-foreground">Users must update passwords quarterly</p>
                              </div>
                              <Switch defaultChecked />
                          </div>
                      </CardContent>
                  </Card>
              )}

              {/* Notifications Content */}
              {activeTab === "notifications" && (
                  <Card className="rounded-lg border-none shadow-xl bg-background">
                      <CardHeader className="px-8 pt-8">
                          <CardTitle>Notification Channels</CardTitle>
                          <CardDescription>Configure how and when the system sends alerts.</CardDescription>
                      </CardHeader>
                      <CardContent className="px-8 pb-8 space-y-6">
                           <div className="space-y-4">
                               <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Triggers</Label>
                               <div className="grid gap-4">
                                   {['New Order Received', 'Low Stock Alert', 'New User Registration', 'System Backup Failed'].map((item, i) => (
                                       <div key={i} className="flex items-center justify-between">
                                           <span className="text-sm font-medium">{item}</span>
                                           <Switch defaultChecked={i < 2} />
                                       </div>
                                   ))}
                               </div>
                           </div>
                      </CardContent>
                  </Card>
              )}

               {/* Backup Content */}
               {activeTab === "backup" && (
                  <Card className="rounded-lg border-none shadow-xl bg-background">
                      <CardHeader className="px-8 pt-8">
                          <CardTitle>Data Retention</CardTitle>
                          <CardDescription>Manage automated backups and system snapshots.</CardDescription>
                      </CardHeader>
                      <CardContent className="px-8 pb-8 space-y-6">
                           <div className="p-6 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-4">
                               <Database className="h-8 w-8 text-blue-600 mt-1" />
                               <div>
                                   <h4 className="font-bold text-blue-900">Last Successful Backup</h4>
                                   <p className="text-blue-700 text-sm mt-1">Today at 03:00 AM (UTC+3)</p>
                                   <p className="text-blue-600 text-xs mt-2">Size: 4.2 GB • 12,403 Records</p>
                               </div>
                               <Button size="sm" className="ml-auto bg-blue-600 hover:bg-blue-700 text-white border-none shadow-none">Download</Button>
                           </div>
                           <Button variant="outline" className="w-full py-6">Initiate Manual Backup Now</Button>
                      </CardContent>
                  </Card>
              )}

              <div className="flex items-center justify-between p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-inner">
                          <RefreshCcw className="h-6 w-6" />
                      </div>
                      <div>
                          <p className="font-bold text-sm">Draft Changes Detected</p>
                          <p className="text-xs text-muted-foreground">You have unsaved modifications to the branding tier.</p>
                      </div>
                  </div>
                  <div className="flex gap-2">
                      <Button variant="ghost" className="rounded-xl font-semibold">Discard</Button>
                      <Button className="rounded-xl font-bold shadow-lg shadow-primary/20 gap-2">
                          <Save className="h-4 w-4" /> Save Changes
                      </Button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
