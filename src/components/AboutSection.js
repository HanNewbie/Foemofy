"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden scroll-mt-11"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-30"
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center mb-14 tracking-tight"
      >
        About Us
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/img/ppl.jpg"
            alt="About illustration"
            className="w-[85%] md:w-[80%] lg:w-[95%] drop-shadow-xl rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-blue-100 max-w-xl mx-auto"
          >
            <span className="font-semibold text-blue-600">
              Foemofy Creative Agency
            </span>
            , kami membantu bisnis dan brand tampil lebih menarik lewat desain,
            strategi digital, dan ide-ide segar. Tujuan kami sederhana — membuat
            karya yang tidak hanya indah, tapi juga membawa hasil nyata untuk
            klien kami.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
