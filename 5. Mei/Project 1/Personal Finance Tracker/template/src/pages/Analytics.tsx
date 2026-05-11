import { Lightbulb, TrendingDown, AlertTriangle, TrendingUp, PiggyBank, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";

const spendingData = [
  { name: "Jan", spend: 2000, income: 3000 },
  { name: "Feb", spend: 3500, income: 3000 },
  { name: "Mar", spend: 3000, income: 3500 },
  { name: "Apr", spend: 5000, income: 3200 },
  { name: "May", spend: 4000, income: 4000 },
  { name: "Jun", spend: 6000, income: 5000 },
];

const categoryPieData = [
  { name: "Housing", value: 35, color: "#2563eb" },
  { name: "Food & Dining", value: 25, color: "#10b981" },
  { name: "Transportation", value: 20, color: "#93c5fd" },
  { name: "Entertainment", value: 20, color: "#34d399" },
];

export default function Analytics() {
  return (
    <div className="space-y-10 pb-12">
      <header>
        <h2 className="text-4xl font-black tracking-tight">Financial Analytics</h2>
        <p className="text-slate-500 font-medium mt-2">Insights and trends for your financial health.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Spending Trends */}
        <Card className="lg:col-span-2 border-none shadow-sm shadow-black/5 p-8 flex flex-col">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h3 className="text-2xl font-black">Spending Trends</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Last 6 Months</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Spending</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Income</span>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 700 }}
                  dx={-10}
                  tickFormatter={(v) => `$${v/1000}k`}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="spend" 
                  stroke="#2563eb" 
                  strokeWidth={4} 
                  dot={{ r: 4, strokeWidth: 2, fill: "#fff" }} 
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#10b981" 
                  strokeWidth={4} 
                  strokeDasharray="8 8"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Smart Insights */}
        <Card className="bg-slate-900 border-none shadow-sm shadow-black/5 p-8 flex flex-col text-white">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 backdrop-blur-md">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black">Smart Insights</h3>
          </div>

          <div className="space-y-6 flex-1">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <TrendingDown className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm">Dining Out Decreased</h4>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">You spent 15% less on restaurants this month. Keep it up!</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm">Subscription Alert</h4>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">You have 3 inactive subscriptions costing $45/mo. Consider canceling.</p>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="mt-8 w-full border-white/10 bg-white/5 text-white font-bold hover:bg-white hover:text-slate-900 transition-all duration-300">
            View All Insights
          </Button>
        </Card>

        {/* Category Breakdown */}
        <Card className="border-none shadow-sm shadow-black/5 p-8 lg:col-span-1 min-h-[460px]">
          <h3 className="text-2xl font-black mb-1">Spending by Category</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">June 2023</p>
          
          <div className="flex justify-center mb-8 h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryPieData}
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <p className="text-3xl font-black tracking-tight">$4,250</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Total Spent</p>
            </div>
          </div>

          <div className="space-y-4">
            {categoryPieData.map((cat, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-sm font-bold text-slate-600">{cat.name}</span>
                </div>
                <span className="text-sm font-black italic">{cat.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Card className="border-none shadow-sm shadow-black/5 p-6 space-y-4">
            <TrendingUp className="w-10 h-10 text-green-500" />
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Income Growth</p>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-3xl font-black">+8.4%</span>
                <span className="text-xs font-bold text-green-500">vs last yr</span>
              </div>
            </div>
          </Card>

          <Card className="border-none shadow-sm shadow-black/5 p-6 space-y-6">
            <div className="flex flex-col gap-4">
              <PiggyBank className="w-10 h-10 text-blue-600" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Savings Rate</p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-black">22.5%</span>
                  <span className="text-xs font-bold text-slate-400">of income</span>
                </div>
              </div>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-[22.5%] rounded-full" />
            </div>
          </Card>

          <Card className="border-none shadow-sm shadow-black/5 p-6 space-y-6">
            <div className="flex flex-col gap-4">
              <Wallet className="w-10 h-10 text-yellow-500" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Discretionary</p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-black">$1,240</span>
                  <span className="text-xs font-bold text-slate-400">remaining</span>
                </div>
              </div>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 w-[65%] rounded-full" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { Savings } from "lucide-react";
