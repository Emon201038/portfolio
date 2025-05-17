import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Blog from "@/components/blog"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </main>
  )
}

