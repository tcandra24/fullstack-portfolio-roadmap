import { Mail, Lock, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 antialiased">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200 p-10 border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-blue-600 mb-3 tracking-tighter">FinanceTracker</h1>
          <h2 className="text-xl font-bold text-slate-900 mb-1">Welcome back</h2>
          <p className="text-sm font-medium text-slate-400">Please enter your details to sign in.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest" htmlFor="email">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <Input 
                className="pl-10 h-12 bg-slate-50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-blue-600/20" 
                id="email" 
                type="email" 
                placeholder="name@company.com" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest" htmlFor="password">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <Input 
                className="pl-10 h-12 bg-slate-50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-blue-600/20" 
                id="password" 
                type="password" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-slate-200" />
              <label htmlFor="remember" className="text-xs font-bold text-slate-400 cursor-pointer">Remember me</label>
            </div>
            <Link to="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot password?</Link>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 font-black shadow-lg shadow-blue-600/20 rounded-xl" type="submit">
            Sign In
          </Button>
        </form>

        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-4 bg-white text-slate-300 font-bold uppercase tracking-widest">Or continue with</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-11 font-bold border-slate-100 gap-2">
            <Globe className="w-4 h-4" /> Google
          </Button>
          <Button variant="outline" className="h-11 font-bold border-slate-100 gap-2">
            <Smartphone className="w-4 h-4" /> Apple
          </Button>
        </div>

        <p className="mt-10 text-center text-xs font-bold text-slate-400">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
