import * as React from 'react';
import { Users as UsersIcon, Plus, Search, MoreHorizontal, UserCheck, Shield, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

const userList = [
  { name: 'Marcus Nexus', email: 'm.nexus@vibrant.io', role: 'Super Admin', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=marcus' },
  { name: 'Sarah Prism', email: 'prism.s@vibrant.io', role: 'Editor', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { name: 'Dave Root', email: 'd.root@vibrant.io', role: 'Developer', status: 'Offline', avatar: 'https://i.pravatar.cc/150?u=dave' },
  { name: 'Elena Vector', email: 'vector.e@vibrant.io', role: 'Analyst', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=elena' },
  { name: 'Ken Void', email: 'k.void@vibrant.io', role: 'Contributor', status: 'Suspended', avatar: 'https://i.pravatar.cc/150?u=ken' },
];

export default function Users() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white italic uppercase font-heading tracking-tight">
            User <span className="text-tertiary italic-none">Directory</span>
          </h1>
          <p className="text-muted-foreground uppercase text-[10px] tracking-widest font-bold">Authorized system operators and entities</p>
        </div>
        <Button className="bg-tertiary hover:bg-tertiary/90 text-[#211b00] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(227,198,48,0.3)]">
          <Plus className="mr-2 h-4 w-4" /> INVITE OPERATOR
        </Button>
      </div>

      <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-border/20">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Find operator by name or frequency (email)..." className="pl-10 bg-input/20 border-border/20" />
        </div>
        <div className="flex items-center gap-2">
           <Badge variant="outline" className="bg-secondary/10 border-secondary/30 text-secondary text-[9px] font-black">4 ACTIVE</Badge>
           <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-[9px] font-black">1 OFFLINE</Badge>
        </div>
      </div>

      <div className="bg-card/40 border border-border/30 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-border/30 hover:bg-transparent">
              <TableHead className="px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Operator Entity</TableHead>
              <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">System Frequency</TableHead>
              <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Authority Level</TableHead>
              <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</TableHead>
              <TableHead className="px-6 text-right text-[10px] font-black uppercase tracking-widest text-muted-foreground">Control</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userList.map((user, i) => (
              <TableRow key={i} className="border-border/10 hover:bg-white/5 group">
                <TableCell className="px-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-white/5 group-hover:border-primary/50 transition-colors">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-white/10 text-xs font-bold">{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-bold text-white group-hover:text-white transition-colors">{user.name}</span>
                      <span className="text-[10px] text-muted-foreground/60 font-black uppercase tracking-wider">Node-ID: 0x{Math.floor(Math.random() * 1000)}F</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2 text-muted-foreground/70">
                      <Mail className="h-3 w-3" />
                      <span className="text-[11px] font-medium">{user.email}</span>
                   </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Shield className={`h-3 w-3 ${user.role === 'Super Admin' ? 'text-primary' : 'text-muted-foreground/50'}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${user.role === 'Super Admin' ? 'text-white' : 'text-muted-foreground'}`}>
                      {user.role}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`
                    text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 border-0
                    ${user.status === 'Active' ? 'bg-secondary/10 text-secondary' : 
                      user.status === 'Offline' ? 'bg-white/5 text-muted-foreground' : 'bg-primary/10 text-primary'}
                  `}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 text-right">
                   <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-secondary hover:bg-secondary/10">
                        <UserCheck className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                   </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
