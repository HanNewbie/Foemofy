"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  return (
    <footer id="contact" className="bg-[#7694F5] text-black scroll-mt-10">
      <div className="max-w-6xl mx-auto bg-[#FCD94B] rounded-3xl p-10 mt-20 mb-16 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Ready to work with us?
        </h2>
        <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Get Started →
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-16">
        <div>
          <h3 className="text-2xl font-bold mb-3">FOEMOFY CREATIVE</h3>
          <p className="text-sm text-black/80 mb-6 leading-relaxed">
            Kami menawarkan layanan digital marketing lengkap — dari desain,
            strategi media sosial, hingga pembuatan konten kreatif.
          </p>

          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.instagram.com/foemofycreative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.tiktok.com/@foemofycreative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li><FontAwesomeIcon icon={faPhone} className="mr-2" /> (406) 555-0120</li>
            <li><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> hello@foemofy.com</li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Jl. Merdeka No. 45, Jakarta</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

