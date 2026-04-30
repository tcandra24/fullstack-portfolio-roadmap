import * as React from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface RegisterProps {
  onRegister: () => void;
  onSwitchToLogin: () => void;
}

export default function Register({ onRegister, onSwitchToLogin }: RegisterProps) {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0c0c21] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4 z-10"
      >
        <div className="text-center mb-8">
          <h1 className="font-heading text-5xl font-black tracking-tighter text-white mb-2 italic">
            JOIN THE<span className="text-secondary italic-none">PULSE</span>
          </h1>
          <p className="text-muted-foreground font-medium uppercase tracking-[0.2em] text-xs">
            Initialize New Administrator Sequence
          </p>
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-tertiary" />
          
          <CardHeader className="space-y-1 pt-8">
            <CardTitle className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              Identity Genesis
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Define your presence in the vibrant architecture
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="nexus_prime"
                      className="pl-10 bg-input/50 border-border/50 h-11 focus-visible:ring-secondary"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="operator@vibrant-pulse.io"
                      type="email"
                      className="pl-10 bg-input/50 border-border/50 h-11 focus-visible:ring-secondary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Select Access Key"
                      type="password"
                      className="pl-10 bg-input/50 border-border/50 h-11 focus-visible:ring-secondary"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                  Encryption: ACTIVE
                </p>
                <button 
                  type="button" 
                  onClick={onSwitchToLogin}
                  className="text-xs text-primary hover:underline font-bold uppercase tracking-wider"
                >
                  Already authorized?
                </button>
              </div>

              <Button type="submit" className="w-full h-11 bg-secondary hover:bg-secondary/90 text-[#002118] font-bold group">
                INITIALIZE GENESIS
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="pb-8 flex flex-col gap-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border/50" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Secure Initialization Protocol</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-secondary/60">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Authorized Entry Only</span>
            </div>
          </CardFooter>
        </Card>
        
        <p className="mt-8 text-center text-xs text-muted-foreground uppercase tracking-widest leading-loose">
          Establishing network connection...<br />
          Pulse synchronization in progress.
        </p>
      </motion.div>
    </div>
  );
}
