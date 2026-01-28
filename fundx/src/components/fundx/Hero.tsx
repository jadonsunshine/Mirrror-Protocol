import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        
        {/* 1. The Badge (Your Content) */}
        <div className="inline-flex items-center rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-sm font-medium text-indigo-600 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default">
          🚀 Live on Stacks Testnet
        </div>

        {/* 2. The Creative Headline (Your Text + Reference Style) */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8">
          Crowd funding <br />
          
          {/* Middle Line: "for the [Icon] Bitcoin" */}
          <span className="inline-flex items-center flex-wrap justify-center gap-x-8">
            for  the
            {/* Creative Twist: Floating 3D Element #1 */}
            <span className="inline-flex align-middle">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-soft-md -rotate-6 flex items-center justify-center text-3xl border border-slate-100 relative z-10 hover:rotate-0 transition-transform duration-300">
                  ⚡
               </div>
            </span>
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Bitcoin
            </span>
          </span>
          
          <br />

          {/* Bottom Line: "[Icon] Economy" */}
          <span className="inline-flex items-center flex-wrap justify-center gap-x-4">
             {/* Creative Twist: Floating 3D Element #2 */}
             {/* <span className="inline-flex align-middle">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-soft-md rotate-12 flex items-center justify-center text-3xl border border-slate-100 relative z-10 hover:rotate-0 transition-transform duration-300">
                  💰
               </div>
            </span> */}
            Economy  .
          </span>
            <span className="inline-flex align-middle">
              
                  <div className="relative inline-flex items-center cursor-pointer group">
             <div className="w-24 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-inner transition-all">
          <div className="w-10 h-10 bg-white rounded-full shadow-lg translate-x-12 transition-transform duration-300 ease-out" />
        </div>
      </div>
            </span>
        </h1>

        {/* 3. The Subhead (Your Content) */}
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
          Fund the next big thing using USDCx. Bring your own liquidity from Ethereum—we handle the bridge instantly.
        </p>

        {/* 4. The Buttons (Your Content & Layout) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-16 px-10 rounded-full text-lg shadow-glow bg-indigo-600 hover:bg-indigo-700 transition-all hover:scale-105">
              Explore Campaigns
            </Button>
            
            <Button variant="outline" size="lg" className="h-16 px-10 rounded-full text-lg border-2 border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all">
              Bridge to USDCx
            </Button>
        </div>

      </div>
    </section>
  )
}