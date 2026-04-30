import * as React from "react"
import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Users,
  Settings,
  LogOut,
  PlusCircle,
  Search,
  Bell,
  User
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AppSidebarProps {
  onLogout: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
}

export function AppSidebar({ onLogout, activeView, setActiveView }: AppSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'posts', label: 'Manage Posts', icon: FileText },
    { id: 'categories', label: 'Categories', icon: FolderTree },
    { id: 'users', label: 'User Directory', icon: Users },
  ]

  return (
    <Sidebar className="border-r border-border/50 bg-[#0c0c21]">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm bg-white/20 animate-pulse" />
          </div>
          <div>
            <h2 className="font-heading text-lg font-black tracking-tight text-white italic">
              VIBRANT<span className="text-primary italic-none">PULSE</span>
            </h2>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Admin v2</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 mb-2">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-3 gap-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.id)}
                    isActive={activeView === item.id}
                    className={`
                      h-11 px-4 rounded-lg flex items-center gap-3 transition-all duration-200
                      ${activeView === item.id 
                        ? "bg-primary/10 text-primary border-l-2 border-primary" 
                        : "text-muted-foreground hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <item.icon className={`h-5 w-5 ${activeView === item.id ? "text-primary" : ""}`} />
                    <span className="font-medium">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="px-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 mb-2">
            Secondary
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-3 gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveView('profile')}
                  isActive={activeView === 'profile'}
                  className="h-11 px-4 rounded-lg flex items-center gap-3 text-muted-foreground hover:bg-white/5 hover:text-white"
                >
                  <Settings className="h-5 w-5" />
                  <span className="font-medium">System Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-11 px-4 rounded-lg flex items-center gap-3 text-muted-foreground hover:bg-white/5 hover:text-white">
                  <Bell className="h-5 w-5" />
                  <span className="font-medium">Notifications</span>
                  <span className="ml-auto bg-primary text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold">12</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 mt-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 w-full p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
              <Avatar className="h-9 w-9 border-2 border-primary/20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-primary/20 text-primary font-bold">AD</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left hidden lg:block overflow-hidden">
                <p className="text-sm font-bold text-white truncate">Administrator</p>
                <p className="text-[10px] text-muted-foreground truncate uppercase font-medium">Root Access</p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#1d1d33] border-border text-white" align="end" side="right">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem className="focus:bg-primary/20 focus:text-primary cursor-pointer">
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-primary/20 focus:text-primary cursor-pointer">
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem 
              onClick={onLogout}
              className="text-red-400 focus:bg-red-400/10 focus:text-red-400 cursor-pointer"
            >
              <LogOut className="mr-2 h-4 w-4" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
