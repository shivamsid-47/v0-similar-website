import Header from "@/components/header"
import Navigation from "@/components/navigation"
import BlogPost from "@/components/blog-post"
import Sidebar from "@/components/sidebar"

export default function Home() {
  const blogPosts = [
    {
      id: 1,
      title: "Digital Forensics in Modern Criminal Investigations",
      author: "Dr. Sarah Mitchell",
      date: "January 24, 2024",
      excerpt:
        "Explore the latest techniques in digital forensics and how they're revolutionizing criminal investigations. Learn about evidence preservation, chain of custody, and advanced analysis methods used by leading forensic experts.",
      category: "Digital Forensics",
    },
    {
      id: 2,
      title: "Cybersecurity Threat Intelligence: Identifying APT Groups",
      author: "James Chen",
      date: "January 22, 2024",
      excerpt:
        "Deep dive into advanced persistent threat (APT) identification and attribution. Discover how threat intelligence analysts track sophisticated cyber actors and the tools used to analyze their tactics, techniques, and procedures.",
      category: "Cybersecurity",
    },
    {
      id: 3,
      title: "Crime Scene Photography Standards and Best Practices",
      author: "Emma Rodriguez",
      date: "January 20, 2024",
      excerpt:
        "Master the essential techniques for crime scene documentation through photography. From lighting and composition to evidence marking and chain of custody, learn how proper documentation supports successful prosecutions.",
      category: "Forensic Science",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <div className="flex max-w-7xl mx-auto">
        {/* Main Content */}
        <main className="flex-1 px-4 py-8 md:px-8">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  )
}
