"use client";
import { navlinks } from "../constants/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "circInOut",
            delay: 0.5,
          }}
          className="lg:text-5xl text-3xl font-bold text-light-1/70"
        >
          Elegance Sublime
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "circInOut",
            delay: 0.8,
          }}
          className="lg:text-7xl text-4xl font-bold"
        >
          Eclat de
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "circInOut",
            delay: 1.1,
          }}
          className="lg:text-9xl text-7xl font-bold text-primary-0"
        >
          Beaute
        </motion.div>{" "}
      </div>
      <div className="flex justify-end">
        <ul className="flex flex-col gap-7 mt-16">
          {navlinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "circInOut",
                delay: 0.5 + index * 0.1,
              }}
            >
              <Link
                draggable
                className="lg:text-5xl xs:text-4xl text-3xl font-medium text-hover"
                href={link.link}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
