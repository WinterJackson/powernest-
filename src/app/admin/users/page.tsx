"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Filter, Mail, MoreHorizontal, Search, Shield, UserPlus } from "lucide-react"

const users = [
    { id: "U001", name: "John Doe", email: "john@example.com", role: "Client", status: "Active", joined: "Jan 10, 2025" },
    { id: "U002", name: "Jane Smith", email: "jane@company.com", role: "Support Staff", status: "Active", joined: "Jan 05, 2025" },
    { id: "U003", name: "Admin User", email: "admin@powernest.co.ke", role: "Admin", status: "Active", joined: "Jan 01, 2025" },
    { id: "U004", name: "Robert Brown", email: "robert@outlook.com", role: "Client", status: "Inactive", joined: "Dec 20, 2024" },
]

export default function AdminUsersPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6">
          <div>
              <h1 className="text-2xl font-bold tracking-tight">Users Management</h1>
              <p className="text-muted-foreground mt-1 text-sm">Manage user roles, access levels, and account statuses.</p>
          </div>

          <Sheet>
              <SheetTrigger asChild>
                  <Button className="gap-2 rounded-xl py-6 px-6">
                      <UserPlus className="h-5 w-5" /> Add New User
                  </Button>
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                      <SheetTitle>Create User Account</SheetTitle>
                      <SheetDescription>
                          Add a new staff member or client manually.
                      </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-6 py-6">
                      <div className="grid gap-2">
                          <Label htmlFor="role">Account Role</Label>
                          <Select defaultValue="client">
                              <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                              <SelectContent>
                                  <SelectItem value="client">Client (Customer)</SelectItem>
                                  <SelectItem value="support">Support Staff</SelectItem>
                                  <SelectItem value="admin">Administrator</SelectItem>
                              </SelectContent>
                          </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                              <Label htmlFor="firstname">First Name</Label>
                              <Input id="firstname" placeholder="John" />
                          </div>
                          <div className="grid gap-2">
                              <Label htmlFor="lastname">Last Name</Label>
                              <Input id="lastname" placeholder="Doe" />
                          </div>
                      </div>
                      <div className="grid gap-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="grid gap-2">
                          <Label htmlFor="password">Temporary Password</Label>
                          <Input id="password" type="password" />
                      </div>
                      <div className="flex items-center gap-2">
                           <div className="h-4 w-4 rounded border border-primary flex items-center justify-center">
                               <div className="h-2 w-2 bg-primary rounded-sm" />
                           </div>
                           <Label className="font-normal text-muted-foreground">Send email invitation immediately</Label>
                      </div>
                  </div>
                  <SheetFooter>
                      <Button type="submit" className="w-full">Create Account</Button>
                  </SheetFooter>
              </SheetContent>
          </Sheet>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-3xl border-none shadow-sm bg-primary/5">
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-3xl font-bold">1,284</div>
                  <p className="text-xs text-primary mt-1 font-semibold">+12 this week</p>
              </CardContent>
          </Card>
          <Card className="rounded-3xl border-none shadow-sm bg-blue-50">
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-3xl font-bold">84</div>
                  <p className="text-xs text-blue-600 mt-1 font-semibold">Real-time</p>
              </CardContent>
          </Card>
          <Card className="rounded-3xl border-none shadow-sm bg-orange-50">
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending Invites</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-3xl font-bold">7</div>
                  <p className="text-xs text-orange-600 mt-1 font-semibold">Action required</p>
              </CardContent>
          </Card>
      </div>

      <Card className="rounded-lg border-none shadow-xl overflow-hidden bg-background">
          <CardHeader className="border-b px-8 py-6">
               <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                   <div className="relative w-full sm:w-96">
                       <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                       <Input placeholder="Search users by name, email or ID..." className="pl-12 py-6 rounded-2xl bg-muted/30 border-none" />
                   </div>
                   <div className="flex items-center gap-2 w-full sm:w-auto">
                       <Button variant="outline" className="flex-1 sm:flex-none gap-2 rounded-xl py-6">
                           <Filter className="h-4 w-4" /> Filter
                       </Button>
                       <Button variant="outline" className="flex-1 sm:flex-none gap-2 rounded-xl py-6">
                           Export
                       </Button>
                   </div>
               </div>
          </CardHeader>
          <CardContent className="p-0">
              <div className="overflow-x-auto">
                  <table className="w-full text-left">
                      <thead className="bg-muted/30 text-muted-foreground font-semibold text-xs uppercase tracking-wider">
                          <tr>
                              <th className="px-8 py-4">User</th>
                              <th className="px-8 py-4">Role</th>
                              <th className="px-8 py-4">Status</th>
                              <th className="px-8 py-4">Joined</th>
                              <th className="px-8 py-4 text-right">Actions</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-muted/50">
                          {users.map((user) => (
                              <tr key={user.id} className="hover:bg-muted/10 transition-colors group">
                                  <td className="px-8 py-6">
                                      <div className="flex items-center gap-3">
                                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                              {user.name.charAt(0)}
                                          </div>
                                          <div>
                                              <p className="font-bold text-sm tracking-tight">{user.name}</p>
                                              <p className="text-xs text-muted-foreground">{user.email}</p>
                                          </div>
                                      </div>
                                  </td>
                                  <td className="px-8 py-6">
                                      <div className="flex items-center gap-2">
                                          {user.role === 'Admin' && <Shield className="h-3 w-3 text-red-500" />}
                                          <span className="text-sm font-medium">{user.role}</span>
                                      </div>
                                  </td>
                                  <td className="px-8 py-6">
                                      <Badge 
                                        variant={user.status === "Active" ? "default" : "secondary"}
                                        className={cn(
                                            "rounded-full px-3",
                                            user.status === "Active" ? "bg-green-50 text-green-700 hover:bg-green-100 border-green-200" : ""
                                        )}
                                      >
                                          {user.status}
                                      </Badge>
                                  </td>
                                  <td className="px-8 py-6 text-sm text-muted-foreground font-medium">
                                      {user.joined}
                                  </td>
                                  <td className="px-8 py-6 text-right">
                                      <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                              <Button variant="ghost" size="icon" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                                  <MoreHorizontal className="h-5 w-5" />
                                              </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end" className="rounded-2xl p-2 border-muted/50 shadow-2xl">
                                              <DropdownMenuLabel>User Actions</DropdownMenuLabel>
                                              <DropdownMenuItem className="rounded-xl py-3"><Mail className="mr-2 h-4 w-4" /> Send Email</DropdownMenuItem>
                                              <DropdownMenuItem className="rounded-xl py-3">View Activity</DropdownMenuItem>
                                              <DropdownMenuSeparator />
                                              <DropdownMenuItem className="text-red-600 rounded-xl py-3">Suspend Account</DropdownMenuItem>
                                          </DropdownMenuContent>
                                      </DropdownMenu>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </CardContent>
      </Card>
    </div>
  )
}
