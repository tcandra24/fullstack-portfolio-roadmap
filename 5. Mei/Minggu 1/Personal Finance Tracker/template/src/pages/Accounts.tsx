import { Landmark, Link, TrendingUp, MoreVertical, RefreshCw, PiggyBank, CreditCard, LineChart, Plus, Wallet, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const accounts = [
  { icon: Landmark, label: "Chase Checking", sub: "Bank •••• 4092", balance: "$12,450.00", type: "Checking", sync: "Just now", color: "text-blue-600" },
  { icon: PiggyBank, label: "High-Yield Savings", sub: "Bank •••• 9912", balance: "$85,200.50", type: "Savings", sync: "2 hrs ago", color: "text-blue-600" },
  { icon: CreditCard, label: "Amex Platinum", sub: "Credit •••• 1005", balance: "-$3,450.25", type: "Credit Card", sync: "5 mins ago", color: "text-red-500", limit: "$20,000 Limit", bar: 15 },
  { icon: LineChart, label: "Vanguard Brokerage", sub: "Investment •••• 7741", balance: "$30,391.75", type: "Investment", sync: "1 day ago", color: "text-blue-600", trend: "+$450.00 Today" },
];

export default function Accounts() {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tight">Accounts</h2>
          <p className="text-slate-500 font-medium mt-2">Manage your linked financial institutions and balances.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 font-bold gap-2 h-12 px-6 shadow-lg shadow-blue-600/20 whitespace-nowrap">
          <Link className="w-5 h-5" />
          Link New Account
        </Button>
      </header>

      {/* Net Worth Summary */}
      <div className="bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-slate-200/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Wallet className="w-8 h-8" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Linked Balance</p>
            <h3 className="text-4xl font-black tracking-tighter mt-1">$124,592.00</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm text-green-600 font-bold text-sm">
          <TrendingUp className="w-4 h-4" />
          +2.4% this month
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accounts.map((acc, i) => (
          <Card key={i} className="border-none shadow-sm shadow-black/5 hover:shadow-md transition-all duration-300 cursor-pointer group active:scale-[0.98]">
            <CardContent className="p-8 space-y-8">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <acc.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{acc.label}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{acc.sub}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-slate-300 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>

              <div>
                <p className={cn("text-3xl font-black tracking-tight", acc.color)}>{acc.balance}</p>
                {acc.trend ? (
                  <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest mt-1.5 flex items-center gap-1">
                    <ArrowUp className="w-3.5 h-3.5" /> {acc.trend}
                  </p>
                ) : (
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">Available Balance</p>
                )}
              </div>

              {acc.limit && (
                <div className="space-y-2">
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full" style={{ width: `${acc.bar}%` }} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{acc.limit}</p>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                  {acc.type}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5" /> {acc.sync}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}

        <button className="bg-transparent rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 hover:bg-white hover:border-blue-600 group transition-all duration-300 min-h-[260px]">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
            <Plus className="w-8 h-8" />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold text-slate-900">Add Account</h4>
            <p className="text-sm font-medium text-slate-400 max-w-[200px] mt-2 leading-relaxed">
              Link a new bank, credit card, or investment account.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
