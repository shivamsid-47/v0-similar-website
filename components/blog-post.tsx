"use client"

import { Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPostProps {
  post: {
    id: number
    title: string
    author: string
    date: string
    excerpt: string
    category: string
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="border-b border-border pb-8 last:border-b-0">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
            {post.category}
          </Badge>
        </div>

        <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
          {post.title}
        </h2>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
        </div>

        <p className="text-foreground/80 leading-relaxed">{post.excerpt}</p>

        <button className="text-primary hover:text-primary/80 font-medium transition-colors">Read more →</button>
      </div>
    </article>
  )
}
