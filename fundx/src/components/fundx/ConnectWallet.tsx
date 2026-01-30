"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { userSession, authenticate, signUserOut } from "@/lib/stacks-auth"

export function ConnectWallet() {
  const [mounted, setMounted] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true) // Fixes hydration errors
    if (userSession.isUserSignedIn()) {
      // Get the Testnet address from user data
      const userData = userSession.loadUserData()
      setAddress(userData.profile.stxAddress.testnet) 
    }
  }, [])

  if (!mounted) {
    return <Button className="rounded-full bg-slate-900 text-white px-6 opacity-50">Loading...</Button>
  }

  // 1. If Logged In -> Show Address Button (Orange Gradient)
  if (address) {
    return (
      <Button 
        onClick={signUserOut}
        className="rounded-full bg-gradient-tush text-white shadow-glow hover:opacity-90 hover:scale-105 transition-all px-6 font-bold tracking-tight"
      >
        {address.slice(0, 4)}...{address.slice(-4)}
      </Button>
    )
  }

  // 2. If Logged Out -> Show Connect Button (Black)
  return (
    <Button 
      onClick={authenticate}
      className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 px-6"
    >
      Connect Wallet
    </Button>
  )
}