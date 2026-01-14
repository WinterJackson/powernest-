"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, ArrowDownRight, ArrowUpRight, DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react"
import { Area, AreaChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const revenueData = [
  { name: "Mon", revenue: 12000, orders: 45 },
  { name: "Tue", revenue: 24000, orders: 52 },
  { name: "Wed", revenue: 18000, orders: 38 },
  { name: "Thu", revenue: 32000, orders: 65 },
  { name: "Fri", revenue: 45000, orders: 89 },
  { name: "Sat", revenue: 56000, orders: 110 },
  { name: "Sun", revenue: 34000, orders: 75 },
]

const categoryData = [
    { name: "Solar Panels", value: 400, color: "#74C044" },
    { name: "Inverters", value: 300, color: "#93C841" },
    { name: "Batteries", value: 300, color: "#16a34a" },
    { name: "Accessories", value: 100, color: "#EAB308" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8 w-full max-w-full">
      {/* Header */}
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6">
          <div>
              <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
              <p className="text-muted-foreground mt-1 text-sm">Real-time performance metrics for PowerNest.</p>
          </div>
          <div className="flex items-center gap-2">
              <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100 animate-pulse">
                  <Activity className="h-4 w-4 mr-2" /> Live Updates
              </span>
              <Button>Download Report</Button>
          </div>
      </div>

      {/* Stats Cards - Interactive & Full Width */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 rounded-lg border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
                <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mt-2">KES 452,300</div>
            <div className="flex items-center text-xs mt-1 text-green-600 font-bold bg-green-50 w-fit px-2 py-0.5 rounded-md">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +20.1% <span className="text-muted-foreground font-normal ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 rounded-lg border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Orders</CardTitle>
             <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <ShoppingCart className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mt-2">+2350</div>
            <div className="flex items-center text-xs mt-1 text-green-600 font-bold bg-green-50 w-fit px-2 py-0.5 rounded-md">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +180.1% <span className="text-muted-foreground font-normal ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 rounded-lg border-none shadow-md">
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
             <div className="p-2 bg-orange-50 rounded-xl text-orange-600">
                <Users className="h-4 w-4" />
            </div>
           </CardHeader>
           <CardContent>
             <div className="text-3xl font-bold mt-2">+12,234</div>
            <div className="flex items-center text-xs mt-1 text-red-600 font-bold bg-red-50 w-fit px-2 py-0.5 rounded-md">
                <ArrowDownRight className="h-3 w-3 mr-1" /> -2.4% <span className="text-muted-foreground font-normal ml-1">vs last month</span>
            </div>
           </CardContent>
        </Card>
        
        <Card className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 rounded-lg border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Conversion</CardTitle>
              <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
                <TrendingUp className="h-4 w-4" />
            </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mt-2">3.2%</div>
               <div className="flex items-center text-xs mt-1 text-green-600 font-bold bg-green-50 w-fit px-2 py-0.5 rounded-md">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +1.2% <span className="text-muted-foreground font-normal ml-1">vs last month</span>
            </div>
            </CardContent>
        </Card>
      </div>

      {/* Charts Section - Full Width & Complex */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 rounded-lg border-none shadow-lg">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Revenue vs Order Volume trend analysis.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={revenueData}>
                <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#74C044" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#74C044" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `K${value}`}
                />
                <Tooltip 
                    cursor={{ stroke: '#74C044', strokeWidth: 1 }}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#74C044" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution - Pie Chart */}
        <Card className="col-span-3 rounded-lg border-none shadow-lg">
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
            <CardDescription>Distribution of revenue across product lines.</CardDescription>
          </CardHeader>
          <CardContent>
             <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={categoryData}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
                </PieChart>
             </ResponsiveContainer>
             <div className="flex flex-wrap justify-center gap-4 mt-4">
                 {categoryData.map((entry, index) => (
                     <div key={index} className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                         <span className="text-xs font-medium text-muted-foreground">{entry.name}</span>
                     </div>
                 ))}
             </div>
          </CardContent>
        </Card>
      </div>



      <div className="grid gap-6 md:grid-cols-2">
          {/* Top Products */}
          <Card className="rounded-lg border-none shadow-lg">
              <CardHeader>
                  <CardTitle>Top Selling Products</CardTitle>
                  <CardDescription>Best performing inventory items.</CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="space-y-4">
                      {[
                          { name: "Solar Inverter 5kVA", sold: 124, revenue: "KES 5.4M" },
                          { name: "200Ah Gel Battery", sold: 89, revenue: "KES 2.8M" },
                          { name: "Monocrystalline Panel", sold: 450, revenue: "KES 4.5M" },
                          { name: "Smart WiFi Switch", sold: 1200, revenue: "KES 1.2M" },
                      ].map((prod, i) => (
                          <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                  <div className="font-bold text-sm bg-muted h-8 w-8 rounded flex items-center justify-center text-muted-foreground">#{i+1}</div>
                                  <div>
                                      <p className="font-medium text-sm">{prod.name}</p>
                                      <p className="text-xs text-muted-foreground">{prod.sold} units sold</p>
                                  </div>
                              </div>
                              <div className="font-bold text-sm">{prod.revenue}</div>
                          </div>
                      ))}
                  </div>
              </CardContent>
          </Card>

          {/* Recent Sales List */}
          <Card className="rounded-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest financial activity from all channels.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="flex items-center justify-between p-2 hover:bg-muted/30 rounded-xl transition-colors">
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                    {i % 2 === 0 ? "JD" : "AM"}
                                </div>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-bold leading-none">{i % 2 === 0 ? "John Doe" : "Alice M"}</p>
                                    <p className="text-xs text-muted-foreground">{i % 2 === 0 ? "john@example.com" : "alice@example.com"}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                 <div className="font-bold">+KES {(1000 + i * 850).toFixed(0)}</div>
                                 <div className="text-[10px] text-muted-foreground uppercase">Verified</div>
                            </div>
                        </div>
                    ))}
                </div>
              </CardContent>
          </Card>
      </div>
    </div>
  )
}
