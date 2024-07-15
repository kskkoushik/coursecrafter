"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About Us",
    description:
      "At Course Crafter, we believe in the transformative power of technology to revolutionize education. Our platform leverages advanced AI to generate comprehensive courses tailored to your specific interests and learning needs",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Know about us
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "Our mission at Course Crafter is to democratize education by making high-quality learning resources accessible to everyone. We aim to bridge the gap between curiosity and knowledge, providing learners worldwide with the tools they need to achieve their goals. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--emerald-500))] flex items-center justify-center text-white">
        We will achieve our mission
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "How It Works",
    description:
      "Course Crafter makes learning intuitive and exciting. Simply enter a topic you're passionate about, and our sophisticated AI engine will curate an entire course, complete with modules, assignments, and engaging content.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        powered by AI
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
