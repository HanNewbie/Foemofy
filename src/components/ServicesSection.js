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
    <section id="services" className="py-24 bg-gray-50 overflow-hidden scroll-mt-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-blue-600 text-center mb-16 tracking-tight"
      >
        Our Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <video
            src="/video/sead.mov"
            autoPlay
            muted
            loop
            playsInline
            className="w-[280px] h-[500px] md:w-[280px] md:h-[480px] rounded-3xl shadow-xl object-cover border-4 border-white"
          ></video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
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
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:w-[85%]"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
