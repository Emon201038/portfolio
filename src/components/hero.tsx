"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const rect = containerRef.current.getBoundingClientRect()

      const x = clientX - rect.left
      const y = clientY - rect.top

      containerRef.current.style.setProperty("--mouse-x", `${x}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y}px`)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16" ref={containerRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--primary-rgb), 0.1) 0%, transparent 50%)",
          transition: "background 0.3s ease",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-Stack Developer
          </motion.div>

          <motion.h1
            className="text-2xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I&apos;m <b>Emdadul Hoque Emon</b>. Building modern web experiences with cutting-edge technologies
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Specializing in Next.js, Express.js, MongoDB, Prisma, GraphQL, and real-time applications. Creating
            seamless, responsive, and interactive web experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/emon201038" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/emdadul-hoque-emon-0a5461341/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 md:right-20 lg:right-40 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-background shadow-xl">
            <Image src="/icons/profile.jpg" alt="Emon" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

