"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Layers } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Empowerment of govt school learning",
    description:
      "Built an interactive learning platform with gamified quizzes, progress tracking, and a real-time leaderboard using React.js and Node.js.",
    image: "/stdmgmt.png?height=300&width=500",
    tags: ["Java", "Node.js", "MySQL", "SpringBoot"],
    link: "#",
    github: "https://github.com/bhargav170204/Empowerment-of-government-school-learning",
    color: "from-violet-600 to-purple-600",
  },
  {
    id: 3,
    title: "Online Code Compiler",
    description: " Developed a real-time code editor and compiler supporting Java, Python, and C++ using Spring Boot for backend.",
    image: "/images.jpeg?height=300&width=500",
    tags: ["Java", "Node.js", "MySQL", "SpringBoot"],
    link: "#",
    github: "https://github.com/mannursulthan/music-recommendation",
    color: "from-pink-600 to-rose-600",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description: "E-commerce platform replica featuring product listings, cart, and checkout.",
    image: "/amazon.png?height=300&width=500",
    tags: ["html","css","javascript","font-icons"],
    link: "#",
    github: "https://github.com/bhargav170204/amazon-web",
    color: "from-amber-600 to-orange-600",
  },
]

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Animated code symbols background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-600 font-mono text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              y: [0, 100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            {`{${Math.random().toString(36).substring(2, 7)}}`}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Layers className="text-white w-8 h-8" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-8"></div>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Here are some of the projects I've worked on during my academic journey and personal learning. Each project
            demonstrates different skills and technologies I've acquired.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

                {/* Animated overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0`}
                  animate={{ opacity: hoveredId === project.id ? 0.3 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Project icon */}
                <motion.div
                  className={`absolute top-4 right-4 bg-gradient-to-r ${project.color} p-2 rounded-full`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Code className="text-white w-4 h-4" />
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-2 text-white"
                  animate={{
                    color: hoveredId === project.id ? ["#ffffff", "#a78bfa", "#ffffff"] : "#ffffff",
                  }}
                  transition={{ duration: 1.5, repeat: hoveredId === project.id ? Number.POSITIVE_INFINITY : 0 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className={`bg-gray-700 text-${project.color.split(" ")[0].replace("from-", "")} text-xs px-3 py-1 rounded-full`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  {/* <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.a> */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                    whileHover={{ scale: 1.05, x: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
