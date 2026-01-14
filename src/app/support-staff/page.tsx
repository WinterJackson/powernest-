"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    AlertCircle,
    ArrowUpRight,
    Clock,
    FileText,
    MapPin,
    Package,
    Plus,
    Search,
    TrendingUp,
    Users,
    Wrench
} from "lucide-react"

export default function SupportDashboard() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
          <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
              <p className="text-muted-foreground mt-1 text-sm">Welcome back, John. Here's what's happening today.</p>
          </div>
          <div className="flex gap-2">
              <Button variant="outline" className="gap-2 rounded-full border-muted-foreground/20">
                  <Clock className="h-4 w-4" />
                  History
              </Button>
              <Button className="gap-2 shadow-lg shadow-primary/20 rounded-full">
                  <Plus className="h-4 w-4" />
                  Start New Task
              </Button>
          </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-dashed border-2 hover:border-primary hover:bg-primary/5 transition-all">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                <FileText className="h-5 w-5" />
            </div>
            <span className="font-semibold text-xs">Create Ticket</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-dashed border-2 hover:border-primary hover:bg-primary/5 transition-all">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-full">
                <Search className="h-5 w-5" />
            </div>
            <span className="font-semibold text-xs">Find Order</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-dashed border-2 hover:border-primary hover:bg-primary/5 transition-all">
            <div className="p-2 bg-green-100 text-green-600 rounded-full">
                <Users className="h-5 w-5" />
            </div>
            <span className="font-semibold text-xs">Lookup Customer</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-dashed border-2 hover:border-primary hover:bg-primary/5 transition-all">
            <div className="p-2 bg-orange-100 text-orange-600 rounded-full">
                <Package className="h-5 w-5" />
            </div>
            <span className="font-semibold text-xs">Check Stock</span>
        </Button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Tickets</CardTitle>
                  <FileText className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                      +2 since last hour
                  </p>
              </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Installs</CardTitle>
                  <Wrench className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground mt-1">
                      2 technicians in field
                  </p>
              </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                  <Package className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground mt-1">
                      Needs verification
                  </p>
              </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Satisfied Customers</CardTitle>
                  <Users className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">98%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                      Based on recent feedback
                  </p>
              </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Tasks */}
          <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">High Priority Tasks</h2>
                  <Button variant="link" className="text-xs">View All</Button>
              </div>
              <div className="space-y-4">
                  {[
                      { id: "TSK-992", title: "Urgent Installation Issue", desc: "Customer reporting inverter failure at Westlands.", priority: "Critical", time: "10m ago", type: "Installation" },
                      { id: "TSK-884", title: "Order Verification #ORD-221", desc: "Verify payment details for bulk order.", priority: "High", time: "45m ago", type: "Order" },
                      { id: "TSK-771", title: "Warranty Claim Inquiry", desc: "Review images for battery damage claim.", priority: "Medium", time: "2h ago", type: "Support" },
                  ].map((task) => (
                      <Card key={task.id} className="group hover:border-primary/50 transition-colors cursor-pointer">
                          <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                              <div className="flex items-start gap-3">
                                  <div className={`p-2 rounded-lg ${task.priority === "Critical" ? "bg-red-100 text-red-600" : task.priority === "High" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"}`}>
                                      {task.priority === "Critical" ? <AlertCircle className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                                  </div>
                                  <div>
                                      <h3 className="font-bold flex items-center gap-2">
                                          {task.title}
                                          <Badge variant="outline" className="text-[10px] h-5">{task.id}</Badge>
                                      </h3>
                                      <p className="text-sm text-muted-foreground mt-1">{task.desc}</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end mt-2 sm:mt-0">
                                  <span className="text-xs text-muted-foreground whitespace-nowrap">{task.time}</span>
                                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 group-hover:bg-primary group-hover:text-white rounded-full">
                                      <ArrowUpRight className="h-4 w-4" />
                                  </Button>
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>

          {/* Quick Stats / Feed */}
          <div className="space-y-6">
               <h2 className="text-xl font-bold">Field Updates</h2>
               <Card className="h-full bg-muted/20 border-dashed">
                  <CardContent className="p-6 space-y-6">
                      {[
                        { technician: "Mike K.", action: "Arrived at site", location: "Kileleshwa", time: "5m ago" },
                        { technician: "Sarah J.", action: "Completed install", location: "Lavington", time: "1h ago" },
                        { technician: "David M.", action: "Started diagnostics", location: "Karen", time: "2h ago" },
                      ].map((update, i) => (
                          <div key={i} className="flex gap-3 relative pb-6 last:pb-0 border-l last:border-l-0 border-muted-foreground/20 pl-4 ml-2">
                              {/* Timeline dot */}
                              <div className="absolute -left-[21px] top-0 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                              
                              <div>
                                  <p className="text-sm font-medium">{update.technician} <span className="text-muted-foreground font-normal">{update.action}</span></p>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                      <MapPin className="h-3 w-3" /> {update.location}
                                      <span>•</span>
                                      {update.time}
                                  </div>
                              </div>
                          </div>
                      ))}
                      <Button variant="outline" className="w-full mt-4">View Schedule</Button>
                  </CardContent>
               </Card>
          </div>
      </div>
    </div>
  )
}
