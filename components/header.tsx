"use client"

import { Search, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">NFSUSocial</h1>
          </div>

          <div className="flex-1 max-w-md hidden md:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search investigations, cases..."
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
