"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"
import Image from "next/image"

type Skill = {
  name: string
  level: number
  icon: React.ReactNode
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", level: 95, icon: <Image width={28} height={28} src="/icons/nextjs.svg" alt="Next.js" /> },
      { name: "React", level: 90, icon: <Image width={28} height={28} src="/icons/react.svg" alt="React.js" /> },
      { name: "TypeScript", level: 85, icon: <Image width={28} height={28} src="/icons/typescript.svg" alt="typescript" /> },
      { name: "Tailwind CSS", level: 90, icon: <Image width={28} height={28} src="/icons/tailwindcss.svg" alt="tailwindcss" /> },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Express.js", level: 90, icon: <Image width={28} height={28} src="/icons/express-js.svg" alt="express.js" /> },
      { name: "Node.js", level: 85, icon: <Image width={28} height={28} src="/icons/node-js.svg" alt="node.js" /> },
      { name: "GraphQL", level: 80, icon: <Image width={28} height={28} src="/icons/graphql.svg" alt="graphql" /> },
      { name: "REST API", level: 95, icon: <Image width={28} height={28} src="/icons/api-48.png" alt="rest api" /> },
      { name: "WebSockets", level: 85, icon: "🔌" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", level: 90, icon: <Image width={28} height={28} src="/icons/mongodb.svg" alt="mongodb" /> },
      { name: "Prisma", level: 85, icon: <Image width={28} height={28} src="/icons/prisma-orm-2.svg" alt="prisma" /> },
      { name: "PostgreSQL", level: 80, icon: <Image width={28} height={28} src="/icons/postgresql-48.png" alt="postgresql" /> },
      { name: "Redis", level: 75, icon: <Image width={28} height={28} src="/icons/redis.svg" alt="redis" /> },
      { name: "Firebase", level: 85, icon: <Image width={28} height={28} src="/icons/firebase.svg" alt="firebase" /> },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "CI/CD", level: 75, icon: "🔄" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Git", level: 95, icon: <Image width={28} height={28} src="/icons/git-2.svg" alt="git" /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies.
          </p>
        </motion.div>

        <Tabs defaultValue="Frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="mr-2 text-xl">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <motion.div
                            className="bg-primary h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

