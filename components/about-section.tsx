"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, Award, BookOpen, Star } from "lucide-react"

const educationData = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Technology in Computer Science with specilization of AIML",
    institution: "MOHAN BABU UNIVERSITY",
    description: "Graduated with First Class Honors. Specialized in software development and data structures.",
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary Education",
    institution: "NRI Junior College",
    description: "Completed with 96.5% marks with focus on Mathematics, Physics and Chemistry.",
  },
]

const achievementsData = [
  {
    year: "2024",
    title: "Java Programming Certification",
    organization: "EduSkills",
    description: "Completed Eduskills Certified Associate Java Programmer certification with distinction.",
  },
  {
    year: "2025",
    title: "Hackathon Finalist",
    organization: "SAP Hackfest",
    description: "Reached Finale and Selected among top teams for innovative enterprise solution.",
  },
  {
    year: "2025",
    title: "Academic Excellence Award",
    organization: "MOHAN BABU UNIVERSITY",
    description: "Received for maintaining top academic performance in the department.",
  },
]

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-600/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Star className="text-white w-8 h-8" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-8"></div>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Computer Science Engineering student (B.Tech CSE, 2026) with strong problem-solving skills and solid foundation in
 Data Structures, Algorithms, Object-Oriented Design, and Databases. Proficient in Java, with experience in building
 scalable backend services and distributed systems using Spring Boot and Docker. Passionate about developing innovative
 solutions to improve customer experiences and adept at delivering high-quality, efficient, and standard code.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center mb-8">
              <motion.div
                className="bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-full mr-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <GraduationCap className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-purple-500/30">
              {educationData.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="mb-10 relative" whileHover={{ x: 5 }}>
                  <motion.div
                    className="absolute -left-[41px] bg-gradient-to-r from-violet-600 to-purple-600 p-2 rounded-full border-4 border-gray-800"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(139, 92, 246, 0)",
                        "0 0 20px rgba(139, 92, 246, 0.5)",
                        "0 0 0px rgba(139, 92, 246, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Calendar className="w-4 h-4 text-white" />
                  </motion.div>
                  <motion.div
                    className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
                    whileHover={{ boxShadow: "0 0 20px 0 rgba(139, 92, 246, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold mb-2">{item.degree}</h4>
                    <p className="text-purple-300 mb-2">{item.institution}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center mb-8">
              <motion.div
                className="bg-gradient-to-r from-pink-600 to-rose-600 p-3 rounded-full mr-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Award className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-pink-500/30">
              {achievementsData.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="mb-10 relative" whileHover={{ x: 5 }}>
                  <motion.div
                    className="absolute -left-[41px] bg-gradient-to-r from-pink-600 to-rose-600 p-2 rounded-full border-4 border-gray-800"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(236, 72, 153, 0)",
                        "0 0 20px rgba(236, 72, 153, 0.5)",
                        "0 0 0px rgba(236, 72, 153, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  >
                    <BookOpen className="w-4 h-4 text-white" />
                  </motion.div>
                  <motion.div
                    className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20"
                    whileHover={{ boxShadow: "0 0 20px 0 rgba(236, 72, 153, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full text-sm mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-pink-300 mb-2">{item.organization}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
