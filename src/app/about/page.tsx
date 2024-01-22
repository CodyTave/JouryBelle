"use client";
import { motion } from "framer-motion";
import LayoutComponent from "../components/LayoutComponent";
import { about } from "@/assets";

export default function page() {
  return (
    <LayoutComponent mainFrame={about}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
        }}
        className="text-5xl font-bold"
      >
        A PROPOS DE
        <div className="mt-5 text-6xl text-primary-0">JOURY BELLE</div>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
          delay: 0.5,
        }}
        className="mt-10 text-xl max-w-screen-sm font-light"
      >
        {`Plongez dans l'univers des soins du visage chez Joury Belle. Que ce soit pour une hydratation profonde, une lutte contre le vieillissement, ou simplement pour un éclat naturel, nos traitements personnalisés sont là pour répondre à tous vos besoins. Votre peau mérite le meilleur !`}
      </motion.p>
    </LayoutComponent>
  );
}
