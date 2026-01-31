"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useStacks } from "@/components/fundx/StacksProvider"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Copy, LogOut, Wallet } from "lucide-react"

export function ConnectWallet() {
  const { authenticate, signOut, isSignedIn, walletData } = useStacks()
  const [mounted, setMounted] = useState(false)
  const [justConnected, setJustConnected] = useState(false)
  const [copied, setCopied] = useState(false)

  // 1. Handle Mounting & Animation Trigger
  useEffect(() => {
    setMounted(true)
    if (isSignedIn) {
      // Trigger the "POP" animation
      setJustConnected(true)
      const timer = setTimeout(() => setJustConnected(false), 1000) // Reset after 1s
      return () => clearTimeout(timer)
    }
  }, [isSignedIn])

  // 2. Copy Logic
  const copyAddress = () => {
    if (walletData?.stxAddress) {
      navigator.clipboard.writeText(walletData.stxAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!mounted) {
    return (
      <Button className="rounded-full bg-slate-900 text-white px-6 opacity-50">
        Loading...
      </Button>
    )
  }

  // STATE: LOGGED IN (The Command Center)
  if (isSignedIn && walletData?.stxAddress) {
    const addr = walletData.stxAddress

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            className={`
              relative rounded-full px-6 font-bold tracking-tight transition-all duration-500
              ${justConnected 
                ? "bg-green-500 scale-110 shadow-[0_0_30px_rgba(74,222,128,0.6)] text-white" // The "POP"
                : "bg-gradient-tush text-white shadow-glow hover:opacity-90 hover:scale-105" // Normal
              }
            `}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm">
                {addr.slice(0, 4)}...{addr.slice(-4)}
              </span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align="end" className="w-56 rounded-xl p-2 shadow-xl border-slate-100">
          <DropdownMenuLabel className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            My Account
          </DropdownMenuLabel>
          
          <div className="px-2 py-2 mb-2 bg-slate-50 rounded-lg border border-slate-100">
             <div className="flex items-center gap-2 mb-1">
                <Wallet className="w-3 h-3 text-orange-500" />
                <span className="text-xs font-bold text-slate-700">Stacks Testnet</span>
             </div>
             <p className="text-[10px] text-slate-400 font-mono break-all leading-tight">
               {addr}
             </p>
          </div>

          <DropdownMenuSeparator />
          
          <DropdownMenuItem 
            onClick={copyAddress}
            className="cursor-pointer focus:bg-slate-50 font-medium text-slate-600"
          >
            {copied ? (
               <>
                 <span className="text-green-600 flex items-center gap-2">
                    ✓ Copied
                 </span>
               </>
            ) : (
               <>
                 <Copy className="w-4 h-4 mr-2 opacity-70" />
                 Copy Address
               </>
            )}
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          
          <DropdownMenuItem 
            onClick={signOut}
            className="cursor-pointer focus:bg-red-50 focus:text-red-600 text-red-500 font-medium"
          >
            <LogOut className="w-4 h-4 mr-2 opacity-70" />
            Disconnect
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  // STATE: LOGGED OUT
  return (
    <Button 
      onClick={authenticate}
      className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 px-6"
    >
      Connect Wallet
    </Button>
  )
}