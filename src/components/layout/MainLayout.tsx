"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F4F9EB] text-foreground font-sans">
      <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
      
      <div className="flex w-full pt-24 sm:pt-32 pb-24 px-4 sm:px-6"> 
        {/* Dynamic Sidebar Spacer */}
        <div 
            className={cn(
                "hidden lg:block flex-shrink-0 transition-all duration-500",
                isSidebarCollapsed ? "w-24" : "w-72" 
            )} 
        /> 
        
        <Sidebar 
            isCollapsed={isSidebarCollapsed} 
            setIsCollapsed={setIsSidebarCollapsed}
            isOpenMobile={isMobileMenuOpen}
            setIsOpenMobile={setIsMobileMenuOpen}
        />
        
        <main className="flex-1 w-full min-w-0 animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out">
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>

      {/* Removed MobileNav as per request */}
    </div>
  )
}
