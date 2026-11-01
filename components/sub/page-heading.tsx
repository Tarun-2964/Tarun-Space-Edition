"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

type PageHeadingProps = { badge: string; title: string; subtitle?: string };

export const PageHeading = ({ badge, title, subtitle }: PageHeadingProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center text-center gap-4 pt-36 pb-10 px-6"
  >
    <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b]"
    >
      <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
      <h2 className="Welcome-text text-[13px]">{badge}</h2>
    </motion.div>
    <motion.h1
      variants={slideInFromLeft(0.3)}
      className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-1"
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p
        variants={slideInFromLeft(0.5)}
        className="text-gray-400 max-w-[640px]"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);
