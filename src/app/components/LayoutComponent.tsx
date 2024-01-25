"use client";
import Image, { StaticImageData } from "next/image";
import Nav from "./Nav";
import ContactInfos from "./ContactInfos";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { paddingX } from "../constants/styles";
import { motion } from "framer-motion";

export default function LayoutComponent({
  children,
  mainFrame,
}: {
  children?: React.ReactNode;
  mainFrame: StaticImageData;
}) {
  const pathname = usePathname();
  return (
    <div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2">
        <div className="xl:col-span-2">
          <Nav />
          <div className={paddingX}>{children}</div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "anticipate",
          }}
          className="w-full h-[80dvh] overflow-hidden relative hidden sm:block"
        >
          {pathname === "/" && (
            <div className="absolute bottom-5 right-10">
              <Button />
            </div>
          )}
          <Image
            alt="JouryBelle"
            src={mainFrame}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
      <div className="mt-10 mb-5">
        <ContactInfos padding />
      </div>
    </div>
  );
}
