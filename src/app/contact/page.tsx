"use client";
import { motion } from "framer-motion";
import LayoutComponent from "../components/LayoutComponent";
import { about, contact } from "@/assets";
import Input from "../components/Input";
import { useState } from "react";
import { MessageGenerator } from "../utils/functions";
import { whatsappNumber } from "../constants/data";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    tel: "",
    email: "",
    message: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }
  function handleSubmit() {
    const text = MessageGenerator(form);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  }
  return (
    <LayoutComponent mainFrame={contact}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
        }}
        className="text-5xl font-bold uppercase "
      >
        Contactez Nous
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
        }}
        className="mt-10 flex flex-col gap-8"
      >
        <Input name="fullName" onChange={handleChange} ph="Nom Et Prenom" />
        <Input name="tel" onChange={handleChange} ph="Numero Tel" />
        <Input name="email" onChange={handleChange} ph="Email" />
        <Input name="message" onChange={handleChange} ph="Votre Message" />
        <button
          onClick={handleSubmit}
          className="flex justify-start bg-light-0 px-10 py-4 text-dark-0 font-bold border border-light-0 rounded-full h-fit w-fit hover:text-light-0 hover:bg-dark-0 hover:px-7 transall text-3xl"
        >
          Envoyer
        </button>
      </motion.div>
    </LayoutComponent>
  );
}
