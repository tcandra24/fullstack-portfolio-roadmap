import { NavLink } from "react-router-dom";
import { LayoutDashboard, LayoutGrid, Wallet, ReceiptText, BarChart3, Landmark, HelpCircle, Settings, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: LayoutGrid, label: "Categories", path: "/categories" },
  { icon: Wallet, label: "Budget", path: "/budget" },
  { icon: ReceiptText, label: "Transactions", path: "/transactions" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Landmark, label: "Accounts", path: "/accounts" },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-white z-50 flex flex-col p-4 gap-2">
      <div className="px-2 py-4 mb-4">
        <h1 className="text-xl font-extrabold text-blue-600 font-sans">FinanceTracker</h1>
        <p className="text-slate-500 text-xs mt-1 font-medium italic">Wealth Management</p>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group active:scale-95",
                isActive
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-slate-100">
        <NavLink
          to="/help"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200 active:scale-95"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm">Help</span>
        </NavLink>
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200 active:scale-95"
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm">Settings</span>
        </NavLink>
        
        <Button className="mt-4 w-full flex items-center justify-center gap-2 font-bold" size="lg">
          <PlusCircle className="w-4 h-4" />
          Add Transaction
        </Button>
      </div>
    </aside>
  );
}
