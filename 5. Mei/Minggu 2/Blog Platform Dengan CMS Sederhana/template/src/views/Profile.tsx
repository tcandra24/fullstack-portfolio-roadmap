import * as React from 'react';
import { User, Settings, Shield, Bell, Key, Globe, Layout, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export default function Profile() {
  return (
    <div className="max-w-4xl space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-black text-white italic uppercase font-heading tracking-tight">
          System <span className="text-primary italic-none">Settings</span>
        </h1>
        <p className="text-muted-foreground uppercase text-[10px] tracking-widest font-bold">Node configuration and synchronization preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-2">
           {[
             { id: 'general', label: 'General System', icon: Layout },
             { id: 'security', label: 'Security Protocols', icon: Shield },
             { id: 'notifications', label: 'Alert Frequency', icon: Bell },
             { id: 'branding', label: 'Visual Interface', icon: Palette },
           ].map((item) => (
             <button 
               key={item.id} 
               className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all
               ${item.id === 'general' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-muted-foreground hover:bg-white/5 hover:text-white'}`}
             >
               <item.icon className="h-4 w-4" />
               {item.label}
             </button>
           ))}
        </aside>

        <div className="lg:col-span-3 space-y-6">
          <Card className="bg-card/40 border-border/40 backdrop-blur-sm shadow-xl">
             <CardHeader>
                <CardTitle className="text-lg font-bold text-white uppercase tracking-tight">Operator Identity</CardTitle>
                <CardDescription className="text-xs">Manage the information associated with this administrative node</CardDescription>
             </CardHeader>
             <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Public Display Name</label>
                      <Input placeholder="Marcus Nexus" className="bg-white/5 border-border/20 h-10 text-sm" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">System Identifier</label>
                      <Input placeholder="nexus_prime" className="bg-white/5 border-border/20 h-10 text-sm" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Authorized Email Frequency</label>
                   <Input placeholder="m.nexus@vibrant.io" className="bg-white/5 border-border/20 h-10 text-sm" />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs h-10">
                   SYNC CHANGES
                </Button>
             </CardContent>
          </Card>

          <Card className="bg-card/40 border-border/40 backdrop-blur-sm shadow-xl">
             <CardHeader>
                <CardTitle className="text-lg font-bold text-white uppercase tracking-tight">Security & Encryption</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                   <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-secondary" />
                      <div>
                         <p className="text-sm font-bold text-white">Multi-Factor Integration</p>
                         <p className="text-xs text-muted-foreground">Add an extra layer of structural integrity to your login</p>
                      </div>
                   </div>
                   <Switch />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                   <div className="flex items-center gap-3">
                      <Key className="h-5 w-5 text-tertiary" />
                      <div>
                         <p className="text-sm font-bold text-white">Hardware Key Recognition</p>
                         <p className="text-xs text-muted-foreground">Synchronize with physical FIDO2 security devices</p>
                      </div>
                   </div>
                   <Switch defaultChecked />
                </div>
             </CardContent>
          </Card>

          <Card className="bg-red-500/5 border-red-500/20 backdrop-blur-sm">
             <CardHeader>
                <CardTitle className="text-lg font-bold text-red-400 uppercase tracking-tight">Danger Protocols</CardTitle>
                <CardDescription className="text-xs text-red-400/60">Irreversible node operations</CardDescription>
             </CardHeader>
             <CardContent>
                <Button variant="outline" className="border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 font-black uppercase tracking-widest text-[10px]">
                   ERASE ENTIRE IDENTITY
                </Button>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
