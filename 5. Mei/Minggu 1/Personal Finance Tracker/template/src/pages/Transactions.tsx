import { Search, Calendar, Landmark, Filter, FileDown, Plus, ChevronLeft, ChevronRight, X, MoreVertical, ShoppingBag, Fuel, Banknote, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const transactions = [
  { id: 1, icon: ShoppingBag, label: "Whole Foods Market", date: "Today, 2:45 PM", category: "Groceries", account: "Chase Sapphire", amount: "-$142.50", accColor: "bg-blue-600" },
  { id: 2, icon: Fuel, label: "Chevron Station", date: "Yesterday, 9:15 AM", category: "Transport", account: "Chase Sapphire", amount: "-$45.00", accColor: "bg-blue-600" },
  { id: 3, icon: Banknote, label: "Acme Corp Payroll", date: "Oct 24, 2023", category: "Income", account: "BofA Checking", amount: "+$3,250.00", accColor: "bg-green-500", type: "income" },
  { id: 4, icon: Coffee, label: "Starbucks", date: "Oct 23, 2023", category: "Dining", account: "Chase Sapphire", amount: "-$5.40", accColor: "bg-blue-600" },
];

export default function Transactions() {
  return (
    <div className="space-y-10 pb-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tight">Transactions</h2>
          <p className="text-slate-500 font-medium mt-2">Review and manage your financial activity.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="font-bold gap-2 p-4 h-11 border-slate-200">
            <FileDown className="w-4 h-4" /> Export CSV
          </Button>
          <Button className="md:hidden bg-blue-600 hover:bg-blue-700 font-bold gap-2 h-11 px-6 shadow-lg shadow-blue-600/20">
            <Plus className="w-5 h-5" /> New
          </Button>
        </div>
      </header>

      {/* Filters Card */}
      <Card className="border-none shadow-sm shadow-black/5 p-6 flex flex-col lg:flex-row gap-6 items-end">
        <div className="w-full lg:w-1/3 space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input className="pl-10 h-11 bg-slate-50 border-none rounded-lg" placeholder="Merchant, category, or note" />
          </div>
        </div>
        <div className="w-full lg:w-1/4 space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date Range</label>
          <Button variant="outline" className="w-full justify-start h-11 font-bold gap-3 border-slate-200">
            <Calendar className="w-4 h-4 text-slate-400" /> This Month
          </Button>
        </div>
        <div className="w-full lg:w-1/4 space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account</label>
          <Button variant="outline" className="w-full justify-start h-11 font-bold gap-3 border-slate-200">
            <Landmark className="w-4 h-4 text-slate-400" /> All Accounts
          </Button>
        </div>
        <Button variant="outline" className="lg:w-auto h-11 font-bold gap-3 border-slate-200">
          <Filter className="w-4 h-4" /> More Filters
        </Button>
      </Card>

      {/* Active Chips */}
      <div className="flex flex-wrap gap-3">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full font-bold text-[10px] uppercase tracking-wider">
          Date: This Month
          <X className="w-3 h-3 cursor-pointer" />
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full font-bold text-[10px] uppercase tracking-wider">
          Type: Expenses
          <X className="w-3 h-3 cursor-pointer" />
        </span>
        <Button variant="link" className="text-blue-600 font-bold p-0 ml-4">Clear All</Button>
      </div>

      {/* Table Section */}
      <Card className="border-none shadow-sm shadow-black/5 rounded-2xl overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="hover:bg-transparent border-slate-100">
              <TableHead className="w-[400px] h-14 font-bold text-[10px] text-slate-400 uppercase tracking-wider px-8">Transaction Details</TableHead>
              <TableHead className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">Category</TableHead>
              <TableHead className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">Account</TableHead>
              <TableHead className="text-right font-bold text-[10px] text-slate-400 uppercase tracking-wider px-8">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id} className="h-20 border-slate-100 group cursor-pointer hover:bg-slate-50 transition-colors">
                <TableCell className="px-8 flex items-center gap-5 pt-5">
                  <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm">
                    <tx.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{tx.label}</h4>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">{tx.date}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-bold text-[10px] uppercase tracking-wider">
                    {tx.category}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-600 capitalize">
                    <div className={cn("w-2 h-2 rounded-full", tx.accColor)} />
                    {tx.account}
                  </div>
                </TableCell>
                <TableCell className="text-right px-8">
                  <span className={cn(
                    "text-lg font-black tracking-tight",
                    tx.type === "income" ? "text-green-600" : "text-slate-900"
                  )}>
                    {tx.amount}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="p-6 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 1 to 10 of 245 entries</span>
          <div className="flex items-center gap-1.5">
            <Button variant="outline" size="icon" className="w-9 h-9 border-slate-200">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button className="w-9 h-9 bg-blue-600 font-bold p-0">1</Button>
            <Button variant="outline" className="w-9 h-9 border-slate-200 font-bold p-0">2</Button>
            <Button variant="outline" className="w-9 h-9 border-slate-200 font-bold p-0">3</Button>
            <Button variant="outline" size="icon" className="w-9 h-9 border-slate-200">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
