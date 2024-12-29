'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </motion.div>
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Hi, Im Your Name</h2>
          <p className="mb-4">
            Im a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional web applications that solve real-world problems.
          </p>
          <p>
            When Im not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

