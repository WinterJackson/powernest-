"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import {
    Battery,
    ChevronLeft,
    ChevronRight,
    ClipboardList,
    FileText,
    Home,
    LayoutDashboard,
    LayoutGrid,
    LifeBuoy,
    Lightbulb,
    LogOut,
    Package,
    Settings,
    Shield,
    ShieldCheck,
    ShoppingCart,
    Sun,
    Undo2,
    Users,
    Wrench,
    X,
    Zap
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

// ... existing categories and shopComponents ...
const categories = [
    { name: "Solar Panels", icon: Sun, href: "/products?cat=solar" },
    { name: "Inverters", icon: Zap, href: "/products?cat=inverters" },
    { name: "LED Lighting", icon: Lightbulb, href: "/products?cat=lighting" },
    { name: "Batteries", icon: ShieldCheck, href: "/products?cat=batteries" },
    { name: "Installation Kit", icon: Package, href: "/products?cat=kits" },
]

const mainLinks = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Orders", icon: ShoppingCart, href: "/orders" },
    { name: "Support", icon: LifeBuoy, href: "/support" },
    { name: "Settings", icon: Settings, href: "/settings" },
]

const supportLinks = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/support-staff" },
    { name: "Tickets", icon: FileText, href: "/support-staff/tickets" },
    { name: "Orders", icon: ClipboardList, href: "/support-staff/orders" },
    { name: "Customers", icon: Users, href: "/support-staff/customers" },
    { name: "Inventory", icon: Package, href: "/support-staff/inventory" },
    { name: "Installations", icon: Wrench, href: "/support-staff/installations" },
    { name: "Returns", icon: Undo2, href: "/support-staff/returns" },
    { name: "Settings", icon: Settings, href: "/support-staff/settings" },
]

const adminLinks = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { name: "Products", icon: Package, href: "/admin/products" },
    { name: "Orders", icon: ShoppingCart, href: "/admin/orders" },
    { name: "Users", icon: Users, href: "/admin/users" },
    { name: "Settings", icon: Settings, href: "/admin/settings" },
]

const shopComponents = [
    { title: "Eco-Friendly Switch", href: "/products/eco-switch", icon: Zap },
    { title: "Solar Inverter 5kVA", href: "/products/inverter-5kva", icon: Battery },
    { title: "LED Panel 12W", href: "/products/led-panel", icon: Lightbulb },
    { title: "Voltage Guard", href: "/products/voltage-guard", icon: Shield },
]

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (v: boolean) => void;
    isOpenMobile: boolean;
    setIsOpenMobile: (v: boolean) => void;
}

export const Sidebar = ({ isCollapsed, setIsCollapsed, isOpenMobile, setIsOpenMobile }: SidebarProps) => {
  const pathname = usePathname()
  const [isShopOpen, setIsShopOpen] = useState(false)
  const isSupport = pathname?.startsWith("/support-staff")
  const isAdmin = pathname?.startsWith("/admin")

  return (
    <>
        {/* Mobile Overlay */}
        {isOpenMobile && (
            <div 
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsOpenMobile(false)}
            />
        )}

        <aside 
        className={cn(
            "fixed top-28 bottom-4 z-50 transition-all duration-500 rounded-3xl border bg-background/95 backdrop-blur-xl shadow-xl flex flex-col group py-6 overflow-x-hidden",
            // Desktop width logic
            "lg:left-4", 
            isCollapsed ? "lg:w-20" : "lg:w-64",
            // Mobile logic
            "left-4 w-[calc(100%-2rem)] max-w-xs",
            isOpenMobile ? "translate-x-0" : "-translate-x-[120%] lg:translate-x-0"
        )}
        >
        {/* Close Button (Mobile) */}
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpenMobile(false)}
            className="lg:hidden absolute right-4 top-4"
        >
            <X className="h-5 w-5" />
        </Button>

        {/* Main Links */}
        <div className={cn("space-y-2 flex-1 overflow-y-auto scrollbar-hide overflow-x-hidden transition-all", isCollapsed ? "px-2" : "px-4")}>
             <div className={cn("mb-4 flex items-center justify-between px-2 transition-all min-h-[32px]", isCollapsed && "justify-center")}>
                <p className={cn(
                    "text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-all ml-1", 
                    isCollapsed && "hidden"
                )}>
                    Menu
                </p>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="hidden lg:flex h-8 w-8 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                >
                    {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </Button>
            </div>

            <nav className="space-y-1">
                {isSupport ? (
                    // Support Links
                    supportLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link key={link.href} href={link.href} onClick={() => setIsOpenMobile(false)}>
                                <Button 
                                    variant="ghost" 
                                    className={cn(
                                        "w-full rounded-xl px-3 py-6 transition-all overflow-hidden",
                                        isCollapsed ? "justify-center gap-0" : "justify-start gap-4",
                                        isActive ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90" : "hover:bg-primary/10 hover:text-primary"
                                    )}
                                >
                                    <link.icon className="h-5 w-5 flex-shrink-0" />
                                    <span className={cn("font-medium transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                                        {link.name}
                                    </span>
                                </Button>
                            </Link>
                        )
                    })
                ) : isAdmin ? (
                    // Admin Links
                    adminLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link key={link.href} href={link.href} onClick={() => setIsOpenMobile(false)}>
                                <Button 
                                    variant="ghost" 
                                    className={cn(
                                        "w-full rounded-xl px-3 py-6 transition-all overflow-hidden",
                                        isCollapsed ? "justify-center gap-0" : "justify-start gap-4",
                                        isActive ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90" : "hover:bg-primary/10 hover:text-primary"
                                    )}
                                >
                                    <link.icon className="h-5 w-5 flex-shrink-0" />
                                    <span className={cn("font-medium transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                                        {link.name}
                                    </span>
                                </Button>
                            </Link>
                        )
                    })
                ) : (
                    // Client Links
                    <>
                        {/* Home Link */}
                        <Link href="/" onClick={() => setIsOpenMobile(false)}>
                            <Button 
                                variant="ghost" 
                                className={cn(
                                    "w-full rounded-xl px-3 py-6 transition-all overflow-hidden",
                                    isCollapsed ? "justify-center gap-0" : "justify-start gap-4",
                                    pathname === "/" ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90" : "hover:bg-primary/10 hover:text-primary"
                                )}
                            >
                                <Home className="h-5 w-5 flex-shrink-0" />
                                <span className={cn("font-medium transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                                    Home
                                </span>
                            </Button>
                        </Link>

                        {/* Shop All - Mobile (Direct Link) */}
                        <div className="lg:hidden">
                            <Link href="/products" onClick={() => setIsOpenMobile(false)}>
                                <Button 
                                    variant="ghost" 
                                    className={cn(
                                        "w-full rounded-xl px-3 py-6 transition-all overflow-hidden",
                                        isCollapsed ? "justify-center gap-0" : "justify-start gap-4",
                                        pathname.startsWith("/products") ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90" : "hover:bg-primary/10 hover:text-primary"
                                    )}
                                >
                                    <LayoutGrid className="h-5 w-5 flex-shrink-0" />
                                    <span className={cn("font-medium transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                                        Shop All
                                    </span>
                                </Button>
                            </Link>
                        </div>

                        {/* Shop All - Desktop (Dropdown) */}
                        <div className="hidden lg:block">
                            <DropdownMenu onOpenChange={setIsShopOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Button 
                                        variant="ghost" 
                                        className={cn(
                                            "w-full rounded-xl px-3 py-6 transition-all overflow-hidden data-[state=open]:bg-primary/5",
                                            isCollapsed ? "justify-center gap-0" : "justify-start gap-4",
                                            pathname.startsWith("/products") ? "text-primary bg-primary/10" : "hover:bg-primary/10 hover:text-primary"
                                        )}
                                    >
                                        <LayoutGrid className="h-5 w-5 flex-shrink-0" />
                                        <span className={cn("font-medium transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                                            Shop All
                                        </span>
                                        {!isCollapsed && <ChevronRight className={cn("ml-auto h-4 w-4 transition-transform", isShopOpen && "rotate-90")} />}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent side="right" align="start" className="w-[300px] p-4 ml-4" sideOffset={10}>
                                    <DropdownMenuLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Featured</DropdownMenuLabel>
                                    <Link href="/products" onClick={() => setIsOpenMobile(false)}>
                                        <div className="mb-4 rounded-lg bg-gradient-to-br from-primary/80 to-primary p-4 text-white hover:shadow-lg transition-shadow cursor-pointer">
                                            <div className="text-lg font-bold mb-1">New Arrivals</div>
                                            <p className="text-xs text-white/90">Check out the latest solar tech.</p>
                                        </div>
                                    </Link>
                                    
                                    <DropdownMenuLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Refine By</DropdownMenuLabel>
                                    {shopComponents.map((item) => (
                                        <Link key={item.title} href={item.href} onClick={() => setIsOpenMobile(false)}>
                                            <DropdownMenuItem className="cursor-pointer gap-3 p-3 rounded-lg focus:bg-primary/5">
                                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <item.icon className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-sm">{item.title}</div>
                                                    <div className="text-[10px] text-muted-foreground line-clamp-1">{item.title}</div>
                                                </div>
                                            </DropdownMenuItem>
                                        </Link>
                                    ))}
                                    <DropdownMenuSeparator className="my-2" />
                                    <Link href="/products" onClick={() => setIsOpenMobile(false)}>
                                        <div className="w-full text-center text-xs font-bold text-primary hover:underline py-2 cursor-pointer">
                                            View All Products
                                        </div>
                                    </Link>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Other Main Links */}
                        {mainLinks.slice(1).map((link) => { // Skip Home since it's hardcoded above
                            const isActive = pathname === link.href
                            return (
                                <Link key={link.href} href={link.href} onClick={() => setIsOpenMobile(false)}>
                                    <Button 
                                        variant="ghost" 
                                        className={cn(
                                            "w-full rounded-xl px-3 py-6 transition-all overflow-hidden",
                                            isCollapsed ? "justify-center gap-0" : "justify-start gap-4",
                                            isActive ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90" : "hover:bg-primary/10 hover:text-primary"
                                        )}
                                    >
                                        <link.icon className="h-5 w-5 flex-shrink-0" />
                                        <span className={cn("font-medium transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                                            {link.name}
                                        </span>
                                    </Button>
                                </Link>
                            )
                        })}
                    </>
                )}
            </nav>

            {!isSupport && (
                <>
                    <div className="mt-8 mb-4">
                        <p className={cn(
                            "text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-all ml-3", 
                            isCollapsed && "hidden"
                        )}>
                            Quick Access
                        </p>
                    </div>
                    <nav className="space-y-1">
                        {categories.map((cat) => (
                            <Link key={cat.name} href={cat.href} onClick={() => setIsOpenMobile(false)}>
                                <Button 
                                    variant="ghost" 
                                    className={cn(
                                            "w-full rounded-xl px-3 py-6 transition-all overflow-hidden",
                                            isCollapsed ? "justify-center gap-0" : "justify-start gap-4",
                                            "hover:bg-primary/10 hover:text-primary"
                                        )}
                                >
                                    <cat.icon className="h-5 w-5 flex-shrink-0" />
                                    <span className={cn("font-medium transition-all duration-300 text-sm", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                                        {cat.name}
                                    </span>
                                </Button>
                            </Link>
                        ))}
                    </nav>
                </>
            )}
        </div>

        {/* Bottom Section: User & Logout */}
        <div className={cn("mt-auto space-y-2 pt-6 border-t border-muted/50 overflow-hidden", isCollapsed ? "px-2" : "px-4")}>
            <div 
                className={cn(
                    "flex items-center p-2 rounded-2xl bg-muted/30 transition-all overflow-hidden",
                    isCollapsed ? "justify-center gap-0" : "px-3 gap-3"
                )}
            >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs ring-2 ring-background flex-shrink-0">
                    JD
                </div>
                <div className={cn("transition-all duration-300 overflow-hidden", isCollapsed && "w-0 opacity-0 hidden")}>
                    <p className="text-xs font-bold leading-none mb-1 whitespace-nowrap">John Doe</p>
                    <p className="text-xs text-muted-foreground leading-none">Customer</p>
                </div>
            </div>
            
            <Button 
                variant="ghost" 
                className={cn(
                    "w-full rounded-xl px-3 py-6 text-red-500 hover:bg-red-50 hover:text-red-600 transition-all overflow-hidden",
                    isCollapsed ? "justify-center gap-0" : "justify-start gap-4"
                )}
            >
                <LogOut className="h-5 w-5 flex-shrink-0" />
                <span className={cn("font-medium transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                    Logout
                </span>
            </Button>
        </div>
        </aside>
    </>
  )
}
