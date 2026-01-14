"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2, Clock, Filter, MessageSquare, MoreHorizontal, Search } from "lucide-react"
import { useState } from "react"

const tickets = [
    { id: "TCK-2024-001", customer: "Alice Johnson", subject: "Inverter failure after power surge", status: "Open", priority: "Critical", created: "2 hours ago", assigned: "Mike (Tech)" },
    { id: "TCK-2024-002", customer: "Robert Brown", subject: "Order #9921 delivery status", status: "Open", priority: "Medium", created: "4 hours ago", assigned: "Sarah (Support)" },
    { id: "TCK-2024-003", customer: "Kuzzi Dev", subject: "WiFi Switch configuration help", status: "Closed", priority: "Low", created: "1 day ago", assigned: "Bot" },
    { id: "TCK-2024-004", customer: "Jane Doe", subject: "Return request for LED lights", status: "In Progress", priority: "High", created: "30 mins ago", assigned: "Unassigned" },
    { id: "TCK-2024-005", customer: "John Smith", subject: "Installation quote needed", status: "Open", priority: "High", created: "1 hour ago", assigned: "Sales" },
]

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState("open")

  const filteredTickets = activeTab === "all" 
    ? tickets 
    : tickets.filter(t => activeTab === "open" ? t.status !== "Closed" : t.status.toLowerCase() === activeTab)

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Support Tickets</h1>
            <p className="text-muted-foreground mt-1 text-sm">Manage and respond to customer inquiries.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button>
                <MessageSquare className="mr-2 h-4 w-4" /> Create Ticket
            </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search tickets..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="open" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
            <TabsTrigger value="open">Open & Active</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
            <TabsTrigger value="all">All Tickets</TabsTrigger>
        </TabsList>
        <TabsContent value="open" className="space-y-4">
            <TicketTable tickets={filteredTickets} />
        </TabsContent>
        <TabsContent value="closed" className="space-y-4">
            <TicketTable tickets={filteredTickets} />
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
            <TicketTable tickets={filteredTickets} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TicketTable({ tickets }: { tickets: any[] }) {
    const [selectedTickets, setSelectedTickets] = useState<string[]>([])

    const toggleSelect = (id: string) => {
        setSelectedTickets(prev => 
            prev.includes(id) ? prev.filter(ticketId => ticketId !== id) : [...prev, id]
        )
    }

    const toggleSelectAll = () => {
        if (selectedTickets.length === tickets.length) {
            setSelectedTickets([])
        } else {
            setSelectedTickets(tickets.map(t => t.id))
        }
    }

    if (tickets.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed rounded-xl">
                <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-bold text-lg">No tickets found</h3>
                <p className="text-muted-foreground">There are no tickets in this view.</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {selectedTickets.length > 0 && (
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg flex items-center justify-between animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">{selectedTickets.length} selected</span>
                    </div>
                    <div className="flex gap-2">
                         <Button size="sm" variant="outline" className="bg-background">Assign Agent</Button>
                         <Button size="sm" variant="outline" className="bg-background">Merge</Button>
                         <Button size="sm" variant="default">Close Tickets</Button>
                    </div>
                </div>
            )}

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">
                                <input 
                                    type="checkbox" 
                                    checked={selectedTickets.length === tickets.length}
                                    onChange={toggleSelectAll}
                                    className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                                />
                            </TableHead>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tickets.map((ticket) => (
                            <TableRow key={ticket.id} className={selectedTickets.includes(ticket.id) ? "bg-muted/50" : ""}>
                                <TableCell>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedTickets.includes(ticket.id)}
                                        onChange={() => toggleSelect(ticket.id)}
                                        className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                                    />
                                </TableCell>
                                <TableCell className="font-medium text-xs text-muted-foreground">{ticket.id}</TableCell>
                                <TableCell>
                                    <div className="font-medium cursor-pointer hover:underline hover:text-primary transition-colors">{ticket.subject}</div>
                                    <div className="text-xs text-muted-foreground">Assigned to: {ticket.assigned}</div>
                                </TableCell>
                                <TableCell className="font-medium">{ticket.customer}</TableCell>
                                <TableCell>
                                    <Badge variant={ticket.status === "Closed" ? "secondary" : "default"}>
                                        {ticket.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {ticket.priority === "Critical" && <AlertCircle className="h-4 w-4 text-red-500" />}
                                        {ticket.priority === "High" && <AlertCircle className="h-4 w-4 text-orange-500" />}
                                        {ticket.priority === "Medium" && <Clock className="h-4 w-4 text-blue-500" />}
                                        {ticket.priority === "Low" && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                                        <span className="text-xs font-medium">{ticket.priority}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-muted-foreground text-xs">{ticket.created}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
