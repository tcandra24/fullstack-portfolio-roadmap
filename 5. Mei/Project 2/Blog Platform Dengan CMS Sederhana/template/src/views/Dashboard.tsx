import * as React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Users, 
  FolderTree, 
  Eye, 
  ArrowUpRight, 
  ArrowDownRight, 
  TrendingUp,
  MoreVertical,
  Plus
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
];

const COLORS = ['#ff4c83', '#24ffcd', '#e3c630', '#ff4c83', '#24ffcd', '#e3c630', '#ff4c83'];

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white mb-1 uppercase font-heading italic">
            Dashboard <span className="text-primary tracking-normal">Control</span>
          </h1>
          <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">
             Real-time status of the vibrant pulse network
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-border/50 bg-white/5 hover:bg-white/10 text-white font-bold">
            EXPORT LOGS
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_0_20px_rgba(255,76,131,0.3)]">
            <Plus className="mr-2 h-4 w-4" /> REFRESH GRID
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Articles', value: '452', icon: FileText, color: 'text-primary', trend: '+12.5%', isUp: true },
          { label: 'Categories', value: '18', icon: FolderTree, color: 'text-secondary', trend: '+2', isUp: true },
          { label: 'System Users', value: '1,204', icon: Users, color: 'text-tertiary', trend: '-5.2%', isUp: false },
          { label: 'Node Views', value: '89.4k', icon: Eye, color: 'text-primary', trend: '+42%', isUp: true },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-colors group">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color} opacity-70`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="flex items-center gap-1">
                  {stat.isUp ? (
                    <ArrowUpRight className="h-3 w-3 text-secondary" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-primary" />
                  )}
                  <span className={`text-[10px] font-bold uppercase ${stat.isUp ? 'text-secondary' : 'text-primary'}`}>
                    {stat.trend} <span className="text-muted-foreground/60 font-medium">Since last sync</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card className="lg:col-span-2 border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border/20 mb-6">
            <div>
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                <TrendingUp className="h-5 w-5 text-secondary" />
                Vibrant Statistics
              </CardTitle>
              <CardDescription className="text-[10px] uppercase tracking-widest mt-1">System pulse over the last 30 intervals</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-7 text-[10px] hover:bg-white/10 font-bold">MONTHLY</Button>
              <Button variant="ghost" size="sm" className="h-7 text-[10px] text-primary hover:text-primary/80 font-bold underline decoration-2 underline-offset-4">WEEKLY</Button>
            </div>
          </CardHeader>
          <CardContent className="h-[300px] w-full pt-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333349" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#ab888e" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  fontFamily="Space Grotesk"
                  fontWeight={600}
                />
                <YAxis 
                  stroke="#ab888e" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  fontFamily="Space Grotesk"
                  fontWeight={600}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  contentStyle={{ 
                    backgroundColor: '#1d1d33', 
                    border: '1px solid #333349', 
                    borderRadius: '8px',
                    fontSize: '10px',
                    fontFamily: 'Inter',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} fillOpacity={0.8} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Recent Activity */}
        <Card className="border-border/50 bg-card/40 backdrop-blur-sm">
          <CardHeader className="border-b border-border/20 mb-4">
            <CardTitle className="text-lg font-bold text-white uppercase tracking-wide">Recent Pulses</CardTitle>
            <CardDescription className="text-[10px] uppercase tracking-widest">Latest system mutations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { type: 'POST', title: 'The Future of Neon Design', user: 'Admin', time: '2m ago', color: 'bg-primary' },
              { type: 'USER', title: 'New operator registered', user: 'System', time: '15m ago', color: 'bg-secondary' },
              { type: 'CAT', title: 'Architecture expanded', user: 'DevRoot', time: '1h ago', color: 'bg-tertiary' },
              { type: 'POST', title: 'System stability update', user: 'Admin', time: '3h ago', color: 'bg-primary' },
              { type: 'SYS', title: 'Database optimization', user: 'CRON', time: '5h ago', color: 'bg-white/20' },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                <div className={`mt-1 h-2 w-2 rounded-full ${activity.color} shadow-[0_0_8px] shadow-current opacity-80`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-black tracking-widest text-muted-foreground uppercase">{activity.type}</span>
                    <span className="text-[9px] font-medium text-muted-foreground/60">{activity.time}</span>
                  </div>
                  <p className="text-xs font-bold text-white group-hover:text-primary transition-colors truncate">{activity.title}</p>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-muted-foreground hover:text-white mt-2">
              VIEW SYSTEM LOGS
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Article Table */}
      <Card className="border-border/50 bg-card/40 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between border-b border-border/20 mb-4 px-6 pt-6 pb-4">
          <div>
            <CardTitle className="text-xl font-black text-white uppercase font-heading italic">Active <span className="text-secondary italic-none">Nodes</span></CardTitle>
            <CardDescription className="text-[10px] uppercase tracking-widest mt-1">High priority active content nodes</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="h-8 border-border/50 bg-white/5 text-[10px] font-bold uppercase tracking-widest">VIEW ALL POSTS</Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="hover:bg-transparent">
              <TableRow className="border-border/30 hover:bg-transparent">
                <TableHead className="px-6 text-[10px] uppercase font-black text-muted-foreground tracking-widest">Entry ID</TableHead>
                <TableHead className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Post Title</TableHead>
                <TableHead className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Category</TableHead>
                <TableHead className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Status</TableHead>
                <TableHead className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Author</TableHead>
                <TableHead className="px-6 text-right text-[10px] uppercase font-black text-muted-foreground tracking-widest">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: 'VP-842', title: 'Why Reactive Architecture is the Future of CMS', cat: 'Technology', status: 'Published', author: 'NexusOne' },
                { id: 'VP-312', title: 'Styling with Pure Intent: A Guide to Visual Rhythm', cat: 'Design', status: 'Published', author: 'PrismDev' },
                { id: 'VP-901', title: 'Scaling Beyond the Void: Infrastructure Secrets', cat: 'DevOps', status: 'Draft', author: 'RootMaster' },
                { id: 'VP-114', title: 'The Psychology of Magenta in Modern UI', cat: 'Visuals', status: 'Review', author: 'NexusOne' },
              ].map((row, i) => (
                <TableRow key={i} className="border-border/20 hover:bg-white/5 transition-colors group">
                  <TableCell className="px-6 font-mono text-[11px] font-bold text-secondary">{row.id}</TableCell>
                  <TableCell className="font-bold text-white group-hover:text-primary transition-colors">{row.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-white/5 border-border/40 text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                      {row.cat}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full ${
                        row.status === 'Published' ? 'bg-secondary' : 
                        row.status === 'Draft' ? 'bg-muted-foreground' : 'bg-tertiary'
                      }`} />
                      <span className="text-[10px] font-bold uppercase">{row.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-[11px] font-medium text-muted-foreground">{row.author}</TableCell>
                  <TableCell className="px-6 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
