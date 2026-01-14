"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const Header = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isSupport = pathname?.startsWith("/support-staff")
  const isAdmin = pathname?.startsWith("/admin")
  const isStaffOrAdmin = isSupport || isAdmin

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-2 sm:p-4">
      <header 
        className={cn(
          "w-full transition-all duration-300 rounded-2xl border bg-background/80 backdrop-blur-xl shadow-lg",
          isScrolled ? "scale-[0.99] py-2" : "py-3"
        )}
      >
        <div className="px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
              {/* Mobile Menu Toggle */}
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
                 <Menu className="h-6 w-6" />
              </Button>

              {/* Logo */}
              <Link href={isAdmin ? "/admin" : isSupport ? "/support-staff" : "/"} className="flex items-center gap-2 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                  P
                </div>
                <span className="text-lg sm:text-xl font-bold tracking-tight hidden sm:block">
                  Power<span className="text-primary">Nest</span>
                </span>
              </Link>
          </div>

          {/* Actions & Right-Aligned Search */}
          <div className="flex items-center gap-1 sm:gap-3 flex-1 justify-end">
            
            {/* Search Bar - Desktop (Right side) */}
            <div className="hidden md:flex relative w-full max-w-sm mr-2 transition-all">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder={isStaffOrAdmin ? "Search..." : "Search products..."}
                  className="w-full pl-10 rounded-full border-muted bg-muted/30 focus:bg-background transition-all focus:w-full"
                />
            </div>

            {!isStaffOrAdmin && (
                <div className="hidden lg:flex items-center gap-2">
                    <Link href="/login">
                        <Button variant="ghost" className="rounded-full font-medium">Log In</Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="rounded-full px-6 font-semibold shadow-md shadow-primary/20">Sign Up</Button>
                    </Link>
                </div>
            )}

            <ThemeToggle />
            
            {!isStaffOrAdmin && (
                <Link href="/cart">
                    <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-white flex items-center justify-center border-2 border-background">
                            0
                        </span>
                    </Button>
                </Link>
            )}

            <Link href={isAdmin ? "/admin/settings" : isSupport ? "/support-staff/settings" : "/profile"}>
                <Button variant="ghost" size="icon" className="rounded-full md:flex hidden">
                    <User className="h-5 w-5" />
                </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
