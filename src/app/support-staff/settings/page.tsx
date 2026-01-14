"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Bell,
    Headset,
    Save,
    Smartphone,
    User
} from "lucide-react"

export default function SupportSettingsPage() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Staff Settings</h1>
            <p className="text-muted-foreground mt-1 text-sm">Manage your profile and notification preferences.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-4">
              <div className="p-8 bg-white rounded-lg border border-muted flex flex-col items-center text-center shadow-sm">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold mb-4 ring-4 ring-primary/5">
                      SA
                  </div>
                  <h3 className="font-bold text-lg">Support Agent</h3>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1">Level 2 Specialist</p>
                  <Button variant="outline" className="mt-6 rounded-xl w-full">Change Photo</Button>
              </div>
              
              <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-bold text-green-700">Online</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-[10px] font-bold h-7 uppercase">Go Offline</Button>
              </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
              <Card className="rounded-lg border-none shadow-xl bg-background overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  <CardHeader className="px-8 pt-8">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-primary" />
                        <CardTitle>Personal Information</CardTitle>
                      </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-sm font-bold ml-1">Full Name</label>
                              <Input defaultValue="Support Agent" className="rounded-xl py-6 bg-muted/30 border-none px-4" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-sm font-bold ml-1">Employee ID</label>
                              <Input defaultValue="SA-442-SP" disabled className="rounded-xl py-6 bg-muted/10 border-none px-4 opacity-70" />
                          </div>
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-bold ml-1">Email</label>
                          <Input defaultValue="agent.442@powernest.co.ke" className="rounded-xl py-6 bg-muted/30 border-none px-4" />
                      </div>
                  </CardContent>
              </Card>

              <Card className="rounded-lg border-none shadow-xl bg-background">
                  <CardHeader className="px-8 pt-8">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-primary" />
                        <CardTitle>Notifications</CardTitle>
                      </div>
                      <CardDescription>Choose how you want to be alerted for new tickets.</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted/20 rounded-2xl">
                          <div className="flex items-center gap-3">
                              <Smartphone className="h-5 w-5 text-muted-foreground" />
                              <span className="text-sm font-medium">Desktop Push Notifications</span>
                          </div>
                          <div className="w-10 h-5 bg-primary rounded-full relative">
                              <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                          </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-muted/20 rounded-2xl">
                          <div className="flex items-center gap-3">
                              <Headset className="h-5 w-5 text-muted-foreground" />
                              <span className="text-sm font-medium">Sound Alerts for New Orders</span>
                          </div>
                          <div className="w-10 h-5 bg-primary rounded-full relative">
                              <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                          </div>
                      </div>
                  </CardContent>
              </Card>

              <div className="flex justify-end gap-2">
                  <Button variant="ghost" className="rounded-xl font-bold">Discard</Button>
                  <Button className="rounded-xl px-8 py-6 font-bold shadow-lg shadow-primary/20 gap-2">
                      <Save className="h-5 w-5" /> Update Profile
                  </Button>
              </div>
          </div>
      </div>
    </div>
  )
}
