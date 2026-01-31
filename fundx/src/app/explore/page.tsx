"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/fundx/Navbar"
import { Footer } from "@/components/fundx/Footer"
import { CampaignCard } from "@/components/fundx/CampaignCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal } from "lucide-react"
import { CAMPAIGNS } from "@/lib/data"

// Categories for the filter pills
const CATEGORIES = ["All", "DeFi", "Mining", "Gaming", "Social Impact", "Infrastructure", "Education"]

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visibleCount, setVisibleCount] = useState(6) // Start with 6 items

  // Filter Logic
  const filteredCampaigns = useMemo(() => {
    return CAMPAIGNS.filter((c) => {
      // 1. Text Search
      const matchesSearch = 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      // 2. Category Filter
      const matchesCategory = selectedCategory === "All" || c.category === selectedCategory || (selectedCategory === "DeFi" && c.category.includes("DeFi"))

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // "Load More" handler
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-100 font-sans">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto max-w-7xl px-4">
        
        {/* HEADER */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Explore the Ecosystem
          </h1>
          <p className="text-lg text-slate-500">
            Discover verified projects building on the Bitcoin economy.
          </p>
        </div>

        {/* CONTROLS BAR (Sticky) */}
        <div className="sticky top-24 z-30 bg-white/80 backdrop-blur-md border border-white/20 shadow-soft-sm rounded-2xl p-4 mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
             
             {/* Search Input */}
             <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Search campaigns..." 
                  className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus-visible:ring-orange-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>

             {/* Category Pills (Scrollable on mobile) */}
             <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all
                      ${selectedCategory === cat 
                        ? "bg-slate-900 text-white shadow-md" 
                        : "bg-white text-slate-500 border border-slate-200 hover:border-orange-200 hover:text-orange-600"
                      }
                    `}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* RESULTS GRID */}
        {filteredCampaigns.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCampaigns.slice(0, visibleCount).map((campaign) => (
              <div key={campaign.id} className="h-[450px]"> {/* Fixed height for uniformity */}
                <CampaignCard 
                  id={campaign.id}
                  title={campaign.title}
                  description={campaign.description}
                  raised={campaign.raised}
                  goal={campaign.goal}
                  image={campaign.image}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🔍
             </div>
             <h3 className="text-xl font-bold text-slate-900">No campaigns found</h3>
             <p className="text-slate-500">Try adjusting your search or category.</p>
             <Button 
                variant="link" 
                onClick={() => {setSearchQuery(""); setSelectedCategory("All")}}
                className="text-orange-600 font-bold mt-2"
             >
                Clear Filters
             </Button>
          </div>
        )}

        {/* LOAD MORE (Only if there are more items to show) */}
        {filteredCampaigns.length > visibleCount && (
          <div className="mt-16 text-center">
            <Button 
              onClick={handleLoadMore}
              variant="outline" 
              className="h-14 px-8 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all"
            >
              Load More Campaigns
            </Button>
          </div>
        )}

      </div>
      <Footer />
    </main>
  )
}