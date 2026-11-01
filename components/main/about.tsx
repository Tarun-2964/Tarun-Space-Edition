"use client";

import { motion } from "framer-motion";

import { PROFILE, QUICK_FACTS } from "@/constants";

export const About = () => (
  <section id="about-me" className="px-6 md:px-20 py-20 flex flex-col items-center">
    <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
      About Me
    </h2>

    <div className="max-w-[1000px] w-full grid md:grid-cols-5 gap-8">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:col-span-3 text-gray-300 text-lg leading-relaxed"
      >
        {PROFILE.summary}
      </motion.p>

      <motion.dl
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="md:col-span-2 grid gap-3"
      >
        {QUICK_FACTS.map((f) => (
          <div
            key={f.label}
            className="rounded-lg border border-[#2A0E61] bg-[rgba(113,47,255,0.08)] px-4 py-3"
          >
            <dt className="text-xs uppercase tracking-wider text-[#b49bff]">{f.label}</dt>
            <dd className="text-white">{f.value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);
