"use client";
import { jbwhite } from "@/assets";
import { paddingX, paddingY } from "@/app/constants/styles";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navlinks } from "../constants/data";
import ContactInfos from "./ContactInfos";
import BurgerIcon from "@/assets/Svgs/BurgerIcon";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className={"flex justify-between items-center" + paddingX + paddingY}
      >
        <Link href="/">
          <Image className="w-16" alt="JouryBelle" src={jbwhite} />
        </Link>
        <button onClick={() => setOpen(true)}>
          <BurgerIcon open={open} className="w-12" />
        </button>
      </nav>
      <AnimatePresence mode="wait">
        {open && (
          <motion.nav
            initial={{ top: "-100%" }}
            animate={{ top: 0 }}
            exit={{ top: "-100%" }}
            transition={{ duration: 0.5, ease: "circInOut" }}
            className={
              "fixed top-0 left-0 w-screen h-[100dvh] bg-secondary-0 z-50 overflow-auto " +
              paddingX +
              paddingY
            }
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-10"
            >
              Fermer
            </button>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "circInOut", delay: 0.3 }}
            >
              <Image className="w-16" alt="JouryBelle" src={jbwhite} />
            </motion.div>

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
                    onClick={() => setOpen(false)}
                    draggable
                    className="xs:text-6xl text-4xl font-medium text-hover"
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-20">
              <ContactInfos />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
