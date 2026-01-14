"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Clock,
    MapPin,
    Wrench
} from "lucide-react"

const installations = [
    { id: "INS-101", customer: "Karen Hotel", type: "Commercial Solar System", status: "Scheduled", date: "Jan 15, 2024", time: "09:00 AM", location: "Karen, Nairobi", technicians: ["Mike K.", "David M."] },
    { id: "INS-102", customer: "John Doe", type: "Home Backup 5kVA", status: "In Progress", date: "Today", time: "11:00 AM", location: "Westlands", technicians: ["Sarah J."] },
    { id: "INS-103", customer: "Alice Johnson", type: "Smart Home Integration", status: "Completed", date: "Yesterday", time: "02:00 PM", location: "Lavington", technicians: ["Paul R."] },
]

export default function InstallationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Installation Schedule</h1>
            <p className="text-muted-foreground mt-1 text-sm">Manage field technician assignments and job status.</p>
        </div>
        <div className="flex gap-2">
            <Button>
                Assign New Job
            </Button>
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Mock Data for now */}
           {[1, 2, 3, 4, 5, 6].map((i) => (
               <div key={i} className="p-6 border rounded-xl bg-card hover:shadow-md transition-all">
                   <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-lg">Installation #{980 + i}</h3>
                       <Badge variant={i % 2 === 0 ? "default" : "secondary"}>
                           {i % 2 === 0 ? "In Progress" : "Pending"}
                       </Badge>
                   </div>
                   <div className="space-y-3 text-sm">
                       <div className="flex items-center gap-2 text-muted-foreground">
                           <MapPin className="h-4 w-4" />
                           Westlands, Nairobi
                       </div>
                       <div className="flex items-center gap-2 text-muted-foreground">
                           <Clock className="h-4 w-4" />
                           Today, {10 + i}:00 AM
                       </div>
                       <div className="flex items-center gap-2 text-muted-foreground">
                           <Wrench className="h-4 w-4" />
                           Assignee: Mike K.
                       </div>
                   </div>
                   <div className="mt-6 flex justify-end">
                       <Button variant="outline" size="sm">View Details</Button>
                   </div>
               </div>
           ))}
       </div>
    </div>
  )
}
