import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CampaignCardProps {
  title: string
  description: string
  raised: number
  goal: number
  image: string
}

export function CampaignCard({ title, description, raised, goal, image }: CampaignCardProps) {
  const progress = Math.min((raised / goal) * 100, 100)

  return (
    <Link href="/campaigns/1" className="block h-full">
      <div className="h-full bg-white rounded-[2rem] shadow-soft-md border border-slate-100 overflow-hidden group hover:border-orange-200 transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer">
        
        {/* Image Area */}
        <div className="relative h-48 xl:h-1/2 bg-slate-100 overflow-hidden shrink-0">
          <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-sm font-bold bg-slate-50 group-hover:scale-105 transition-transform duration-700">
            [Image]
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col justify-between flex-1 bg-white">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-slate-500 line-clamp-3">{description}</p>
          </div>
          
          <div className="space-y-3 pt-4">
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-tush h-full w-[35%] rounded-full" />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-slate-400 block">RAISED</span>
                <span className="text-sm font-bold text-primary">${raised.toLocaleString()}</span>
              </div>
              {/* This button is visual now (since the whole card is a link), but still clickable */}
              <Button size="sm" className="h-10 rounded-xl bg-slate-900 text-white shadow-md hover:bg-primary hover:shadow-glow transition-all px-6">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}