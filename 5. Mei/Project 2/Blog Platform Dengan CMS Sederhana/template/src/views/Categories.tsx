import * as React from 'react';
import { FolderTree, Plus, Search, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  { name: 'Technology', count: 42, color: 'from-primary/20 to-primary/0', border: 'border-primary/30' },
  { name: 'Design', count: 28, color: 'from-secondary/20 to-secondary/0', border: 'border-secondary/30' },
  { name: 'DevOps', count: 18, color: 'from-tertiary/20 to-tertiary/0', border: 'border-tertiary/30' },
  { name: 'Architecture', count: 12, color: 'from-white/10 to-white/0', border: 'border-white/20' },
  { name: 'Visual Arts', count: 15, color: 'from-primary/20 to-primary/0', border: 'border-primary/30' },
  { name: 'Future Systems', count: 9, color: 'from-secondary/20 to-secondary/0', border: 'border-secondary/30' },
];

export default function Categories() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white italic uppercase font-heading tracking-tight">
            Node <span className="text-secondary italic-none">Clusters</span>
          </h1>
          <p className="text-muted-foreground uppercase text-[10px] tracking-widest font-bold">Organizational hierarchies of the pulse</p>
        </div>
        <Button className="bg-secondary hover:bg-secondary/90 text-[#002118] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(36,255,205,0.3)]">
          <Plus className="mr-2 h-4 w-4" /> NEW CLUSTER
        </Button>
      </div>

      <div className="relative max-w-sm mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search clusters..." className="pl-10 bg-white/5 border-border/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <Card key={i} className={`bg-card/40 backdrop-blur-sm border-0 border-l-4 ${cat.border} relative overflow-hidden group hover:scale-[1.02] transition-all hover:bg-card/60 cursor-pointer`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-50`} />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors`}>
                    <FolderTree className="h-5 w-5 text-white/70" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{cat.name}</h3>
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{cat.count} ACTIVE NODES</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                    <Edit2 className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-400">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="mt-8 flex gap-2">
                <Badge variant="outline" className="bg-white/5 text-[9px] font-bold">LATEST: 2H AGO</Badge>
                <Badge variant="outline" className="bg-white/5 text-[9px] font-bold">SYNC: ACTIVE</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
