"use client"

import { Search, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const recentPosts = [
    "Digital Evidence Collection Best Practices",
    "Advanced Malware Analysis Techniques",
    "Crime Scene Photography Standards 2024",
  ]

  return (
    <aside className="w-full md:w-80 px-4 py-8 md:px-6 md:border-l md:border-border">
      <div className="space-y-8">
        {/* Search Widget */}
        <div className="space-y-3">
          <h3 className="font-bold text-foreground">Search</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Recent Posts Widget */}
        <div className="space-y-3">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Recent Posts
          </h3>
          <ul className="space-y-2">
            {recentPosts.map((post, index) => (
              <li key={index}>
                <a href="#" className="text-primary hover:text-primary/80 text-sm transition-colors">
                  {post}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Widget */}
        <div className="space-y-3">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <Users className="w-4 h-4" />
            Join Community
          </h3>
          <p className="text-sm text-muted-foreground">
            Connect with forensic scientists, cybersecurity professionals, and digital investigators worldwide.
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90">Join Now</Button>
        </div>

        {/* Stats Widget */}
        <div className="bg-muted rounded-lg p-4 space-y-3">
          <h3 className="font-bold text-foreground">Community Stats</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Active Professionals</span>
              <span className="font-semibold text-foreground">8,342</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Case Studies</span>
              <span className="font-semibold text-foreground">2,156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">This Week</span>
              <span className="font-semibold text-foreground">487</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
