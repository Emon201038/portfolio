"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Maximize } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  details: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cricket Scoreboard App",
    description: "Real-time cricket scoreboard with live overlays for streaming",
    image: "/mycric-demo.png",
    tags: ["Next.js", "Tailwind Css", "WebSockets", "Express.js", "Graphql", "MongoDB"],
    demoUrl: "https://mycric.app",
    githubUrl: "#",
    details:
      "A comprehensive cricket scoreboard application that provides real-time updates and customizable overlays for streaming platforms. Built with Next.js for the frontend and Express.js for the backend, it uses WebSockets to ensure real-time data transmission with minimal latency. The application includes features like ball-by-ball commentary, player statistics, and customizable themes.",
  },
  {
    id: 2,
    title: "Facebook Clone",
    description: "Facebook clone with real-time messaging capabilities and all features",
    image: "/facebook.png",
    tags: ["React", "GraphQL", "Prisma", "WebSockets"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/Emon201038/social-app",
    details:
      "A full-featured messaging application inspired by Facebook Messenger. It supports real-time messaging, read receipts, typing indicators, and media sharing. The frontend is built with React, while the backend uses GraphQL for efficient data fetching and WebSockets for real-time updates. User authentication is handled securely, and messages are stored in a database managed by Prisma.",
  },
  {
    id: 3,
    title: "Custom Session Management",
    description: "Advanced session management system for Next.js applications",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "JWT", "Redis"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    details:
      "A robust session management system for Next.js applications that provides enhanced security and flexibility. It uses JWT for stateless authentication and Redis for session storage, allowing for features like session revocation, device management, and fine-grained permission control. The system is built with TypeScript for type safety and includes comprehensive documentation and examples.",
  },
  {
    id: 4,
    title: "Modern Ecommerce Platform",
    description: "Full-stack ecommerce solution with advanced features",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Express", "GraphQL", "MongoDB", "Prisma"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    details:
      "A comprehensive ecommerce platform built with a modern tech stack. The frontend is developed with Next.js and TypeScript, providing a fast and type-safe shopping experience with server-side rendering for SEO optimization. The backend uses Express.js with GraphQL API for efficient data fetching, MongoDB for flexible data storage, and Prisma as the ORM for type-safe database access. Features include user authentication, product catalog with advanced filtering, shopping cart functionality, secure checkout process with Stripe integration, order management, user reviews and ratings, and an admin dashboard for inventory and order management. The application is fully responsive and optimized for all devices.",
  },

]

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null)

  const filteredProjects = filter ? projects.filter((project) => project.tags.includes(filter)) : projects

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in building interactive and real-time applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button variant={filter === null ? "default" : "outline"} onClick={() => setFilter(null)} className="mb-2">
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              onClick={() => setFilter(tag)}
              className="mb-2"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    // fill
                    width={800}
                    height={600}
                    className="object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" /> Code
                      </Link>
                    </Button>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="ghost">
                        <Maximize className="h-4 w-4 mr-1" /> Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                      </DialogHeader>
                      <div className="relative h-64 my-4">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          // fill
                          width={600}
                          height={400}
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                      <div className="flex gap-2">
                        <Button asChild>
                          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" /> View Live Demo
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" /> View Source Code
                          </Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

