"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Code, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-6 py-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-gray-900 to-gray-900" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square max-w-md mx-auto md:mx-0"
        >
          <motion.div
            className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-xl shadow-purple-500/20"
            animate={{
              boxShadow: [
                "0 0 20px 5px rgba(139, 92, 246, 0.3)",
                "0 0 40px 10px rgba(139, 92, 246, 0.5)",
                "0 0 20px 5px rgba(139, 92, 246, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Image
              src="/profile.jpg?height=400&width=400"
              alt="Mannuru Sulthan"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 shadow-lg"
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="bg-white text-purple-600 rounded-full p-2">
              <Code className="w-5 h-5" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-10 -right-10 text-4xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 -left-10 text-4xl"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          >
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-purple-900/30 text-purple-300 text-sm mb-4 border border-purple-500/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Hello, World!
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            I'm{" "}
            <motion.span
              className="text-gradient"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Kamati Bhargav
            </motion.span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-gray-300 h-12">
            Aspiring{" "}
            <TypeAnimation
              sequence={["Java Developer", 1000, "Backend Engineer", 1000, "Software Development Engineer", 1000]}
              wrapper="span"
              speed={50}
              className="text-cyan-400 font-medium"
              repeat={Number.POSITIVE_INFINITY}
            />
          </h2>

          <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
             Computer Science Engineering student (B.Tech CSE, 2026) with strong problem-solving skills and solid foundation in
 Data Structures, Algorithms, Object-Oriented Design, and Databases. Proficient in Java, with experience in building
 scalable backend services and distributed systems using Spring Boot and Docker. Passionate about developing innovative
 solutions to improve customer experiences and adept at delivering high-quality, efficient, and standard code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px 5px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              View My Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-purple-500 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300"
            >
             <a href="/kamati_bhargav_resume_2026__1_.pdf" download>Download Resume</a>
              
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ArrowDown className="text-purple-400 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
