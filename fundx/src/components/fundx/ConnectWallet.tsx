"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useConnect } from "@stacks/connect-react" // <--- The React Hook
import { userSession } from "@/components/fundx/StacksProvider" // <--- Import session from Provider

export function ConnectWallet() {
  const { doOpenAuth } = useConnect() // <--- The function that replaces 'authenticate'
  const [mounted, setMounted] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    if (userSession.isUserSignedIn()) {
      setAddress(userSession.loadUserData().profile.stxAddress.testnet)
    }
  }, [])

  if (!mounted) {
    return (
      <Button className="rounded-full bg-slate-900 text-white px-6 opacity-50">
        Loading...
      </Button>
    )
  }

  // 1. Logged In
  if (address) {
    return (
      <Button 
        onClick={() => {
          userSession.signUserOut()
          window.location.reload()
        }}
        className="rounded-full bg-gradient-tush text-white shadow-glow hover:opacity-90 hover:scale-105 transition-all px-6 font-bold tracking-tight"
      >
        {address.slice(0, 4)}...{address.slice(-4)}
      </Button>
    )
  }

  // 2. Logged Out
  return (
    <Button 
      onClick={() => doOpenAuth()} // <--- Use the hook function
      className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 px-6"
    >
      Connect Wallet
    </Button>
  )
}