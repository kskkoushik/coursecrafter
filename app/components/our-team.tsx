"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground3 } from "@/app/components/ui/aurora-background3";
import { StickyScrollRevealDemo } from "@/app/components/sticky-scrolling";
import { AnimatedTooltipPreview } from "@/app/components/team-page";

export function AuroraBackgroundDemo4() {
  return (
    <AuroraBackground3>
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
        <div className=" text-7xl font-bold dark:text-white text-center">
          Meet our team
          <br />
          <br />
          <AnimatedTooltipPreview />
        </div>
      </motion.div>
    </AuroraBackground3>
  );
}
