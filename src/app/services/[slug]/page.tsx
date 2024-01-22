"use client";
import LayoutComponent from "../../components/LayoutComponent";
import { Services } from "@/app/constants/data";
import { main } from "@/assets";
import Button from "@/app/components/Button";
import { motion } from "framer-motion";

export default function page({ params }: { params: { slug: string } }) {
  const service = Services.find((service) => service.slug === params.slug);
  const nextService = Services[Services.indexOf(service!) + 1] || Services[0];
  return (
    <LayoutComponent mainFrame={service?.mainFrame || main}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
        }}
        className="text-5xl font-bold"
      >
        {service?.title}
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
        {service?.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
          delay: 0.8,
        }}
        className="flex justify-end mt-5"
      >
        <Button link={"/services/" + nextService?.slug} next />
      </motion.div>
    </LayoutComponent>
  );
}
