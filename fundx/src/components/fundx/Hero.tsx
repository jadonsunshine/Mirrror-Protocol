import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch" // We will customize this below
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-24 bg-slate-50">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        
        {/* The Massive Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8">
          Better tools <br />
          smooth 
          
          {/* Floating Icons Inline */}
          <span className="inline-flex mx-4 align-middle gap-[-10px]">
             {/* Replace these with your actual 3D icon paths */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-soft-md -rotate-12 flex items-center justify-center text-2xl border border-slate-100 relative z-10">
               💰
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-soft-md rotate-6 flex items-center justify-center text-2xl border border-slate-100 -ml-4 relative z-20">
               🦄
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-soft-md -rotate-6 flex items-center justify-center text-2xl border border-slate-100 -ml-4 relative z-30">
               ⚡
            </div>
          </span>
          
          workflow <br />
          including same great deal,
        </h1>

        {/* The Toggle Row */}
        <div className="flex items-center justify-center gap-4 text-5xl md:text-7xl font-bold tracking-tighter text-slate-900">
          
          {/* Custom Giant Toggle */}
          <div className="relative inline-flex items-center cursor-pointer group">
             <div className="w-24 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-inner transition-all">
                <div className="w-10 h-10 bg-white rounded-full shadow-lg translate-x-12 transition-transform duration-300 ease-out" />
             </div>
          </div>
          
          <span>annually.</span>
        </div>

        {/* The Cards (Pricing Style) */}
        <div className="grid md:grid-cols-2 gap-6 mt-20 max-w-4xl mx-auto text-left">
           
           {/* Free Card */}
           <div className="bg-white p-8 rounded-[2rem] shadow-soft-xl hover:shadow-2xl transition-all">
              <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                    💎
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-xl">Free</span>
                    <span className="text-slate-400">$0/month</span>
                  </div>
              </div>
              <Button className="w-full h-14 rounded-xl bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-100 text-lg font-medium mb-8">
                 Get Started
              </Button>
              <div className="text-sm text-slate-500 flex items-center gap-2">
                 <span className="text-black">✓</span> Nothing but a Hug
              </div>
           </div>

           {/* Personal Card */}
           <div className="bg-white p-8 rounded-[2rem] shadow-soft-xl hover:shadow-2xl transition-all relative overflow-hidden">
               {/* Subtle gradient blob for 'Personal' feel */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-[4rem] -z-0" />
               
              <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/30">
                    ⚡
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-xl">Personal</span>
                    <span className="text-slate-400">$69/month</span>
                  </div>
              </div>
              <Button className="w-full h-14 rounded-xl bg-white text-slate-900 border border-slate-200 hover:border-slate-300 text-lg font-medium mb-8 shadow-sm">
                 View Pricing
              </Button>
              <div className="space-y-3">
                 <div className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="text-black">✓</span> Full access to tools
                 </div>
                 <div className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="text-black">✓</span> Monthly updates
                 </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  )
}