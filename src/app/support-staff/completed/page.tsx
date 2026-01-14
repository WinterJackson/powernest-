"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, CheckCircle2, Filter, MoreVertical, Search } from "lucide-react"
import Link from "next/link"

const completedTasks = [
    { 
        id: "TSK-882", 
        type: "Installation Support", 
        customer: "James Macharia", 
        date: "Today, 10:24 AM",
        status: "Verified",
        earnings: "KES 500"
    },
    { 
        id: "TSK-879", 
        type: "Order Verification", 
        customer: "Sarah Kimani", 
        date: "Yesterday, 4:12 PM",
        status: "Closed",
        earnings: "KES 200"
    },
    { 
        id: "TSK-875", 
        type: "Tech Consultation", 
        customer: "Eco Farm Solutions", 
        date: "Yesterday, 2:30 PM",
        status: "Closed",
        earnings: "KES 1,200"
    },
]

export default function SupportCompletedPage() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
              <Link href="/support-staff">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-muted hover:bg-muted/50">
                    <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                  <h1 className="text-3xl font-bold tracking-tight">History</h1>
                  <p className="text-muted-foreground mt-1">Review your completed and audited task logs.</p>
              </div>
          </div>
          <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2 rounded-xl py-6 px-6">
                  <Calendar className="h-4 w-4" /> Select Range
              </Button>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-lg border-none shadow-sm bg-[#F4F9EB]">
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-[10px]">Tasks Done (Week)</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-3xl font-bold">42</div>
                  <p className="text-xs text-primary mt-1 font-semibold">Top 5% of Agents</p>
              </CardContent>
          </Card>
          <Card className="rounded-lg border-none shadow-sm bg-primary/10">
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-[10px]">Total Earned</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-3xl font-bold">KES 18,400</div>
                  <p className="text-xs text-primary mt-1 font-semibold">Available for payout</p>
              </CardContent>
          </Card>
          <Card className="rounded-lg border-none shadow-sm bg-muted/40">
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-[10px]">Audited Clear</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-3xl font-bold">100%</div>
                  <p className="text-xs text-muted-foreground mt-1 font-semibold">Zero disputes</p>
              </CardContent>
          </Card>
      </div>

      <Card className="rounded-lg border-none shadow-xl overflow-hidden bg-background">
          <CardHeader className="px-8 py-6 border-b">
               <div className="flex items-center justify-between">
                   <div className="relative w-full sm:w-64">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                       <Input placeholder="Search logs..." className="pl-10 h-11 rounded-xl bg-muted/30 border-none" />
                   </div>
                   <Button variant="ghost" size="icon" className="rounded-full">
                       <Filter className="h-4 w-4 text-muted-foreground" />
                   </Button>
               </div>
          </CardHeader>
          <CardContent className="p-0">
              <div className="space-y-0 divide-y divide-muted/50">
                  {completedTasks.map((task) => (
                      <div key={task.id} className="p-6 sm:p-8 hover:bg-muted/10 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                              <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-sm border border-primary/10">
                                  <CheckCircle2 className="h-6 w-6" />
                              </div>
                              <div>
                                  <div className="flex items-center gap-2 mb-1">
                                      <p className="font-bold text-base tracking-tight">{task.type}</p>
                                      <Badge variant="outline" className="text-[10px] bg-white rounded-full border-muted">{task.status}</Badge>
                                  </div>
                                  <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                                      <span>{task.customer}</span>
                                      <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                                      <span>{task.date}</span>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="flex items-center justify-between sm:justify-end gap-8">
                               <div className="text-right">
                                   <p className="text-sm font-bold text-primary">{task.earnings}</p>
                                   <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Net Payout</p>
                               </div>
                               <Button variant="ghost" size="icon" className="rounded-full">
                                   <MoreVertical className="h-5 w-5 text-muted-foreground" />
                               </Button>
                          </div>
                      </div>
                  ))}
              </div>
          </CardContent>
      </Card>
    </div>
  )
}
