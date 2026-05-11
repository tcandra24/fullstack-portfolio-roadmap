import { Search, Bell, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-slate-200 z-40 flex items-center justify-between px-6">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 font-bold" />
        <Input 
          className="pl-10 h-10 bg-slate-50 border-none rounded-full placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-blue-500 transition-all font-sans" 
          placeholder="Search for transactions, reports..." 
        />
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-slate-500 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
          <Bell className="w-5 h-5 font-bold" />
        </Button>
        <Button variant="ghost" size="icon" className="text-slate-500 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
          <Settings className="w-5 h-5 font-bold" />
        </Button>
        <div className="w-px h-6 bg-slate-200 mx-2" />
        <div className="flex items-center gap-3 pl-2">
          <Avatar className="h-9 w-9 border-2 border-white shadow-sm ring-1 ring-slate-100">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnfholyImNSb0dM5VaMdg-AK6UWpR_C6Xp19YnluYx1pDPlrAs9hqswXiGg6OWkVwHoIZCxY6mqbpDrhIiF78Va6oV1fwO2OOKgLyS0mt8k1BfbRJ4JlqS3Vzfq3R1o6acDndIOjMJ0DyVSqAn-ZXXsrh7Du1gSPDn2evTeD5XSuvnEQbzPC16w5WOxhGIpesR_EIuTrFlJxucAn_44mTK2eKOI0C6o84tpSLnrqlHwQZr20Ae1Tv5KGPeZyQ-wZyZXYxZPoKvIbg" />
            <AvatarFallback className="bg-blue-600 text-white font-bold text-xs">US</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
