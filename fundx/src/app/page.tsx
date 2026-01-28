import { Navbar } from "@/components/fundx/Navbar"
import { CampaignCard } from "@/components/fundx/CampaignCard"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-indigo-100">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="text-center lg:text-left space-y-8 z-10">
              <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
                🚀 Live on Stacks Testnet
              </div>
              
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 lg:text-7xl">
                Crowdfunding for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Bitcoin Economy.
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Fund the next big thing using USDCx. Bring your own liquidity from Ethereum—we handle the bridge instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-glow bg-indigo-600 hover:bg-indigo-700">
                  Explore Campaigns
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg border-2 border-slate-200 hover:bg-white hover:border-slate-300 bg-transparent">
                  Bridge to USDCx
                </Button>
              </div>
            </div>

            {/* Right: 3D Visuals (Placeholders for your PNGs) */}
            <div className="relative hidden lg:block h-[500px]">
               {/* NOTE: Ensure you have placed 'wallet.png' in /public/3d/ 
                  If not, this block handles the layout without breaking.
               */}
               <div className="absolute top-10 right-10 w-full h-full bg-gradient-to-tr from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl -z-10" />
               <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {/* <Image src="/3d/wallet.png" width={500} height={500} alt="Wallet" className="drop-shadow-2xl animate-float" /> */}
                  <div className="text-slate-300 font-bold text-2xl border-2 border-dashed border-slate-200 rounded-3xl p-12">
                     [Insert 3D Wallet PNG Here]
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CAMPAIGN GRID SECTION */}
      <section id="campaigns" className="py-24 bg-white/50">
        <div className="container mx-auto max-w-6xl px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trending Campaigns</h2>
            <p className="text-slate-500">
              Support builders on Stacks. All donations are held in trustless Clarity smart contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mock Data Cards */}
            <CampaignCard 
              title="DeFi for Everyone"
              description="Building the first mobile-first yield aggregator on Stacks."
              raised={45000}
              goal={50000}
              image="/campaign-1.jpg"
            />
             <CampaignCard 
              title="Stacks School"
              description="An educational platform to teach Clarity to 10,000 developers."
              raised={12000}
              goal={100000}
              image="/campaign-2.jpg"
            />
             <CampaignCard 
              title="Green Bitcoin Mining"
              description="Solar-powered mining initiative in Texas. Carbon neutral."
              raised={5000}
              goal={25000}
              image="/campaign-3.jpg"
            />
          </div>

        </div>
      </section>
    </main>
  )
}