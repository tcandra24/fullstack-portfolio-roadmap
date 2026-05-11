import { Landmark, User, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 antialiased">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-slate-200 p-12 border border-slate-100">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 text-blue-600 mb-8">
            <Landmark className="w-8 h-8 fill-blue-600/10" />
            <span className="text-2xl font-black tracking-tighter">FinanceTracker</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Create Account</h1>
          <p className="text-sm font-medium text-slate-400 text-center">Join FinanceTracker to start managing your wealth today.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest" htmlFor="name">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <Input 
                className="pl-12 h-12 bg-slate-50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-blue-600/20" 
                id="name" 
                placeholder="John Doe" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest" htmlFor="email">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <Input 
                className="pl-12 h-12 bg-slate-50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-blue-600/20" 
                id="email" 
                type="email" 
                placeholder="john.doe@example.com" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest" htmlFor="password">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <Input 
                className="pl-12 h-12 bg-slate-50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-blue-600/20" 
                id="password" 
                type="password" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <div className="flex items-start space-x-3 pt-2">
            <Checkbox id="terms" className="mt-1 border-slate-200" />
            <label htmlFor="terms" className="text-xs font-bold text-slate-400 leading-normal">
              I agree to the <Link to="#" className="text-blue-600 hover:underline">Terms and Conditions</Link> and <Link to="#" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 font-black shadow-lg shadow-blue-600/20 rounded-xl group" type="submit">
            Create Account
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <p className="mt-10 text-center text-xs font-bold text-slate-400">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline ml-1">Log In</Link>
        </p>
      </div>
    </div>
  );
}
