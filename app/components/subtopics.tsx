"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground2 } from "@/app/components/ui/aurora-background2";
import { PlaceholdersAndVanishInputDemo } from "@/app/components/input-component";
import Link from "next/link";
import { CardHoverEffectDemo } from "../components/cards-hovering";

export function AuroraBackgroundDemo2() {
  return (
    <AuroraBackground2>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          CourseCrafter.
        </div>
        <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
          Unlock the future of learning with AI-powered courses, tailored just
          for you.
        </div>
        <CardHoverEffectDemo />
      </motion.div>
    </AuroraBackground2>
  );
}
