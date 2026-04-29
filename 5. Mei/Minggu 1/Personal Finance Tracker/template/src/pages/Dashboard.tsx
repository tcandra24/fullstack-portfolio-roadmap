import { ArrowDown, ArrowUp, LayoutGrid, MoreVertical, ShoppingCart, Plane, Briefcase, PlaySquare, TrendingUp, PlusCircle, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const recentActivity = [
  { icon: ShoppingCart, label: "Whole Foods Market", sub: "Groceries • Today", amount: "-$142.50", type: "expense" },
  { icon: Plane, label: "Delta Airlines", sub: "Travel • Yesterday", amount: "-$450.00", type: "expense" },
  { icon: Briefcase, label: "Acme Corp Salary", sub: "Income • Oct 15", amount: "+$4,200.00", type: "income" },
  { icon: PlaySquare, label: "Netflix", sub: "Entertainment • Oct 12", amount: "-$15.99", type: "expense" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">October 2023</p>
          <h2 className="text-4xl font-extrabold tracking-tight">Financial Overview</h2>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 shadow-lg shadow-blue-600/20 px-6 rounded-lg flex items-center gap-2">
          <PlusCircle className="w-5 h-5" />
          Add Transaction
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Hero Card */}
        <div className="md:col-span-8 bg-blue-600 rounded-xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[260px] text-white shadow-2xl shadow-blue-600/30">
          <div className="absolute -right-24 -top-24 w-80 h-80 bg-white rounded-full blur-[100px] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-2">Total Balance</p>
              <div className="text-[64px] leading-none font-black tracking-tighter">$124,592.00</div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg backdrop-blur-md">
              <Wallet className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="relative z-10 flex gap-12 mt-auto pt-8 border-t border-white/10">
            <div>
              <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mb-1.5 opacity-60">Monthly Yield</p>
              <p className="text-xl font-black flex items-center gap-1.5">
                <TrendingUp className="w-5 h-5" /> +$1,240.50
              </p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mb-1.5 opacity-60">Target Goal</p>
              <p className="text-xl font-black">68%</p>
            </div>
          </div>
        </div>

        {/* Mini Cards */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <Card className="border-none shadow-sm shadow-black/5 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-5">
              <div className="h-14 w-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                <ArrowDown className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Income</p>
                <p className="text-2xl font-black mt-1">$8,450.00</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm shadow-black/5 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-5">
              <div className="h-14 w-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                <ArrowUp className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Expenses</p>
                <p className="text-2xl font-black mt-1">$3,120.00</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Column */}
        <Card className="md:col-span-7 border-none shadow-sm shadow-black/5 p-8 flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-black">Cash Flow</h3>
            <select className="bg-slate-100 border-none text-slate-600 font-bold text-[10px] uppercase tracking-widest rounded-md py-1.5 px-3 outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer">
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="flex-1 relative flex items-end gap-6 mt-4">
            <div className="absolute left-0 h-full flex flex-col justify-between text-[10px] font-bold text-slate-300 w-8">
              <span>10k</span>
              <span>5k</span>
              <span>0</span>
            </div>
            
            <div className="absolute left-10 right-0 h-full flex flex-col justify-between pt-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-full h-px bg-slate-100" />
              ))}
            </div>

            <div className="ml-10 flex-1 flex justify-around items-end h-[calc(100%-24px)] pb-1 relative z-10">
              {[60, 80, 45, 90].map((h, i) => (
                <div key={i} className="flex gap-2 items-end group">
                  <div 
                    className="w-5 bg-blue-600 rounded-t-sm transition-all duration-500 delay-100 group-hover:bg-blue-700" 
                    style={{ height: `${h}%` }} 
                  />
                  <div 
                    className="w-5 bg-red-500 rounded-t-sm transition-all duration-500 delay-200 group-hover:bg-red-600" 
                    style={{ height: `${h * 0.4}%` }} 
                  />
                </div>
              ))}
            </div>
            
            <div className="absolute left-10 right-0 -bottom-6 flex justify-around text-[10px] font-bold text-slate-400">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="md:col-span-5 border-none shadow-sm shadow-black/5 p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-black">Recent Activity</h3>
            <Button variant="link" className="text-blue-600 font-bold p-0">View All</Button>
          </div>

          <div className="space-y-2">
            {recentActivity.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer group active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">{item.label}</p>
                    <p className="text-[10px] font-medium text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
                <p className={cn(
                  "text-sm font-black tracking-tight",
                  item.type === "income" ? "text-green-600" : "text-slate-900"
                )}>
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
