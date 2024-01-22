"use client";
import { motion } from "framer-motion";
import LayoutComponent from "../components/LayoutComponent";
import { about, contact } from "@/assets";

export default function page() {
  return (
    <LayoutComponent mainFrame={contact}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
        }}
        className="text-5xl font-bold uppercase"
      >
        Contactez Nous
      </motion.h1>
    </LayoutComponent>
  );
}
