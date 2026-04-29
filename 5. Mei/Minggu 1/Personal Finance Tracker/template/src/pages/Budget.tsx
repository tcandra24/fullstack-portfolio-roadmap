import { Wallet, TrendingUp, ShoppingCart, Utensils, Film, Zap, Car, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const activeBudgets = [
  { icon: ShoppingCart, label: "Groceries", spent: 420, limit: 600, status: "On Track", statusColor: "bg-green-100 text-green-700", barColor: "bg-green-500" },
  { icon: Utensils, label: "Dining Out", spent: 380, limit: 400, status: "Nearing Limit", statusColor: "bg-slate-100 text-blue-600", barColor: "bg-blue-600" },
  { icon: Film, label: "Entertainment", spent: 320, limit: 250, status: "Exceeded", statusColor: "bg-red-100 text-red-600", barColor: "bg-red-500", over: true },
  { icon: Zap, label: "Utilities", spent: 150, limit: 200, status: "On Track", statusColor: "bg-green-100 text-green-700", barColor: "bg-green-500" },
  { icon: Car, label: "Transportation", spent: 120, limit: 300, status: "On Track", statusColor: "bg-green-100 text-green-700", barColor: "bg-green-500" },
];

export default function Budget() {
  return (
    <div className="space-y-10 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black tracking-tight">Budgets</h2>
          <p className="text-slate-500 font-medium mt-2">Manage your spending limits and track your financial goals.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 font-bold gap-2 h-12 px-6 shadow-lg shadow-blue-600/20">
          <PlusCircle className="w-5 h-5" />
          Create New Budget
        </Button>
      </header>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-none shadow-sm shadow-black/5 p-8 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-6">
            <Wallet className="w-4 h-4" />
            Total Monthly Limit
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black">$5,400.00</span>
            <span className="text-slate-400 font-bold text-sm">/ month</span>
          </div>
        </Card>

        <Card className="border-none shadow-sm shadow-black/5 p-8">
          <div className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-4">
            <TrendingUp className="w-4 h-4" />
            Total Spent (75%)
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-black tracking-tight">$4,050.00</span>
            <span className="text-slate-400 font-bold text-sm">of $5,400</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-3/4 rounded-full" />
          </div>
          <p className="text-right text-[10px] font-bold text-slate-400 mt-3 uppercase tracking-widest">12 days remaining</p>
        </Card>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-black">Active Budgets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeBudgets.map((budget, i) => {
            const percent = Math.min((budget.spent / budget.limit) * 100, 100);
            return (
              <Card key={i} className={cn(
                "border-none shadow-sm shadow-black/5 hover:shadow-md transition-all duration-300 relative overflow-hidden",
                budget.over && "ring-1 ring-red-500"
              )}>
                {budget.over && <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />}
                <CardContent className="p-8 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                        <budget.icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold">{budget.label}</h4>
                    </div>
                    <span className={cn("px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider", budget.statusColor)}>
                      {budget.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <div className={cn("text-2xl font-black tracking-tight", budget.over ? "text-red-600" : "text-slate-900")}>
                        ${budget.spent.toFixed(2)}
                      </div>
                      <div className="text-slate-400 font-bold text-sm mb-1">/ ${budget.limit.toFixed(2)}</div>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full transition-all duration-1000", budget.barColor)} style={{ width: `${percent}%` }} />
                    </div>
                  </div>

                  <p className={cn("text-[10px] font-bold uppercase tracking-widest", budget.over ? "text-red-500" : "text-slate-400")}>
                    {budget.over ? `-$${(budget.spent - budget.limit).toFixed(2)} over limit` : `$${(budget.limit - budget.spent).toFixed(2)} left`}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
