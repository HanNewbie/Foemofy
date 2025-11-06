"use client";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Promotion",
      desc: "Kami membantu mengembangkan identitas dan strategi brand agar lebih kuat dan berkesan.",
    },
    {
      title: "Digital Marketing",
      desc: "Strategi pemasaran digital untuk meningkatkan jangkauan dan konversi brand Anda.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gray-50 overflow-hidden scroll-mt-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-blue-600 text-center mb-12 tracking-tight"
      >
        Our Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center order-1 md:order-none"
        >
          <video
            src="/video/fmy.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-[220px] h-[400px] sm:w-[260px] sm:h-[460px] md:w-[280px] md:h-[480px] rounded-3xl shadow-xl object-cover border-4 border-white"
          ></video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6 text-center md:text-left"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-[85%] mx-auto md:mx-0"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
