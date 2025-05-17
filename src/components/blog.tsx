"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  tags: string[]
  readTime: string
  url: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Real-time Applications with WebSockets and Next.js",
    excerpt:
      "Learn how to create responsive real-time applications using WebSockets with Next.js for a seamless user experience.",
    date: "March 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["WebSockets", "Next.js", "Real-time"],
    readTime: "8 min read",
    url: "#",
  },
  {
    id: 2,
    title: "Advanced MongoDB Techniques for Modern Applications",
    excerpt:
      "Explore advanced MongoDB features and optimization techniques to build scalable and efficient applications.",
    date: "February 22, 2023",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["MongoDB", "Database", "Performance"],
    readTime: "10 min read",
    url: "#",
  },
  {
    id: 3,
    title: "Implementing GraphQL with Prisma: A Comprehensive Guide",
    excerpt: "A step-by-step guide to implementing GraphQL APIs with Prisma ORM for type-safe database access.",
    date: "January 10, 2023",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["GraphQL", "Prisma", "API"],
    readTime: "12 min read",
    url: "#",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical insights, tutorials, and thoughts on web development and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between" asChild>
                    <Link href={post.url}>
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="#">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

