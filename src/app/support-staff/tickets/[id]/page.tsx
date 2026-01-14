"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Clock, MessageSquare, Send, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function TicketDetailsPage({ params }: { params: { id: string } }) {
  const [reply, setReply] = useState("")
  // Mock Ticket Data
  const ticket = {
      id: params.id,
      subject: "Inverter failure after power surge",
      status: "Open",
      priority: "Critical",
      customer: "Alice Johnson",
      email: "alice@example.com",
      created: "2 hours ago",
      description: "My solar inverter (5kVA model obtained in Dec 2023) stopped working after a heavy storm yesterday. It's showing error code E04.",
      history: [
          { from: "Alice", message: "My solar inverter (5kVA model) stopped working...", time: "2 hours ago" },
          { from: "System", message: "Ticket created automatically.", time: "2 hours ago" }
      ]
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
        <Link href="/support-staff/tickets">
            <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tickets
            </Button>
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
                <h1 className="text-2xl font-bold flex items-center gap-3">
                    {ticket.subject}
                    <Badge variant="outline">{ticket.id}</Badge>
                </h1>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {ticket.customer}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {ticket.created}</span>
                </div>
            </div>
            <div className="flex gap-2">
                 <Badge className="text-sm px-3 py-1" variant="destructive">Critical Priority</Badge>
                 <Badge className="text-sm px-3 py-1" variant="outline">Open</Badge>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5" /> Discussion
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {ticket.history.map((msg, i) => (
                             <div key={i} className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                                    {msg.from.charAt(0)}
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-sm">{msg.from}</span>
                                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                                    </div>
                                    <p className="text-sm bg-muted/30 p-3 rounded-lg text-foreground/90">
                                        {msg.message}
                                    </p>
                                </div>
                             </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 space-y-4">
                        <h3 className="font-bold text-sm">Post a Reply</h3>
                        <Textarea 
                            placeholder="Type your response here..." 
                            className="min-h-[120px]"
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                        />
                        <div className="flex justify-end gap-2">
                            <Button variant="ghost">Attach File</Button>
                            <Button className="gap-2">
                                <Send className="h-4 w-4" /> Send Reply
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <Button variant="outline" className="justify-start">Assign to Technician</Button>
                        <Button variant="outline" className="justify-start">Change Priority</Button>
                        <Button variant="outline" className="justify-start">Close Ticket</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Customer Info</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                        <div>
                            <span className="text-muted-foreground block text-xs">Name</span>
                            <span className="font-medium">{ticket.customer}</span>
                        </div>
                        <Separator />
                        <div>
                            <span className="text-muted-foreground block text-xs">Email</span>
                            <span className="font-medium">{ticket.email}</span>
                        </div>
                        <Separator />
                        <div>
                            <span className="text-muted-foreground block text-xs">Previous Tickets</span>
                            <span className="font-medium">2 Closed, 1 Open</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}
