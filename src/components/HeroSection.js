"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-600 to-blue-300 text-white text-center overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl font-extrabold mb-4"
      >
        Foemofy Creative Agency
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="max-w-2xl text-lg mb-6"
      >
        Kami adalah agensi kreatif yang membantu brand Anda tumbuh melalui desain,
        teknologi, dan strategi digital.
      </motion.p>

      <motion.a
        href="#about"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
      >
        Learn More
      </motion.a>
    </section>
  );
}
