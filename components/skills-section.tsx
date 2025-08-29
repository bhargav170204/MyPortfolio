"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Lightbulb, BookOpen, Database, Server, Layout } from "lucide-react"

const skills = [
  {
    name: "Programming Languages",
    items: [
      { name: "Java", level: 85, color: "bg-gradient-to-r from-red-500 to-red-600" },
      { name: "python", level: 75, color: "bg-gradient-to-r from-yellow-500 to-yellow-600" },
      { name: "HTML & CSS", level: 80, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      { name: "Spring Boot", level: 70, color: "bg-gradient-to-r from-green-500 to-green-600" },
      { name: "React", level: 65, color: "bg-gradient-to-r from-cyan-500 to-cyan-600" },
      { name: "Bootstrap", level: 75, color: "bg-gradient-to-r from-purple-500 to-purple-600" },
    ],
  },
  {
    name: "Tools & Technologies",
    items: [
      { name: "Git", level: 80, color: "bg-gradient-to-r from-orange-500 to-orange-600" },
      { name: "MySQL", level: 75, color: "bg-gradient-to-r from-blue-600 to-blue-700" },
      { name: "RestAPI", level: 60, color: "bg-gradient-to-r from-pink-500 to-pink-600" },
    ],
  },
]

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-900/20 blur-3xl"
          style={{ top: "10%", left: "5%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"
          style={{ bottom: "10%", right: "5%" }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
        />
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
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Cpu className="text-white w-8 h-8" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mb-8"></div>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Through my education and personal projects, I've developed proficiency in various technologies. Here's a
            breakdown of my technical skills and what I'm learning.
          </motion.p>
        </motion.div>

        {skills.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                {categoryIndex === 0 ? (
                  <Code className="text-white w-4 h-4" />
                ) : categoryIndex === 1 ? (
                  <Layout className="text-white w-4 h-4" />
                ) : (
                  <Database className="text-white w-4 h-4" />
                )}
              </span>
              {category.name}
            </h3>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.items.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px 0 rgba(139, 92, 246, 0.2)" }}
                >
                  <div className="flex justify-between mb-2">
                    <motion.span className="font-medium text-white" whileHover={{ x: 3 }}>
                      {skill.name}
                    </motion.span>
                    <motion.div
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{ background: skill.color.split(" ")[1] }}
                    >
                      {skill.level}%
                    </motion.div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className={`h-full ${skill.color} rounded-full relative`}
                    >
                      <motion.div
                        className="absolute right-0 top-0 h-full w-5 bg-white/30"
                        animate={{ x: [50, -5, 50] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Learning & Growth */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <BookOpen className="text-white w-4 h-4" />
            </span>
            Currently Learning
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-green-500/20"
              whileHover={{ y: -10, boxShadow: "0 0 20px 0 rgba(16, 185, 129, 0.3)" }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-gray-400">
                Learning ML involves data, algorithms, model training, predictions, evaluation, optimization, and real-world applications.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20"
              whileHover={{ y: -10, boxShadow: "0 0 20px 0 rgba(59, 130, 246, 0.3)" }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Technologies</h3>
              <p className="text-gray-400">
                Exploring AWS and Docker to deploy and manage applications in cloud environments.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-amber-500/20"
              whileHover={{ y: -10, boxShadow: "0 0 20px 0 rgba(245, 158, 11, 0.3)" }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Analyst</h3>
              <p className="text-gray-400">
                Learning data analysis involves collecting, cleaning, exploring, visualizing data, and drawing insights for decision-making.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
