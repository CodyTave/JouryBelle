"use client";
import { AnimatePresence, motion } from "framer-motion";
import { contact, socials } from "../constants/data";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { whatsapp } from "@/assets";

export default function ContactInfos() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex sm:flex-row flex-col gap-x-24 gap-y-5 justify-center">
      <motion.ul>
        {socials.map((social, index) => (
          <motion.li
            key={social.id}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "circInOut",
              delay: 0.8 + index * 0.1,
            }}
            className="hover:underline"
          >
            <Link
              className="text-hover uppercase"
              target="_blank"
              href={social.link}
            >
              {social.title}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <motion.ul>
        {contact.map((contact, index) => (
          <motion.li
            key={contact.id}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "circInOut",
              delay: 1 + index * 0.1,
            }}
            className="max-w-72 hover:underline"
          >
            <Link
              className={` ${
                contact.id === "address" || "text-hover"
              } uppercase`}
              target="_blank"
              href={contact.link}
            >
              {contact.content}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <motion.button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
          delay: 1.2,
        }}
        className=" bg-light-0 px-5 py-4 text-dark-0 font-bold rounded-full h-fit my-auto hover:text-light-0 hover:bg-dark-0 hover:px-7 transall"
      >
        <Link className="flex items-center gap-2" href={"/"}>
          <span className="uppercase flex items-center">Reserver</span>
          {hovered && (
            <div className="overflow-hidden block">
              <Image className="w-4" alt="whatsapp" src={whatsapp} />
            </div>
          )}
        </Link>
      </motion.button>
    </div>
  );
}
