import * as React from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Search, Bell, Plus, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ShellProps {
  children: React.ReactNode;
  onLogout: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Shell({ children, onLogout, activeView, setActiveView }: ShellProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-[#111126]">
        <AppSidebar onLogout={onLogout} activeView={activeView} setActiveView={setActiveView} />
        <SidebarInset className="flex-1 flex flex-col min-w-0 bg-transparent">
          {/* Top Navbar */}
          <header className="h-16 border-b border-border/40 flex items-center justify-between px-6 sticky top-0 bg-[#111126]/80 backdrop-blur-md z-30">
            <div className="flex items-center gap-4 flex-1">
              <SidebarTrigger className="text-muted-foreground hover:text-white" />
              <div className="relative max-w-md w-full hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search system nodes..." 
                  className="pl-10 bg-input/40 border-border/30 h-9 w-full focus-visible:ring-primary/50"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button size="sm" className="hidden lg:flex bg-primary hover:bg-primary/90 text-white font-bold gap-2">
                <Plus className="h-4 w-4" /> NEW POST
              </Button>
              <div className="h-8 w-px bg-border/40 mx-2 hidden sm:block" />
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-[#111126]" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                <LayoutGrid className="h-5 w-5" />
              </Button>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
