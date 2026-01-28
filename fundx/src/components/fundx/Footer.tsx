import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">F</div>
              <span className="text-xl font-bold tracking-tight text-slate-900">FundX</span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              The borderless crowdfunding platform for the Bitcoin economy. Built on Stacks.
            </p>
          </div>

          {/* Newsletter - Pill Shaped */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-slate-900">Stay updated</h4>
            <div className="flex w-full max-w-md items-center space-x-2">
              <div className="relative w-full">
                <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="h-12 rounded-full border-slate-200 bg-slate-50 pl-5 pr-4 text-slate-900 focus-visible:ring-indigo-500" 
                />
              </div>
              <Button className="h-12 rounded-full bg-slate-900 px-8 hover:bg-slate-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-100 my-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900">Platform</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Explore Campaigns</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Bridge Assets</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Submit Project</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900">Resources</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Partners</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900">Community</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900">Legal</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-xs text-slate-400">
          © 2026 FundX Decentralized Protocol. All rights reserved.
        </div>
      </div>
    </footer>
  )
}