"use client"

import Link from "next/link"

export default function Navigation() {
  const navItems = [
    { label: "Feed", href: "#" },
    { label: "Cases", href: "#" },
    { label: "Experts", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Events", href: "#" },
  ]

  return (
    <nav className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="py-4 px-2 text-foreground hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
