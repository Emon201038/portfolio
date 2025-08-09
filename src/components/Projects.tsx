"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Sports Scoreboard Management",
      description:
        "A dynamic match scoreboard application built with NextJS, Express, GraphQL, Mongodb, SocketIO. Features real-time score tracking and management and players stats management.",
      image: "/images/mycric.png",
      tags: [
        "NextJS",
        "Redux",
        "Tailwind CSS",
        "Express",
        "MongoDB",
        "SocketIO",
      ],
      github: "#",
      live: "https://mycric.app",
      featured: true,
    },
    {
      id: 1,
      title: "MERN E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with MERN stack. Features include user authentication, shopping cart, payment processing, and admin dashboard. This project showcases modern web development practices.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB", "TypeScript"],
      github: "https://github.com/emon201038/MERN-ecommerce",
      live: "#",
      featured: false,
    },
    {
      id: 2,
      title: "Book Store Application",
      description:
        "A comprehensive book store management system with both client and server components. Built with modern JavaScript frameworks and includes features for browsing, purchasing, and managing books.",
      image: "/images/library.png",
      tags: ["JavaScript", "React", "Node.js", "Express"],
      github: "https://github.com/emon201038/book-store-client",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "MERN E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with MERN stack. Features include user authentication, shopping cart, payment processing, and admin dashboard. This project showcases modern web development practices.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB", "TypeScript"],
      github: "https://github.com/emon201038/MERN-ecommerce",
      live: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Travel Booking System",
      description:
        "A beginner-level travel booking application built with React and Redux. Features seat booking for up to 3 travelers with add/delete functionality and modern UI design.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Redux", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/emon201038/travel-booking",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Shopping Cart Handler",
      description:
        "A responsive shopping cart management system built with React.js, Redux, and Tailwind CSS. Features include adding/removing items, quantity management, and price calculations.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Redux", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/emon201038/shoping-cart",
      live: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "This very portfolio website you&apos;re viewing! Built with Next.js, featuring smooth animations, dark mode support, and a functional contact form.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/emon201038/portfolio2",
      live: "#",
      featured: false,
    },
  ];

  const ProjectCard = ({
    project,
    index,
  }: {
    project: (typeof projects)[0];
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
          {/* <div className="text-white text-xl font-semibold">Project Image</div> */}
          <Image
            objectFit="contain"
            fill
            alt="project_image"
            src={project.image}
            className="bg-transparent"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
            >
              <Github size={20} />
            </motion.a>
            {project.live !== "#" && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Featured Work
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Other Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + 2}
                />
              ))}
          </div>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/emon201038"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
