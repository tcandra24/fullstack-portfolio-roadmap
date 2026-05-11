import * as React from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Edit3, 
  Trash2,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const posts = [
  { id: 'VP-842', title: 'Why Reactive Architecture is the Future of CMS', category: 'Technology', status: 'Published', author: 'NexusOne', views: '2.4k', date: '2024-03-12' },
  { id: 'VP-312', title: 'Styling with Pure Intent: A Guide to Visual Rhythm', category: 'Design', status: 'Published', author: 'PrismDev', views: '1.8k', date: '2024-03-10' },
  { id: 'VP-901', title: 'Scaling Beyond the Void: Infrastructure Secrets', category: 'DevOps', status: 'Draft', author: 'RootMaster', views: '0', date: '2024-03-08' },
  { id: 'VP-114', title: 'The Psychology of Magenta in Modern UI', category: 'Visuals', status: 'Review', author: 'NexusOne', views: '842', date: '2024-03-05' },
  { id: 'VP-556', title: 'Cybernetic Typography: When Text Becomes Art', category: 'Design', status: 'Published', author: 'GhostWrt', views: '3.1k', date: '2024-03-01' },
];

export default function Posts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white italic uppercase font-heading tracking-tight">
            Manage <span className="text-primary italic-none">Nodes</span>
          </h1>
          <p className="text-muted-foreground uppercase text-[10px] tracking-widest font-bold">Catalog of active information nodes</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,76,131,0.3)]">
          <Plus className="mr-2 h-4 w-4" /> CREATE NEW NODE
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3 bg-white/5 p-4 rounded-xl border border-border/20">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Filter by title or author..." className="pl-10 bg-input/40 border-border/20" />
        </div>
        <Button variant="outline" className="border-border/30 bg-white/5 hover:bg-white/10 text-white font-bold h-10">
          <Filter className="mr-2 h-4 w-4" /> FILTERS
        </Button>
        <div className="h-6 w-px bg-border/20 mx-1" />
        <p className="text-[10px] font-bold text-muted-foreground uppercase">Total Node Count: 142</p>
      </div>

      <div className="bg-card/40 border border-border/30 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-border/30 hover:bg-transparent">
              <TableHead className="px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Identification</TableHead>
              <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Node Content</TableHead>
              <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Category</TableHead>
              <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</TableHead>
              <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Engagement</TableHead>
              <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Timestamp</TableHead>
              <TableHead className="px-6 text-right text-[10px] font-black uppercase tracking-widest text-muted-foreground">Operation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id} className="border-border/10 hover:bg-white/5 group transition-colors">
                <TableCell className="px-6 font-mono text-[11px] font-bold text-secondary">{post.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-bold text-white group-hover:text-primary transition-colors">{post.title}</span>
                    <span className="text-[10px] text-muted-foreground/60 italic font-medium">By {post.author}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-white/5 border-border/30 text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                    {post.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {post.status === 'Published' && <CheckCircle2 className="h-3 w-3 text-secondary" />}
                    {post.status === 'Draft' && <Clock className="h-3 w-3 text-muted-foreground" />}
                    {post.status === 'Review' && <AlertCircle className="h-3 w-3 text-tertiary" />}
                    <span className={`text-[10px] font-black uppercase ${
                      post.status === 'Published' ? 'text-secondary' : 
                      post.status === 'Draft' ? 'text-muted-foreground' : 'text-tertiary'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3 text-muted-foreground/50" />
                    <span className="text-[11px] font-mono text-muted-foreground">{post.views}</span>
                  </div>
                </TableCell>
                <TableCell className="text-[11px] font-mono text-muted-foreground/70">{post.date}</TableCell>
                <TableCell className="px-6 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-[#1d1d33] border-border text-white">
                      <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary text-xs font-bold uppercase cursor-pointer">
                        <Edit3 className="mr-2 h-4 w-4" /> Edit Node
                      </DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-white/10 text-xs font-bold uppercase cursor-pointer">
                        <Eye className="mr-2 h-4 w-4" /> Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-red-400/10 text-red-500 text-xs font-bold uppercase cursor-pointer">
                        <Trash2 className="mr-2 h-4 w-4" /> Erase Node
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
