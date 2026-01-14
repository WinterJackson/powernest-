"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    ChevronLeft,
    ChevronRight,
    LogOut,
    LucideIcon,
    X
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface SidebarLink {
    name: string
    icon: LucideIcon
    href: string
}

interface UnifiedSidebarProps {
    links: SidebarLink[]
    secondaryLinks?: SidebarLink[] // For "Categories" or secondary grouping
    secondaryLabel?: string
    isCollapsed: boolean
    setIsCollapsed: (v: boolean) => void
    isOpenMobile: boolean
    setIsOpenMobile: (v: boolean) => void
    userType: "Customer" | "Admin" | "Support Agent"
    userInitials: string
    userName: string
    accentColor?: string // Optional override class for text/bg colors if needed
    onLogout?: () => void
    brandLogo?: React.ReactNode // Custom Logo Area
}

export const UnifiedSidebar = ({ 
    links, 
    secondaryLinks, 
    secondaryLabel,
    isCollapsed, 
    setIsCollapsed, 
    isOpenMobile, 
    setIsOpenMobile,
    userType,
    userInitials,
    userName,
    accentColor = "text-primary",
    onLogout,
    brandLogo
}: UnifiedSidebarProps) => {
  const pathname = usePathname()

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
            "fixed top-4 bottom-4 z-50 transition-all duration-500 rounded-2xl border bg-background/95 backdrop-blur-xl shadow-xl flex flex-col group py-6 overflow-x-hidden",
            // Desktop width logic
            "lg:left-4", 
            isCollapsed ? "lg:w-20" : "lg:w-72", // Standardized to 72 (18rem) for generic usage
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

        {/* Logo Section */}
        <div className={cn("px-6 mb-6 transition-all duration-300", isCollapsed ? "opacity-0 invisible h-0 mb-0" : "opacity-100")}>
            {brandLogo}
        </div>

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
                {links.map((link) => {
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
// In all instances of conditional text rendering:
// Change: isCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100"
// To: isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100"

                                <link.icon className="h-5 w-5 flex-shrink-0" />
                                <span className={cn("font-medium transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                                    {link.name}
                                </span>
                            </Button>
                        </Link>
                    )
                })}
            </nav>

            {secondaryLinks && secondaryLinks.length > 0 && (
                <>
                <div className="mt-8 mb-4">
                    <p className={cn(
                        "text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-all ml-3", 
                        isCollapsed && "hidden"
                    )}>
                        {secondaryLabel || "Other"}
                    </p>
                </div>
                <nav className="space-y-1">
                    {secondaryLinks.map((link) => (
                        <Link key={link.name} href={link.href} onClick={() => setIsOpenMobile(false)}>
                            <Button 
                                variant="ghost" 
                                className={cn(
                                        "w-full rounded-xl px-3 py-6 transition-all overflow-hidden",
                                        isCollapsed ? "justify-center gap-0" : "justify-start gap-4",
                                        "hover:bg-primary/10 hover:text-primary"
                                    )}
                            >
                                <link.icon className="h-5 w-5 flex-shrink-0" />
                                <span className={cn("font-medium transition-all duration-300 text-sm", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>
                                    {link.name}
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
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ring-2 ring-background flex-shrink-0 bg-primary/20", accentColor)}>
                    {userInitials}
                </div>
                <div className={cn("transition-all duration-300 overflow-hidden", isCollapsed && "lg:w-0 lg:opacity-0 lg:hidden")}>
                    <p className="text-xs font-bold leading-none mb-1 whitespace-nowrap">{userName}</p>
                    <p className="text-[10px] text-muted-foreground leading-none">{userType}</p>
                </div>
            </div>
            
            <Button 
                variant="ghost" 
                onClick={onLogout}
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
