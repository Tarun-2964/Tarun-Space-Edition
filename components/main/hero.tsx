"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { PROFILE } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Hero = () => (
  <section id="home" className="relative flex flex-col w-full">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
    >
      <source src="/videos/blackhole.webm" type="video/webm" />
    </video>

    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-32 md:mt-40 w-full z-[20] gap-10"
    >
      <div className="w-full flex flex-col gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h2 className="Welcome-text text-[13px]">Hello, I&apos;m {PROFILE.shortName}</h2>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-4 text-5xl md:text-6xl font-bold text-white max-w-[640px]"
        >
          <span>{PROFILE.name}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl md:text-4xl">
            {PROFILE.roles.join(" | ")}
          </span>
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-3 max-w-[600px]"
        >
          {PROFILE.heroTagline}
        </motion.p>

        <motion.div variants={slideInFromLeft(1)} className="flex flex-wrap gap-4">
          <Link href="/projects" className="py-2 px-6 button-primary text-center text-white rounded-lg">
            View Projects
          </Link>
          <Link
            href="/hire-me"
            className="py-2 px-6 text-center text-white rounded-lg border border-[#7042f88b] hover:bg-[rgba(113,47,255,0.15)] transition"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Developer illustration"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
          priority
        />
      </motion.div>
    </motion.div>
  </section>
);
