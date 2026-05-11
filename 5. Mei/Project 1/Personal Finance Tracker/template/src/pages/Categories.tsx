import { Home, Utensils, Car, Film, Zap, Plus, MoreVertical, CalendarDays, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const categoryData = [
  { icon: Home, label: "Housing", spent: 2450, limit: 2500, color: "bg-blue-600" },
  { icon: Utensils, label: "Food", spent: 840.50, limit: 800, color: "bg-red-500", over: 40.50 },
  { icon: Car, label: "Transport", spent: 120, limit: 300, color: "bg-green-500" },
  { icon: Film, label: "Entertainment", spent: 215.25, limit: 400, color: "bg-blue-600" },
  { icon: Zap, label: "Utilities", spent: 345, limit: 350, color: "bg-blue-600" },
];

export default function Categories() {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tight">Categories</h2>
          <p className="text-slate-500 font-medium mt-2">Track and manage your monthly spending limits.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="font-bold gap-2 px-4 shadow-sm border-slate-200">
            <CalendarDays className="w-4 h-4 text-slate-400" />
            October 2023
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 font-bold gap-2 shadow-lg shadow-blue-600/20">
            <Edit3 className="w-4 h-4" />
            Manage Categories
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.map((cat, i) => {
          const percent = Math.min((cat.spent / cat.limit) * 100, 100);
          return (
            <Card key={i} className="border-none shadow-sm shadow-black/5 hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">{cat.label}</h3>
                  </div>
                  <Button variant="ghost" size="icon" className="text-slate-300 hover:text-slate-900 rounded-full">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black tracking-tight">${cat.spent.toLocaleString()}</span>
                    <span className="text-slate-400 font-bold text-sm">/ ${cat.limit.toLocaleString()}</span>
                  </div>
                  
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all duration-1000", cat.over ? "bg-red-500" : cat.color)}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    {cat.over ? (
                      <p className="text-[10px] font-bold text-red-500">Over budget by ${cat.over.toFixed(2)}</p>
                    ) : (
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {percent.toFixed(0)}% of budget
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Add New Category */}
        <button className="bg-transparent rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 hover:bg-white hover:border-blue-600 group transition-all duration-300 min-h-[200px]">
          <div className="h-12 w-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Plus className="w-6 h-6" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-slate-900">Add Category</h3>
            <p className="text-sm font-medium text-slate-400 max-w-[160px] mt-1 line-clamp-2">Create a new custom budget category.</p>
          </div>
        </button>
      </div>
    </div>
  );
}
